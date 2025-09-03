
"use client";

import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { LanguageContext } from '@/context/language-context';
import { content } from '@/data/content';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = content[language].page;

  const navLinks = [
    { href: '/#servicios', label: t.navServices },
    { href: '/#portafolio', label: t.navPortfolio },
    { href: '/#proceso', label: t.navProcess },
    { href: '/#sobre', label: t.navAbout },
    { href: '/casting', label: t.navCasting },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

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

          <div className="flex items-center gap-2">
             <div className="hidden md:flex items-center gap-2">
                <Button asChild>
                  <Link href="/portal">{t.navPortal}</Link>
                </Button>
                <Button asChild>
                  <Link href="/#contacto">{t.navContact}</Link>
                </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('es')}>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
                  <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                       <Link href="/" onClick={handleMobileMenuLinkClick}>
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
                      {[...navLinks, { href: '/portal', label: t.navPortal }].map((link) => (
                           <Link 
                              key={link.href} 
                              href={link.href} 
                              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                              onClick={handleMobileMenuLinkClick}
                            >
                              {link.label}
                           </Link>
                      ))}
                    </nav>
                     <div className="mt-auto">
                        <Button asChild className="w-full">
                          <Link href="/#contacto" onClick={handleMobileMenuLinkClick}>{t.navContact}</Link>
                        </Button>
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
