"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es requerido."),
  email: z.string().email("Email inválido."),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Selecciona un tipo de proyecto."),
  budget: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
  honeypot: z.string().optional(),
});

type State = {
  success: boolean;
  message: string;
  errors?: {
    [key: string]: string[];
  } | null;
}

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  // Honeypot check
  if (formData.get("honeypot")) {
    return { success: true, message: "Form submitted successfully." };
  }

  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor corrige los errores.",
      success: false,
    };
  }

  try {
    // Here you would integrate with an email service (e.g., Resend, SendGrid)
    // or a Cloud Function to process the form data.
    // Example: await sendEmail(validatedFields.data);
    console.log("Form data submitted:", validatedFields.data);
    
    return {
      message: "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.",
      success: true,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      message: "Ocurrió un error al enviar el formulario. Por favor, intenta de nuevo.",
      success: false,
    };
  }
}
