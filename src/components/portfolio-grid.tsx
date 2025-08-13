"use client";

import { useState } from 'react';
import Image from 'next/image';
import { portfolio, PortfolioCategory, PortfolioProject } from '@/data/content';
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

const categories: PortfolioCategory[] = ['Comercial', 'Evento', 'Producto', 'Marca Personal', 'Drone'];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'Todos'>('Todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredPortfolio = activeCategory === 'Todos' 
    ? portfolio 
    : portfolio.filter(p => p.category === activeCategory);

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mt-8 mb-12">
        <Button
          variant={activeCategory === 'Todos' ? 'default' : 'outline'}
          onClick={() => setActiveCategory('Todos')}
        >
          Todos
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
          <Dialog key={project.id}>
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
                  height={project.category === 'Evento' || project.category === 'Drone' ? 400 : 800}
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
                        <div className="p-8 flex flex-col justify-center">
                            <DialogHeader>
                                <DialogTitle className="font-headline text-3xl text-primary">{project.title}</DialogTitle>
                                <DialogDescription className="text-muted-foreground mt-2 text-base">
                                    {project.description}
                                </DialogDescription>
                            </DialogHeader>
                            <p className="mt-4 text-sm font-semibold text-foreground">{project.category}</p>
                        </div>
                        <div>
                        {project.videoUrl ? (
                             <div className="aspect-video w-full h-full bg-black">
                                <iframe 
                                    src={project.videoUrl.replace("youtu.be/", "youtube.com/embed/").replace("?si=", "?").split("?")[0]}
                                    width="100%" 
                                    height="100%" 
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture" 
                                    allowFullScreen
                                    title={project.title}>
                                </iframe>
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
