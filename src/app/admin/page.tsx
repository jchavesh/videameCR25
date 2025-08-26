
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, LogOut } from 'lucide-react';
import { CastingSubmissionsClient } from '@/components/casting-submissions-client';

const PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if authenticated from session storage
    const sessionAuth = sessionStorage.getItem('isAdminAuthenticated');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (password === PASSWORD) {
      toast({
        title: 'Acceso concedido',
        description: 'Bienvenido al panel de administración.',
      });
      setIsAuthenticated(true);
      sessionStorage.setItem('isAdminAuthenticated', 'true');
    } else {
      toast({
        variant: 'destructive',
        title: 'Acceso denegado',
        description: 'La contraseña es incorrecta.',
      });
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    setIsAuthenticated(false);
    setPassword('');
     toast({
        title: 'Sesión cerrada',
        description: 'Has salido del panel de administración.',
      });
  };

  if (!PASSWORD) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-secondary">
            <div className="text-center p-8 bg-background rounded-lg shadow-xl">
                <h1 className="text-2xl font-bold text-destructive">Error de Configuración</h1>
                <p className="text-muted-foreground mt-4">
                    La variable de entorno NEXT_PUBLIC_ADMIN_PASSWORD no está configurada.
                </p>
            </div>
        </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-secondary/30">
        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleLogin} className="bg-background shadow-xl rounded-lg p-8 space-y-6 border border-border">
            <div className="text-center">
              <h1 className="text-2xl font-headline font-bold text-primary">Acceso de Administrador</h1>
              <p className="text-muted-foreground mt-2">Ingresa la contraseña para ver las postulaciones.</p>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Entrar'}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
        <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                     <h1 className="font-headline text-2xl font-bold text-primary">Postulaciones de Casting</h1>
                     <Button variant="ghost" size="icon" onClick={handleLogout} aria-label="Cerrar sesión">
                        <LogOut className="h-5 w-5"/>
                     </Button>
                </div>
            </div>
        </header>
        <main className="container mx-auto px-4 py-8">
            <CastingSubmissionsClient />
        </main>
    </div>
  )
}
