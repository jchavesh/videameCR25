
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";


export function CastingForm() {
  const [hasExperience, setHasExperience] = useState<string | undefined>(undefined);
  const [cameraConfidence, setCameraConfidence] = useState(3);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    
    try {
        await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString(),
        });
        router.push("/casting-success");
    } catch (error) {
        console.error("Form submission error:", error);
        toast({
            variant: "destructive",
            title: "Error al enviar",
            description: "Hubo un problema al procesar tu postulación. Por favor, inténtalo de nuevo.",
        });
        setIsSubmitting(false);
    }
  };


  const danceSkillOptions = ["Urbano", "Reggaetón", "Comercial", "Contemporáneo", "Salsa/Bachata", "Hip-Hop", "Jazz", "Heels", "Otro"];
  const musicStyleOptions = ["Pop", "Urbano/Reggaetón", "Electrónica", "Rock", "Alternativa/Indie", "Latina", "Otro"];
  const eyesColorOptions = ["Café", "Negro", "Verde", "Azul", "Avellana", "Otro"];
  const hairColorOptions = ["Negro", "Castaño", "Rubio", "Pelirrojo", "Teñido", "Rapado", "Otro"];

  return (
    <form
        name="casting"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-12"
    >
        <input type="hidden" name="form-name" value="casting" />
        <p className="hidden">
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>

      {/* Sección 1: Información Básica */}
      <div className="space-y-6 border-b border-border pb-12">
        <h2 className="text-xl font-headline font-semibold text-foreground">Información Básica</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <Label htmlFor="fullName">Nombre completo</Label>
                <Input id="fullName" name="fullName" required />
            </div>
            <div className="sm:col-span-3">
                <Label htmlFor="age">Edad</Label>
                <Input id="age" name="age" type="number" min="18" max="99" required />
            </div>
            <div className="sm:col-span-3">
                <Label htmlFor="nationality">Nacionalidad</Label>
                <Input id="nationality" name="nationality" />
            </div>
            <div className="sm:col-span-3">
                <Label htmlFor="city">Ciudad y país de residencia</Label>
                <Input id="city" name="city" required />
            </div>
             <div className="sm:col-span-3">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+506 8888-8888" required />
            </div>
             <div className="sm:col-span-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
            </div>
            <div className="col-span-full">
                <Label htmlFor="socialLinks">Redes Sociales (Instagram, TikTok, etc.)</Label>
                <Textarea id="socialLinks" name="socialLinks" className="mt-1" placeholder="https://instagram.com/tu_usuario" />
            </div>
        </div>
      </div>

      <div className="space-y-6 border-b border-border pb-12">
        <h2 className="text-xl font-headline font-semibold text-foreground">Aspecto Físico</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
                <Label htmlFor="heightCm">Estatura (cm)</Label>
                <Input id="heightCm" name="heightCm" type="number" required />
            </div>
            <div className="sm:col-span-2">
                <Label htmlFor="clothingSize">Talla de Ropa</Label>
                <Select name="clothingSize" required>
                    <SelectTrigger id="clothingSize"><SelectValue placeholder="Selecciona..." /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="XS">XS</SelectItem>
                        <SelectItem value="S">S</SelectItem>
                        <SelectItem value="M">M</SelectItem>
                        <SelectItem value="L">L</SelectItem>
                        <SelectItem value="XL">XL</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="sm:col-span-2">
                <Label htmlFor="shoeSize">Talla de calzado (EUR)</Label>
                <Input id="shoeSize" name="shoeSize" type="number" />
            </div>
            <div className="sm:col-span-3">
                <Label htmlFor="eyesColor">Color de ojos</Label>
                <Select name="eyesColor">
                    <SelectTrigger id="eyesColor"><SelectValue placeholder="Selecciona..." /></SelectTrigger>
                    <SelectContent>
                        {eyesColorOptions.map(color => <SelectItem key={color} value={color}>{color}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
            <div className="sm_col-span-3">
                <Label htmlFor="hairColor">Color de cabello</Label>
                <Select name="hairColor">
                    <SelectTrigger id="hairColor"><SelectValue placeholder="Selecciona..." /></SelectTrigger>
                    <SelectContent>
                        {hairColorOptions.map(color => <SelectItem key={color} value={color}>{color}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
        </div>
      </div>
      
      <div className="space-y-6 border-b border-border pb-12">
          <h2 className="text-xl font-headline font-semibold text-foreground">Experiencia y Habilidades</h2>
          <div className="space-y-8">
              <fieldset>
                  <legend className="text-sm font-medium text-foreground">¿Has trabajado en videos musicales, comerciales o sesiones de fotos?</legend>
                    <RadioGroup name="hasExperience" onValueChange={setHasExperience} className="mt-2 flex gap-4" required>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Sí" id="exp-yes" />
                            <Label htmlFor="exp-yes" className="font-normal">Sí</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="No" id="exp-no" />
                            <Label htmlFor="exp-no" className="font-normal">No</Label>
                        </div>
                    </RadioGroup>
              </fieldset>

              {hasExperience === "Sí" && (
                  <div>
                      <Label htmlFor="experienceDesc">Describe tu experiencia</Label>
                      <Textarea id="experienceDesc" name="experienceDesc" className="mt-1" rows={4} placeholder="Marca/Artista, año, rol, enlace si existe" required={hasExperience === "Sí"} />
                  </div>
              )}

              <div>
                  <Label>Habilidades de Baile</Label>
                   <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {danceSkillOptions.map(skill => (
                           <div className="flex items-center gap-2" key={skill}>
                                <Checkbox id={`skill-${skill}`} name="danceSkills" value={skill} />
                                <Label htmlFor={`skill-${skill}`} className="font-normal">{skill}</Label>
                            </div>
                        ))}
                   </div>
              </div>
              
                <div>
                    <Label htmlFor="actingExperience">Experiencia en actuación</Label>
                    <Select name="actingExperience">
                        <SelectTrigger id="actingExperience" className="mt-1"><SelectValue placeholder="Selecciona..." /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Ninguna">Ninguna</SelectItem>
                            <SelectItem value="Básica">Básica</SelectItem>
                            <SelectItem value="Intermedia">Intermedia</SelectItem>
                            <SelectItem value="Avanzada">Avanzada</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

              <div>
                <Label htmlFor="cameraConfidence">Confianza frente a cámara (1=Poca, 5=Mucha)</Label>
                    <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-muted-foreground" aria-hidden="true">1</span>
                        <Slider
                            name="cameraConfidence"
                            defaultValue={[3]}
                            value={[cameraConfidence]}
                            onValueChange={(vals) => setCameraConfidence(vals[0])}
                            max={5}
                            min={1}
                            step={1}
                            aria-label="Confianza frente a cámara"
                        />
                        <span className="text-sm text-muted-foreground" aria-hidden="true">5</span>
                    </div>
              </div>

               <div>
                  <Label>Estilos musicales con los que te identificas</Label>
                   <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {musicStyleOptions.map(style => (
                           <div className="flex items-center gap-2" key={style}>
                                <Checkbox id={`style-${style}`} name="musicStyles" value={style}/>
                                <Label htmlFor={`style-${style}`} className="font-normal">{style}</Label>
                            </div>
                        ))}
                   </div>
              </div>
          </div>
      </div>
      
      <div className="space-y-6 border-b border-border pb-12">
          <h2 className="text-xl font-headline font-semibold text-foreground">Disponibilidad y Logística</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
               <div className="sm:col-span-full space-y-4">
                    <fieldset>
                        <legend className="text-sm font-medium text-foreground">¿Disponibilidad para ensayos?</legend>
                            <div className="flex items-center gap-2 mt-2">
                                <Checkbox id="rehearsalAvailability" name="rehearsalAvailability" value="Sí" required />
                                <Label htmlFor="rehearsalAvailability" className="font-normal">Sí, tengo disponibilidad</Label>
                            </div>
                    </fieldset>

                    <fieldset>
                        <legend className="text-sm font-medium text-foreground">¿Puedes desplazarte al lugar de filmación por tus medios?</legend>
                        <RadioGroup name="canTravel" className="mt-2 flex gap-4" required>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Sí" id="travel-yes" />
                                <Label htmlFor="travel-yes" className="font-normal">Sí</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="No" id="travel-no" />
                                <Label htmlFor="travel-no" className="font-normal">No</Label>
                            </div>
                        </RadioGroup>
                    </fieldset>
               </div>
                <div className="col-span-full">
                    <Label htmlFor="medicalRestrictions">Restricciones médicas (opcional)</Label>
                    <Textarea id="medicalRestrictions" name="medicalRestrictions" className="mt-1" rows={3} placeholder="Alergias, lesiones, medicamentos, etc."/>
                </div>
          </div>
      </div>

      <div className="space-y-6 border-b border-border pb-12">
            <h2 className="text-xl font-headline font-semibold text-foreground">Material Visual</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <Label htmlFor="headshot">Foto de rostro (vertical)</Label>
                    <Input id="headshot" name="headshot" type="file" accept="image/jpeg,image/png,image/webp" className="mt-1" required />
                    <p className="text-muted-foreground text-sm mt-1">JPG, PNG, WEBP. Máx 5 MB.</p>
                </div>
                <div className="sm:col-span-3">
                    <Label htmlFor="fullBodyPhoto">Foto de cuerpo completo (vertical)</Label>
                    <Input id="fullBodyPhoto" name="fullBodyPhoto" type="file" accept="image/jpeg,image/png,image/webp" className="mt-1" required />
                     <p className="text-muted-foreground text-sm mt-1">JPG, PNG, WEBP. Máx 5 MB.</p>
                </div>
                 <div className="col-span-full">
                    <Label htmlFor="additionalPhotos">Fotos adicionales (hasta 5)</Label>
                    <Input id="additionalPhotos" name="additionalPhotos" type="file" accept="image/jpeg,image/png,image/webp" multiple className="mt-1" />
                </div>
                 <div className="col-span-full">
                    <Label htmlFor="reelOrDanceLink">Enlace a reel</Label>
                    <Input id="reelOrDanceLink" name="reelOrDanceLink" type="url" className="mt-1" placeholder="https://youtube.com/..." />
                </div>
            </div>
        </div>

      <div className="space-y-6">
        <h2 className="text-xl font-headline font-semibold text-foreground">Autorizaciones</h2>
         <div className="space-y-4">
            <div className="flex items-start gap-3">
                <Checkbox id="socialConsent" name="socialConsent" value="Sí" />
                <Label htmlFor="socialConsent" className="font-normal text-muted-foreground">Autorizo el uso de mi imagen en contenido de casting o redes sociales de la producción.</Label>
            </div>
            <div className="flex items-start gap-3">
                <Checkbox id="privacyConsent" name="privacyConsent" value="Sí" required />
                <div className="flex-1">
                    <Label htmlFor="privacyConsent" className="font-normal text-muted-foreground">
                        Acepto el tratamiento de mis datos conforme a la{' '}
                         <Dialog>
                            <DialogTrigger asChild>
                                <button type="button" className="text-primary underline">Política de Privacidad</button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-2xl">
                                <DialogHeader>
                                    <DialogTitle>Política de Privacidad y Tratamiento de Datos</DialogTitle>
                                    <DialogDescription>
                                        Última actualización: 25 de Agosto de 2025
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="prose prose-sm dark:prose-invert max-h-[60vh] overflow-y-auto pr-4">
                                    <p>Al enviar este formulario, usted entiende y acepta los siguientes términos sobre el tratamiento de sus datos personales por parte de Videame (en adelante, "la Producción").</p>
                                    
                                    <h3 className="text-foreground">1. Datos Recopilados</h3>
                                    <p>La Producción recopilará los datos personales que usted proporcione en este formulario, incluyendo pero no limitado a: nombre completo, edad, datos de contacto, características físicas, experiencia, y material audiovisual (fotos y videos).</p>

                                    <h3 className="text-foreground">2. Finalidad del Tratamiento</h3>
                                    <p>Sus datos serán utilizados exclusivamente para los siguientes fines:</p>
                                    <ul className="list-disc pl-5">
                                        <li>Evaluar su perfil para oportunidades de casting en producciones audiovisuales actuales y futuras de la Producción.</li>
                                        <li>Contactarle para coordinar audiciones, ensayos o participaciones.</li>
                                        <li>Gestionar su participación en caso de ser seleccionado/a.</li>
                                    </ul>

                                    <h3 className="text-foreground">3. Almacenamiento y Seguridad</h3>
                                    <p>Su información será almacenada de forma segura en bases de datos gestionadas a través de servicios en la nube (Firebase de Google). Se han implementado medidas técnicas y organizativas para proteger sus datos contra el acceso no autorizado, alteración o destrucción.</p>
                                    
                                    <h3 className="text-foreground">4. Consentimiento de Imagen</h3>
                                    <p>Si marca la casilla de consentimiento para uso de imagen, autoriza a la Producción a utilizar su imagen, nombre y/o voz, capturados durante el proceso de casting o en el material que usted proporciona, para fines de promoción interna o en redes sociales relacionadas con el casting o la productora, sin derecho a compensación adicional.</p>

                                    <h3 className="text-foreground">5. Cesión de Datos</h3>
                                    <p>Sus datos no serán cedidos a terceros sin su consentimiento explícito, salvo que sea estrictamente necesario para la realización de la producción (e.g., directores, clientes finales del proyecto) o por obligación legal.</p>

                                    <h3 className="text-foreground">6. Conservación de Datos</h3>
                                    <p>Sus datos serán conservados en nuestra base de datos por un período de 5 años para futuras oportunidades de casting. Transcurrido este tiempo, serán eliminados de forma segura.</p>

                                    <h3 className="text-foreground">7. Sus Derechos</h3>
                                    <p>Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos. Para ejercer estos derechos, puede enviar un correo a [email de contacto de Videame].</p>

                                    <p className="font-bold">Al marcar la casilla "Acepto", usted confirma que ha leído, entendido y aceptado los términos de esta política de privacidad, liberando a Videame de cualquier reclamación futura relacionada con el tratamiento de sus datos para los fines aquí descritos.</p>
                                </div>
                                <div className="flex justify-end pt-4">
                                     <DialogClose asChild>
                                        <Button type="button">Cerrar</Button>
                                     </DialogClose>
                                </div>
                            </DialogContent>
                        </Dialog>
                        .
                    </Label>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <Checkbox id="over18" name="over18" value="Sí" required />
                <Label htmlFor="over18" className="font-normal text-muted-foreground">Declaro ser mayor de 18 años.</Label>
            </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-end gap-x-6">
        <Button type="reset" variant="ghost">Cancelar</Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Enviando...</> : 'Enviar Postulación'}
        </Button>
      </div>
    </form>
  );
}

    