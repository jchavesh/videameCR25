"use client";

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { submitContactForm } from '@/lib/actions';
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
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  phone: z.string().optional(),
  projectType: z.string().min(1, { message: 'Selecciona un tipo de proyecto.' }),
  budget: z.string().optional(),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
  honeypot: z.string().optional(),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Enviar Mensaje'}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, { success: false, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
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

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? '¡Éxito!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
    if (state.success) {
      reset();
    }
  }, [state, reset, toast]);

  return (
    <form action={formAction} className="space-y-6">
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
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-muted-foreground mb-1">Tipo de Proyecto</label>
        <Select name="projectType" onValueChange={(value) => control._updateFormState({ ...control._formValues, projectType: value })}>
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
        {errors.projectType && <p className="text-destructive text-sm mt-1">{errors.projectType.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Mensaje</label>
        <Textarea id="message" {...register('message')} placeholder="Cuéntanos sobre tu proyecto..." rows={5} />
        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
      </div>
       {/* Honeypot field */}
      <input type="text" {...register('honeypot')} className="hidden" />
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
