
"use client";

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { LanguageContext } from '@/context/language-context';
import { content } from '@/data/content';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useContext, useRef, useState } from 'react';

export default function Hero() {
  const [isReelOpen, setIsReelOpen] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = content[language];

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const buttonsY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        style={{ y }}
        >
        <source src="/images/reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </motion.video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4">
        
        <motion.div style={{ y: buttonsY }} className="mt-10 flex flex-wrap justify-center gap-4">
            <Dialog open={isReelOpen} onOpenChange={setIsReelOpen}>
            <DialogTrigger asChild>
                <Button size="lg" aria-label="Ver Reel de Videame">
                {t.page.seeReel}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-auto p-0 bg-black border-primary/20">
                <DialogHeader>
                    <DialogTitle className="sr-only">Videame Reel</DialogTitle>
                </DialogHeader>
                <div className="aspect-video">
                    <video 
                        src="/images/reel.mp4"
                        width="100%" 
                        height="100%" 
                        controls
                        autoPlay
                        playsInline
                        title="Videame Reel">
                    </video>
                </div>
            </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" asChild>
            <Link href="#contacto">{t.page.getQuote}</Link>
            </Button>
        </motion.div>
        </div>
    </section>
  );
}
