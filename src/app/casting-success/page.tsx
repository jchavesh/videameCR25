
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CastingSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-secondary/30">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg shadow-xl p-8 sm:p-12 border border-border">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h1 className="mt-6 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              ¡Postulación Recibida!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Gracias por tu interés. Hemos recibido tu información correctamente. Revisaremos tu perfil y nos pondremos en contacto si encajas en alguna de nuestras producciones.
            </p>
            <p className="mt-2 text-muted-foreground">¡Mucha suerte!</p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/">
                  Volver al Inicio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
