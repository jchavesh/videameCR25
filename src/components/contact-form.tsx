"use client";

import { useState, useContext } from 'react';
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
import { LanguageContext } from '@/context/language-context';
import { content } from '@/data/content';

function getContactSchema(t: any) {
    return z.object({
      name: z.string().min(2, { message: t.nameRequired }),
      email: z.string().email({ message: t.emailInvalid }),
      phone: z.string().optional(),
      projectType: z.string().min(1, { message: t.projectTypeRequired }),
      budget: z.string().optional(),
      message: z.string().min(10, { message: t.messageRequired }),
    });
}

type ContactFormInputs = z.infer<ReturnType<typeof getContactSchema>>;

function SubmitButton({ pending, text }: { pending: boolean, text: string }) {
  return (
    <Button type="submit" disabled={pending} className="w-full" variant="outline">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : text}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useContext(LanguageContext);
  const t = content[language].page;
  
  const contactSchema = getContactSchema(t);

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
      `*New Contact from Videame.cr*`,
      `*Name:* ${data.name}`,
      `*Email:* ${data.email}`,
      `*Phone:* ${data.phone || 'Not specified'}`,
      `*Project Type:* ${data.projectType}`,
      `*Budget:* ${data.budget || 'Not specified'}`,
      `*Message:*`,
      `${data.message}`
    ];
    
    const messageText = messageParts.join('\n');
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    toast({
        title: t.formSuccessTitle,
        description: t.formSuccessDesc,
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">{t.formName}</label>
          <Input id="name" {...register('name')} placeholder={t.formNamePlaceholder} />
          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">{t.formEmail}</label>
          <Input id="email" type="email" {...register('email')} placeholder={t.formEmailPlaceholder} />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">{t.formPhone}</label>
          <Input id="phone" {...register('phone')} placeholder={t.formPhonePlaceholder} />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
           <label htmlFor="projectType" className="block text-sm font-medium text-muted-foreground mb-1">{t.formProjectType}</label>
            <Controller
              name="projectType"
              control={control}
              render={({ field }) => (
                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder={t.formProjectTypePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video-corporativo">{t.formProjectCorp}</SelectItem>
                    <SelectItem value="comercial-tv-web">{t.formProjectComm}</SelectItem>
                    <SelectItem value="video-evento">{t.formProjectEvent}</SelectItem>
                    <SelectItem value="fotografia">{t.formProjectPhoto}</SelectItem>
                    <SelectItem value="social-media">{t.formProjectSocial}</SelectItem>
                    <SelectItem value="otro">{t.formProjectOther}</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          {errors.projectType && <p className="text-destructive text-sm mt-1">{errors.projectType.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">{t.formMessage}</label>
        <Textarea id="message" {...register('message')} placeholder={t.formMessagePlaceholder} rows={5} />
        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
      </div>
      <div>
        <SubmitButton pending={isSubmitting} text={t.formSubmit} />
      </div>
    </form>
  );
}
