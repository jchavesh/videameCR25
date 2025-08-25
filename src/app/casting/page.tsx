
import { CastingForm } from '@/components/casting-form';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function CastingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <section id="casting-form" className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                  Casting
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                  Completa el formulario para postularte a nuestras próximas producciones. ¡Buscamos talento como tú!
                </p>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-10 border border-border">
                <CastingForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
