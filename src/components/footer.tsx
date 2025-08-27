
"use client";

import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { Logo } from './logo';
import { useContext } from 'react';
import { LanguageContext } from '@/context/language-context';
import { content } from '@/data/content';

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/videame.cr', icon: <Instagram className="w-6 h-6" /> },
  { name: 'YouTube', href: 'https://www.youtube.com/@VideameMedia', icon: <Youtube className="w-6 h-6" /> },
];

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = content[language].page;

  return (
    <footer className="bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-3xl font-bold font-headline text-primary mb-2 inline-block">
                <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Videame en ${link.name}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t.footerRights}</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-primary transition-colors">{t.footerPrivacy}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
