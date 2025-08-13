
import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { VimeoIcon } from './icons/vimeo-icon';
import { Logo } from './logo';

const socialLinks = [
  { name: 'Instagram', href: 'http://instagram.com/videame.cr', icon: <Instagram className="w-6 h-6" /> },
  { name: 'YouTube', href: 'https://www.youtube.com/@VideameMedia', icon: <Youtube className="w-6 h-6" /> },
  { name: 'Vimeo', href: '#', icon: <VimeoIcon className="w-6 h-6" /> },
];

export default function Footer() {
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
          <p>&copy; {new Date().getFullYear()} Videame. Todos los derechos reservados. San José, Costa Rica.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
