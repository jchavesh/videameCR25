
"use client";

import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, RefreshCw, ExternalLink, Image as ImageIcon, Video, User, Mail, Phone, MapPin, Globe } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import type { CastingSubmission } from '@/types/casting';


const FORM_ID = process.env.NEXT_PUBLIC_NETLIFY_FORM_ID;
const NETLIFY_API_TOKEN = process.env.NEXT_PUBLIC_NETLIFY_API_TOKEN;

export function CastingSubmissionsClient() {
  const [submissions, setSubmissions] = useState<CastingSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<CastingSubmission | null>(null);
  const { toast } = useToast();

  const fetchSubmissions = async () => {
    setIsLoading(true);
    if (!FORM_ID || !NETLIFY_API_TOKEN) {
         toast({
            variant: "destructive",
            title: "Error de Configuración",
            description: "Las variables de entorno de Netlify no están configuradas.",
        });
        setIsLoading(false);
        return;
    }
    
    // Use the Netlify API proxy defined in next.config.js
    const apiUrl = `/netlify-api/forms/${FORM_ID}/submissions`;

    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${NETLIFY_API_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      const formattedData = data.map((sub: any) => ({
        id: sub.id,
        submittedAt: new Date(sub.created_at).toLocaleString('es-CR'),
        fullName: sub.data.fullName || 'N/A',
        age: sub.data.age,
        email: sub.data.email,
        phone: sub.data.phone,
        city: sub.data.city,
        hasExperience: sub.data.hasExperience,
        headshot: sub.data.headshot?.url,
        fullBodyPhoto: sub.data.fullBodyPhoto?.url,
        data: sub.data,
      }));

      setSubmissions(formattedData);
      
    } catch (error) {
      console.error("Error fetching submissions:", error);
      toast({
        variant: "destructive",
        title: "Error al cargar postulaciones",
        description: `No se pudieron obtener los datos. ${error instanceof Error ? error.message : ''}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!FORM_ID || !NETLIFY_API_TOKEN) {
     return (
        <div className="text-center p-8 bg-background rounded-lg shadow-xl border border-destructive">
            <h1 className="text-2xl font-bold text-destructive">Error de Configuración</h1>
            <p className="text-muted-foreground mt-4">
                Una o más variables de entorno de Netlify (FORM_ID, API_TOKEN) no están configuradas.
            </p>
             <p className="text-muted-foreground mt-2 text-sm">
                Asegúrate de que los valores `NEXT_PUBLIC_NETLIFY_FORM_ID` y `NEXT_PUBLIC_NETLIFY_API_TOKEN` estén en tu archivo `.env.local`.
            </p>
        </div>
    )
  }

  if (submissions.length === 0) {
    return (
        <div className="text-center py-16">
            <h2 className="text-2xl font-headline">No hay postulaciones todavía</h2>
            <p className="text-muted-foreground mt-2">Cuando alguien llene el formulario de casting, aparecerá aquí.</p>
            <Button onClick={fetchSubmissions} className="mt-6" disabled={isLoading}>
                <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Volver a Cargar
            </Button>
        </div>
    )
  }

  const renderArrayValue = (value: string | string[] | undefined) => {
    if (Array.isArray(value)) return value.join(', ');
    return value || 'N/A';
  }

  return (
    <div className="space-y-6">
        <div className="flex justify-end">
            <Button onClick={fetchSubmissions} disabled={isLoading} variant="outline">
                <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Actualizar
            </Button>
        </div>
      <div className="border rounded-lg overflow-hidden bg-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead className="hidden md:table-cell">Edad</TableHead>
              <TableHead className="hidden lg:table-cell">Experiencia Previa</TableHead>
              <TableHead className="hidden lg:table-cell">Fecha</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium">{sub.fullName}</TableCell>
                <TableCell className="hidden md:table-cell">{sub.age}</TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Badge variant={sub.hasExperience === 'Sí' ? 'default' : 'secondary'}>
                    {sub.hasExperience}
                  </Badge>
                </TableCell>
                <TableCell className="hidden lg:table-cell">{sub.submittedAt}</TableCell>
                <TableCell>
                   <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedSubmission(null)}>
                        <DialogTrigger asChild>
                           <Button variant="outline" onClick={() => setSelectedSubmission(sub)}>Ver Detalles</Button>
                        </DialogTrigger>
                        {selectedSubmission && selectedSubmission.id === sub.id && (
                           <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
                                <DialogHeader>
                                    <DialogTitle className="font-headline text-2xl text-primary">{selectedSubmission.data.fullName}</DialogTitle>
                                </DialogHeader>
                                <div className="flex-1 overflow-y-auto pr-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
                                    {/* Column 1 */}
                                    <div className="space-y-4">
                                        <h3 className="font-headline text-lg text-foreground border-b pb-2">Información Personal</h3>
                                        <p className="flex items-center gap-2"><User className="w-4 h-4 text-muted-foreground"/><strong>Edad:</strong> {selectedSubmission.data.age}</p>
                                        <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-muted-foreground"/><strong>Email:</strong> {selectedSubmission.data.email}</p>
                                        <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-muted-foreground"/><strong>Teléfono:</strong> {selectedSubmission.data.phone}</p>
                                        <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-muted-foreground"/><strong>Residencia:</strong> {selectedSubmission.data.city}</p>
                                        <p className="flex items-center gap-2"><Globe className="w-4 h-4 text-muted-foreground"/><strong>Nacionalidad:</strong> {selectedSubmission.data.nationality}</p>
                                        
                                        <h3 className="font-headline text-lg text-foreground border-b pb-2 pt-4">Aspecto Físico</h3>
                                        <p><strong>Estatura:</strong> {selectedSubmission.data.heightCm} cm</p>
                                        <p><strong>Talla Ropa:</strong> {selectedSubmission.data.clothingSize}</p>
                                        <p><strong>Talla Calzado:</strong> {selectedSubmission.data.shoeSize}</p>
                                        <p><strong>Color de Ojos:</strong> {selectedSubmission.data.eyesColor}</p>
                                        <p><strong>Color de Cabello:</strong> {selectedSubmission.data.hairColor}</p>
                                        
                                        <h3 className="font-headline text-lg text-foreground border-b pb-2 pt-4">Material Visual</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedSubmission.headshot && (
                                                <a href={selectedSubmission.headshot} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                                                    <ImageIcon className="w-4 h-4"/> Foto Rostro <ExternalLink className="w-3 h-3"/>
                                                </a>
                                            )}
                                            {selectedSubmission.fullBodyPhoto && (
                                                <a href={selectedSubmission.fullBodyPhoto} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                                                   <ImageIcon className="w-4 h-4"/> Foto Cuerpo <ExternalLink className="w-3 h-3"/>
                                                </a>
                                            )}
                                            {selectedSubmission.data.reelOrDanceLink && (
                                                <a href={selectedSubmission.data.reelOrDanceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                                                    <Video className="w-4 h-4"/> Ver Reel <ExternalLink className="w-3 h-3"/>
                                                </a>
                                            )}
                                        </div>

                                        {/* Display additional photos if they exist */}
                                        {Array.isArray(selectedSubmission.data.additionalPhotos) && selectedSubmission.data.additionalPhotos.length > 0 && (
                                            <div>
                                                <p className="font-semibold">Fotos Adicionales:</p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {selectedSubmission.data.additionalPhotos.map((photo: any, index: number) => (
                                                        <a key={photo.id || index} href={photo.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs">
                                                            Foto {index + 1}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                    </div>

                                    {/* Column 2 */}
                                    <div className="space-y-4">
                                        <h3 className="font-headline text-lg text-foreground border-b pb-2">Experiencia y Habilidades</h3>
                                        <p><strong>Experiencia previa:</strong> {selectedSubmission.data.hasExperience}</p>
                                        {selectedSubmission.data.hasExperience === 'Sí' && <p><strong>Descripción:</strong> {selectedSubmission.data.experienceDesc}</p>}
                                        <p><strong>Habilidades de Baile:</strong> {renderArrayValue(selectedSubmission.data.danceSkills)}</p>
                                        <p><strong>Experiencia en Actuación:</strong> {selectedSubmission.data.actingExperience}</p>
                                        <p><strong>Confianza ante cámara:</strong> {selectedSubmission.data.cameraConfidence}/5</p>
                                        <p><strong>Estilos Musicales:</strong> {renderArrayValue(selectedSubmission.data.musicStyles)}</p>
                                        
                                        <h3 className="font-headline text-lg text-foreground border-b pb-2 pt-4">Logística y Otros</h3>
                                        <p><strong>Disponibilidad para ensayos:</strong> {selectedSubmission.data.rehearsalAvailability ? 'Sí' : 'No'}</p>
                                        <p><strong>Puede desplazarse:</strong> {selectedSubmission.data.canTravel}</p>
                                        <p><strong>Redes Sociales:</strong> {selectedSubmission.data.socialLinks || 'N/A'}</p>
                                        <p><strong>Restricciones Médicas:</strong> {selectedSubmission.data.medicalRestrictions || 'Ninguna'}</p>
                                        
                                        <h3 className="font-headline text-lg text-foreground border-b pb-2 pt-4">Autorizaciones</h3>
                                        <p><strong>Uso de imagen:</strong> {selectedSubmission.data.socialConsent ? 'Sí' : 'No'}</p>
                                        <p><strong>Mayor de 18:</strong> {selectedSubmission.data.over18 ? 'Sí' : 'No'}</p>
                                        <p><strong>Acepta Política Privacidad:</strong> {selectedSubmission.data.privacyConsent ? 'Sí' : 'No'}</p>
                                    </div>
                                </div>
                           </DialogContent>
                        )}
                   </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
