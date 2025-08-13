import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/context/language-context';

export const metadata: Metadata = {
  title: 'Videame | Producción Audiovisual & Fotografía en Costa Rica',
  description: 'Producción audiovisual y fotografía con sello cinematográfico, desde Costa Rica para el mundo. Contamos historias que se sienten en pantalla.',
  icons: {
    icon: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Favicon.png',
  },
  openGraph: {
    title: 'Videame | Producción Audiovisual & Fotografía en Costa Rica',
    description: 'Producción audiovisual y fotografía con sello cinematográfico, desde Costa Rica para el mundo.',
    url: 'https://videame.cr',
    siteName: 'Videame',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Videame Audiovisual',
      },
    ],
    locale: 'es_CR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Videame | Producción Audiovisual & Fotografía en Costa Rica',
    description: 'Producción audiovisual y fotografía con sello cinematográfico.',
    images: ['https://placehold.co/1200x630.png'],
  },
  metadataBase: new URL('https://videame.cr'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
