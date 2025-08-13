
"use client";

import Image from 'next/image';
import {
  Camera,
  Clapperboard,
  Megaphone,
  Scissors,
  ChevronRight,
  MapPin,
  Mail,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ContactForm } from '@/components/contact-form';
import PortfolioGrid from '@/components/portfolio-grid';
import { services, testimonials, clients, processSteps } from '@/data/content';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const [isReelOpen, setIsReelOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const servicesRef = useRef<HTMLElement>(null);
  const { scrollYProgress: servicesScrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"],
  });
  const servicesY = useTransform(servicesScrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: aboutImageScrollYProgress } = useScroll({
      target: aboutImageRef,
      offset: ["start end", "end start"],
  });
  const aboutImageY = useTransform(aboutImageScrollYProgress, [0, 1], ["-20%", "20%"]);


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
            style={{ y }}
          >
            {/* Ideally, use a WebM for performance */}
            <source src="https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 px-4">
            
            <motion.div style={{ y }} className="mt-10 flex flex-wrap justify-center gap-4">
              <Dialog open={isReelOpen} onOpenChange={setIsReelOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" aria-label="Ver Reel de Videame">
                    Ver Reel
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-auto p-0 bg-black border-primary/20">
                    <DialogHeader>
                      <DialogTitle className="sr-only">Videame Reel</DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video">
                        <video 
                            src="https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/reel.mp4"
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
                <Link href="#contacto">Solicitar Cotización</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="servicios" ref={servicesRef} className="py-20 sm:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div style={{ y: servicesY }} className="text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Nuestros Servicios
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Desde la idea hasta la entrega final, te acompañamos en cada paso.
              </p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="bg-secondary/50 border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                      {service.icon}
                    </div>
                    <CardTitle className="mt-4 text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portafolio" className="py-20 sm:py-32 bg-secondary/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Nuestro Trabajo
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Explora una selección de proyectos que hemos traído a la vida.
              </p>
            </div>
            <PortfolioGrid />
          </div>
        </section>

        <section id="proceso" className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Nuestro Proceso Creativo
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Un enfoque estructurado para garantizar resultados excepcionales.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative mb-12 md:mb-20">
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="hidden md:block w-1/2"></div>
                    <div className="hidden md:block relative w-12 h-12">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-primary ring-8 ring-background"></div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:px-8">
                       <Card className="p-6 bg-secondary/50 border-border">
                         <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 text-primary">{step.icon}</div>
                          <div>
                            <Badge variant="outline" className="mb-2">Paso {index + 1}</Badge>
                            <h3 className="text-2xl font-headline font-semibold">{step.title}</h3>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                          </div>
                         </div>
                       </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="py-20 sm:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Lo que dicen nuestros clientes
              </h2>
            </div>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full bg-background/50 border-border">
                        <CardContent className="flex flex-col items-center text-center p-6">
                           <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                             <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                             <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                           </Avatar>
                           <p className="italic text-foreground">"{testimonial.quote}"</p>
                           <p className="mt-4 font-semibold font-headline text-primary">{testimonial.name}</p>
                           <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="sobre" className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Sobre Videame</h2>
                        <div className="mt-6 text-lg text-muted-foreground space-y-6">
                          <p className="text-justify">
                            En Videame integramos diseño, tecnología y storytelling para convertir objetivos de comunicación en piezas audiovisuales memorables. Nuestro enfoque combina motion graphics, experiencias AR/VR y postproducción de alto nivel, con una operación de extremo a extremo: concepto y guión, producción y post, hasta la entrega final para TV, social y web. Trabajamos de cerca con cada marca para asegurar coherencia visual, claridad del mensaje y resultados medibles.
                          </p>
                           <p className="text-justify">
                            La dirección creativa está a cargo de José Chaves, Productor Audiovisual, Filmmaker e Ingeniero en Sistemas con 16 años de experiencia, reconocido por fusionar precisión técnica con lenguaje cinematográfico. Bajo su liderazgo, el estudio impulsa flujos eficientes, acabados consistentes y soluciones creativas alineadas a cada identidad de marca.
                           </p>
                        </div>
                    </div>
                    <div ref={aboutImageRef} className="overflow-hidden rounded-lg">
                        <motion.div style={{ y: aboutImageY }}>
                          <Image 
                              src="https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/jose-chaves.jpeg"
                              alt="Jose Chaves, Productor Audiovisual"
                              width={600}
                              height={400}
                              className="rounded-lg shadow-lg w-full"
                              data-ai-hint="man portrait"
                          />
                        </motion.div>
                    </div>
                </div>
                 <div className="mt-20">
                    <h3 className="text-center text-2xl font-headline font-semibold mb-8">Algunos de nuestros clientes</h3>
                    <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                        <div className="flex animate-scroll" style={{ animationDuration: '91s' }}>
                            {clients.concat(clients).map((client, index) => (
                                <div key={`${client.name}-${index}`} className="flex-shrink-0 mx-8">
                                    <Image
                                        src={client.logoUrl}
                                        alt={`${client.name} logo`}
                                        width={120}
                                        height={60}
                                        className="object-contain"
                                        data-ai-hint="company logo"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contacto" className="py-20 sm:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Hablemos de tu proyecto</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Completa el formulario o contáctanos directamente. Estamos listos para crear algo increíble juntos.
              </p>
            </div>
            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="p-6 sm:p-8 bg-background/50">
                  <ContactForm />
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="p-6 bg-background/50">
                  <h3 className="font-headline text-lg font-semibold mb-4">Información de Contacto</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <a href="mailto:info@videamecr.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>info@videamecr.com</span>
                    </a>
                    <a href="https://wa.me/50683315395" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <Smartphone className="w-5 h-5" />
                      <span>WhatsApp (+506) 8331-5395</span>
                    </a>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>San José, Costa Rica</span>
                    </div>
                  </div>
                </Card>
                 <Card className="p-6 bg-background/50">
                  <h3 className="font-headline text-lg font-semibold mb-4">¿Por qué Videame?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Calidad cinematográfica en cada proyecto.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Entrega a tiempo, siempre.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Equipo creativo y flexible adaptado a tus necesidades.</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
