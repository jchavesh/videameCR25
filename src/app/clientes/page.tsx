
"use client";

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Download, KeyRound } from 'lucide-react';

export default function ClientesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projectCode, setProjectCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!projectCode.trim()) {
        toast({
            variant: 'destructive',
            title: 'Código Inválido',
            description: 'Por favor, ingresa un código de proyecto.',
        });
        setIsLoading(false);
        return;
    }

    const potentialUrl = `/work/${projectCode.toLowerCase().trim()}.zip`;
    
    try {
        // We check if the file exists by making a HEAD request.
        const response = await fetch(potentialUrl, { method: 'HEAD' });

        if (response.ok) {
            toast({
                title: 'Acceso Concedido',
                description: `Tu proyecto está listo para descargar.`,
            });
            setDownloadUrl(potentialUrl);
            setIsAuthenticated(true);
        } else {
            toast({
                variant: 'destructive',
                title: 'Acceso Denegado',
                description: 'El código de proyecto es incorrecto o el archivo no existe.',
            });
            setIsAuthenticated(false);
        }
    } catch (error) {
         toast({
            variant: 'destructive',
            title: 'Error de Red',
            description: 'No se pudo verificar el proyecto. Inténtalo de nuevo.',
        });
        setIsAuthenticated(false);
    }

    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setProjectCode('');
    setDownloadUrl('');
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-secondary/30">
          <div className="w-full max-w-md mx-auto p-4">
            <div className="bg-background shadow-xl rounded-lg p-8 space-y-6 border border-border">
              <div className="text-center">
                <KeyRound className="mx-auto h-12 w-12 text-primary/50" />
                <h1 className="text-2xl font-headline font-bold text-primary mt-4">Portal de Clientes</h1>
                <p className="text-muted-foreground mt-2">Ingresa tu código de proyecto para descargar los entregables.</p>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="projectCode" className="sr-only">Código de Proyecto</label>
                  <Input
                    id="projectCode"
                    type="text"
                    value={projectCode}
                    onChange={(e) => setProjectCode(e.target.value)}
                    placeholder="Código de Proyecto"
                    required
                    className="text-center"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Acceder'}
                </Button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
       <Header />
        <main className="flex-1 flex items-center justify-center bg-secondary/30">
            <div className="container mx-auto px-4 py-16 text-center">
                 <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg shadow-xl p-8 sm:p-12 border border-border">
                    <Download className="mx-auto h-16 w-16 text-primary" />
                    <h1 className="mt-6 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                        Proyecto: {projectCode}
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        ¡Tu proyecto está listo para descargar!
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg">
                            <a href={downloadUrl} download>
                                <Download className="mr-2"/>
                                Descargar Archivos (.zip)
                            </a>
                        </Button>
                    </div>
                     <div className="mt-8">
                        <Button variant="ghost" onClick={handleLogout}>Ingresar otro código</Button>
                    </div>
                </div>
            </div>
        </main>
       <Footer />
    </div>
  )
}
