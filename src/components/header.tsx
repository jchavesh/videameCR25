"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#sobre', label: 'Sobre Nosotros' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold font-headline text-primary" aria-label="Videame Home">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#contacto">Contacto</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                       <Link href="/" className="text-2xl font-bold font-headline text-primary">
                          <Logo />
                       </Link>
                       <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                           <X className="h-6 w-6" />
                           <span className="sr-only">Cerrar menú</span>
                         </Button>
                       </SheetClose>
                    </div>
                    <nav className="flex flex-col gap-6">
                      {navLinks.map((link) => (
                         <SheetClose asChild key={link.href}>
                           <Link href={link.href} className="text-xl font-medium text-foreground hover:text-primary transition-colors">
                              {link.label}
                           </Link>
                         </SheetClose>
                      ))}
                    </nav>
                     <div className="mt-auto">
                        <SheetClose asChild>
                          <Button asChild className="w-full">
                            <Link href="#contacto">Contacto</Link>
                          </Button>
                        </SheetClose>
                     </div>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
