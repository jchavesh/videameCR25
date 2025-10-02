
"use client";

import { useState, useContext } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Download, KeyRound } from 'lucide-react';
import { LanguageContext } from '@/context/language-context';
import { content } from '@/data/content';

export default function PortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [projectCode, setProjectCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const t = content[language].page;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!projectCode.trim()) {
        toast({
            variant: 'destructive',
            title: t.clientsToastInvalidTitle,
            description: t.clientsToastInvalidDesc,
        });
        setIsLoading(false);
        return;
    }

    const code = projectCode.trim();
    const extensions = ['zip', 'mp4', 'jpg', 'pdf', 'mov'];
    let foundUrl = '';

    for (const ext of extensions) {
      const potentialUrl = `/work/${code}.${ext}`;
      try {
        const response = await fetch(potentialUrl, { method: 'HEAD' });
        if (response.ok) {
          foundUrl = potentialUrl;
          break; // Stop searching once a file is found
        }
      } catch (error) {
        // This can happen if the network fails, but we'll catch it globally later
        console.error(`Error checking for ${ext}:`, error);
      }
    }
    
    if (foundUrl) {
      toast({
          title: t.clientsToastSuccessTitle,
          description: t.clientsToastSuccessDesc,
      });
      setDownloadUrl(foundUrl);
      setIsAuthenticated(true);
    } else {
       toast({
          variant: 'destructive',
          title: t.clientsToastErrorTitle,
          description: t.clientsToastErrorDesc,
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/30">
        <section id="portal" className="py-20 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {!isAuthenticated ? (
                <>
                  <div className="text-center mb-12">
                    <KeyRound className="mx-auto h-12 w-12 text-primary/50" />
                    <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                      {t.clientsTitle}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                      {t.clientsSubtitle}
                    </p>
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-10 border border-border">
                    <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4">
                      <div>
                        <label htmlFor="projectCode" className="sr-only">{t.clientsInputPlaceholder}</label>
                        <Input
                          id="projectCode"
                          type="text"
                          value={projectCode}
                          onChange={(e) => setProjectCode(e.target.value)}
                          placeholder={t.clientsInputPlaceholder}
                          required
                          className="text-center"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : t.clientsButton}
                      </Button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="text-center">
                    <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg shadow-xl p-8 sm:p-12 border border-border">
                      <Download className="mx-auto h-16 w-16 text-primary" />
                      <h1 className="mt-6 font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                          {t.clientsDownloadTitle.replace('{projectCode}', projectCode)}
                      </h1>
                      <p className="mt-4 text-lg text-muted-foreground">
                          {t.clientsDownloadSubtitle}
                      </p>
                      <div className="mt-8">
                          <Button asChild size="lg">
                              <a href={downloadUrl} download>
                                  <Download className="mr-2"/>
                                  {t.clientsDownloadButton}
                              </a>
                          </Button>
                      </div>
                      <div className="mt-8">
                          <Button variant="ghost" onClick={handleLogout}>{t.clientsDownloadOtherCode}</Button>
                      </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
