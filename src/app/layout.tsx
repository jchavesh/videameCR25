
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/context/language-context';

const logoUrl = '/images/Favicon.png';

export const metadata: Metadata = {
  title: 'Producción Audiovisual y Videos Profesionales en Costa Rica | Videame',
  description: 'Creamos videos corporativos, publicitarios y cinematográficos en Costa Rica. Producción audiovisual profesional para marcas que quieren destacar.',
  icons: {
    icon: '/images/Favicon.png',
  },
  openGraph: {
    title: 'Producción Audiovisual y Videos Profesionales en Costa Rica | Videame',
    description: 'Creamos videos corporativos, publicitarios y cinematográficos en Costa Rica. Producción audiovisual profesional para marcas que quieren destacar.',
    url: 'https://videame.cr',
    siteName: 'Videame',
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 630,
        alt: 'Videame Audiovisual Logo',
      },
    ],
    locale: 'es_CR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Producción Audiovisual y Videos Profesionales en Costa Rica | Videame',
    description: 'Creamos videos corporativos, publicitarios y cinematográficos en Costa Rica. Producción audiovisual profesional para marcas que quieren destacar.',
    images: [logoUrl],
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
