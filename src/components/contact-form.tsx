"use client";

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  phone: z.string().optional(),
  projectType: z.string().min(1, { message: 'Selecciona un tipo de proyecto.' }),
  budget: z.string().optional(),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Enviar Mensaje por WhatsApp'}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: '',
    }
  });

  const onSubmit = (data: ContactFormInputs) => {
    setIsSubmitting(true);
    
    const whatsAppNumber = "50683315395";
    const messageParts = [
      `*Nuevo Contacto desde Videame.cr*`,
      `*Nombre:* ${data.name}`,
      `*Email:* ${data.email}`,
      `*Teléfono:* ${data.phone || 'No especificado'}`,
      `*Tipo de Proyecto:* ${data.projectType}`,
      `*Presupuesto:* ${data.budget || 'No especificado'}`,
      `*Mensaje:*`,
      `${data.message}`
    ];
    
    const messageText = messageParts.join('\n');
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    toast({
        title: '¡Listo!',
        description: 'Se ha abierto WhatsApp para que envíes tu mensaje.',
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Nombre</label>
          <Input id="name" {...register('name')} placeholder="Tu nombre completo" />
          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
          <Input id="email" type="email" {...register('email')} placeholder="tu@email.com" />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">Teléfono (Opcional)</label>
          <Input id="phone" {...register('phone')} placeholder="Tu número de teléfono" />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
           <label htmlFor="projectType" className="block text-sm font-medium text-muted-foreground mb-1">Tipo de Proyecto</label>
            <Controller
              name="projectType"
              control={control}
              render={({ field }) => (
                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video-corporativo">Video Corporativo</SelectItem>
                    <SelectItem value="comercial-tv-web">Comercial TV/Web</SelectItem>
                    <SelectItem value="video-evento">Video de Evento</SelectItem>
                    <SelectItem value="fotografia">Fotografía</SelectItem>
                    <SelectItem value="social-media">Contenido para Redes</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          {errors.projectType && <p className="text-destructive text-sm mt-1">{errors.projectType.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Mensaje</label>
        <Textarea id="message" {...register('message')} placeholder="Cuéntanos sobre tu proyecto..." rows={5} />
        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
      </div>
      <div>
        <SubmitButton pending={isSubmitting} />
      </div>
    </form>
  );
}
