
"use client";

import { useState, useContext } from 'react';
import Image from 'next/image';
import { content, PortfolioCategory, PortfolioProject } from '@/data/content';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/context/language-context';

export default function PortfolioGrid() {
  const { language } = useContext(LanguageContext);
  const t = content[language];
  const pageT = t.page;

  const categories: PortfolioCategory[] = language === 'es' 
      ? ['Comercial', 'Marca Personal', 'Motion Graphics']
      : ['Commercial', 'Personal Brand', 'Motion Graphics'];

  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'Todos' | 'All'>('Todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  
  const allCategory = language === 'es' ? 'Todos' : 'All';

  const filteredPortfolio = activeCategory === allCategory || activeCategory === 'Todos' || activeCategory === 'All'
    ? t.portfolio 
    : t.portfolio.filter(p => p.category === activeCategory);

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
  };
  
  const getEmbedUrl = (videoUrl: string) => {
    let videoId;
    // Check if the URL is for YouTube
    if (videoUrl.includes('youtu.be') || videoUrl.includes('youtube.com')) {
      try {
        const url = new URL(videoUrl);
        videoId = url.hostname === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v');
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      } catch (e) {
        console.error("Invalid YouTube URL", e);
        return null;
      }
    }
    // Check if the URL is for Vimeo
    if (videoUrl.includes('vimeo.com')) {
       try {
        const url = new URL(videoUrl);
        videoId = url.pathname.split('/').pop()?.split('?')[0];
        return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
      } catch(e) {
        console.error("Invalid Vimeo URL", e);
        return null;
      }
    }
    // Return null if it's not a recognized embeddable URL
    return null;
  }
  
  const currentAllCategory = language === 'es' ? 'Todos' : 'All';

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mt-8 mb-12">
        <Button
          variant={activeCategory === currentAllCategory ? 'default' : 'outline'}
          onClick={() => setActiveCategory(currentAllCategory)}
        >
          {currentAllCategory}
        </Button>
        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredPortfolio.map((project, index) => (
          <Dialog key={project.id} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
            <DialogTrigger asChild>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-headline text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-primary">{project.category}</p>
                </div>
              </motion.div>
            </DialogTrigger>
            {selectedProject && selectedProject.id === project.id && (
                <DialogContent className="max-w-4xl bg-background/90 backdrop-blur-sm border-border p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                            <DialogHeader>
                                <DialogTitle className="font-headline text-3xl text-primary">{project.title === "Vuelta Al Lago" ? "Vuelta Al Lago 2025" : project.title === "Mambotopia" ? "Mambotopia 2025" : project.title}</DialogTitle>
                                <DialogDescription className="text-muted-foreground mt-2 text-base">
                                    {project.description}
                                </DialogDescription>
                            </DialogHeader>
                            <p className="mt-4 text-sm font-semibold text-foreground">{project.category}</p>
                             {project.videoUrl && !project.videoUrl.startsWith('/') && (
                                <Button asChild className="mt-4" variant="outline">
                                    <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">Ver Video</a>
                                </Button>
                            )}
                        </div>
                        <div className="order-1 md:order-2">
                        {project.videoUrl && project.videoUrl.startsWith('/') ? (
                             <div className="aspect-video w-full h-full bg-black">
                                <video src={project.videoUrl} width="100%" height="100%" controls autoPlay playsInline />
                             </div>
                        ) : (
                             <Image
                                src={project.gallery?.[0] || project.imageUrl}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="object-cover w-full h-full"
                                data-ai-hint={project.dataAiHint}
                            />
                        )}
                        </div>
                    </div>
                </DialogContent>
            )}
          </Dialog>
        ))}
      </motion.div>
    </div>
  );
}
