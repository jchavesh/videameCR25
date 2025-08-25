
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/context/language-context';
import { AuthProvider } from '@/context/auth-context';

const logoUrl = 'https://studio.bypgd.com/pdgstudio/Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/VideameLogoFinal.svg';

export const metadata: Metadata = {
  title: 'Producción Audiovisual y Videos Profesionales en Costa Rica | Videame',
  description: 'Creamos videos corporativos, publicitarios y cinematográficos en Costa Rica. Producción audiovisual profesional para marcas que quieren destacar.',
  icons: {
    icon: 'https://studio.bypgd.com/pdgstudio/Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Favicon.png',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')} suppressHydrationWarning>
        <AuthProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
