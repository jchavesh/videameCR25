
"use client";

import Image from 'next/image';
import {
  Mail,
  Smartphone,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { content } from '@/data/content';
import { useRef, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LanguageContext } from '@/context/language-context';
import Hero from '@/components/hero';

export default function Home() {
  const { language } = useContext(LanguageContext);
  const t = content[language];

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
        <Hero />

        <section id="servicios" ref={servicesRef} className="py-20 sm:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div style={{ y: servicesY }} className="text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {t.page.ourServices}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {t.page.ourServicesSub}
              </p>
            </motion.div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {t.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="bg-secondary/50 border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 h-full"
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="portafolio" className="py-20 sm:py-32 bg-secondary/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {t.page.ourWork}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {t.page.ourWorkSub}
              </p>
            </div>
            <PortfolioGrid />
          </div>
        </section>

        <section id="proceso" className="py-20 sm:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {t.page.ourProcess}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {t.page.ourProcessSub}
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
              {t.processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.title} className="relative mb-12 md:mb-20">
                     <motion.div 
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="md:flex md:items-center"
                     >
                        <div className={`md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
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
                        <div className="hidden md:flex md:w-1/2 relative justify-center items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="w-4 h-4 rounded-full bg-primary ring-8 ring-background z-10"
                            ></motion.div>
                        </div>
                      </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="testimonios" className="py-20 sm:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {t.page.testimonials}
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
                {t.testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="h-full bg-background/50 border-border">
                        <CardContent className="flex flex-col items-center text-center p-6">
                           <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                             <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
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
                        <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{t.page.aboutUs}</h2>
                        <div className="mt-6 text-lg text-muted-foreground space-y-6">
                          <p className="text-justify">
                            {t.page.aboutUsP1}
                          </p>
                           <p className="text-justify">
                            {t.page.aboutUsP2}
                           </p>
                        </div>
                    </div>
                    <div ref={aboutImageRef} className="overflow-hidden rounded-lg">
                        <motion.div style={{ y: aboutImageY }}>
                          <Image 
                              src="/images/jose-chaves.jpeg"
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
                    <h3 className="text-center text-2xl font-headline font-semibold mb-8">{t.page.ourClients}</h3>
                    <div 
                      className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
                      style={{'--gap': '1rem'} as React.CSSProperties}
                    >
                        <div className="flex w-max animate-scroll-slow hover:pause-animation gap-[var(--gap)]">
                            {[...t.clients, ...t.clients].map((client, index) => (
                                <div key={`${client.name}-${index}`} className="flex-shrink-0 w-48 flex justify-center items-center px-4">
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
              <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{t.page.contactUs}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {t.page.contactUsSub}
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
                  <h3 className="font-headline text-lg font-semibold mb-4">{t.page.contactInfo}</h3>
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
                  <h3 className="font-headline text-lg font-semibold mb-4">{t.page.whyUs}</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{t.page.whyUs1}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{t.page.whyUs2}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{t.page.whyUs3}</span>
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
