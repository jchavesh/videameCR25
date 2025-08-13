import { Camera, Clapperboard, Megaphone, Scissors, Users, Lightbulb, Film, Award } from 'lucide-react';
import type { ReactElement } from "react";

interface Service {
  title: string;
  description: string;
  icon: ReactElement;
}

export const services: Service[] = [
  {
    title: 'Producción de Video',
    description: 'Creamos videos corporativos, comerciales y de marca que capturan la esencia de tu mensaje.',
    icon: <Clapperboard className="w-8 h-8" />,
  },
  {
    title: 'Post-Producción',
    description: 'Edición, colorización, motion graphics y sonido para llevar tu material al siguiente nivel.',
    icon: <Scissors className="w-8 h-8" />,
  },
  {
    title: 'Fotografía Profesional',
    description: 'Sesiones de producto, retrato y eventos con un look cinematográfico y cuidado al detalle.',
    icon: <Camera className="w-8 h-8" />,
  },
  {
    title: 'Social Media & Ads',
    description: 'Contenido optimizado para redes sociales. Reels, stories y video ads que generan impacto.',
    icon: <Megaphone className="w-8 h-8" />,
  },
];

export type PortfolioCategory = 'Comercial' | 'Evento' | 'Producto' | 'Marca Personal' | 'Drone';

export interface PortfolioProject {
  id: number;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  description: string;
  videoUrl?: string;
  gallery?: string[];
  dataAiHint: string;
}

export const portfolio: PortfolioProject[] = [
  {
    id: 1,
    title: 'Campaña "Amanecer"',
    category: 'Comercial',
    imageUrl: 'https://placehold.co/600x800.png',
    description: 'Campaña de lanzamiento para una nueva marca de café, enfocada en la autenticidad y el origen.',
    videoUrl: 'https://player.vimeo.com/video/336825378',
    dataAiHint: 'coffee sunrise',
  },
  {
    id: 2,
    title: 'Boda en la Playa',
    category: 'Evento',
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Cobertura completa de una boda destino, capturando momentos espontáneos y la belleza del entorno.',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    dataAiHint: 'beach wedding',
  },
  {
    id: 3,
    title: 'Línea de Joyería',
    category: 'Producto',
    imageUrl: 'https://placehold.co/600x600.png',
    description: 'Fotografía de producto y videos cortos para redes sociales, destacando la artesanía y el detalle.',
    gallery: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
    dataAiHint: 'jewelry product',
  },
  {
    id: 4,
    title: 'Marca Personal Chef',
    category: 'Marca Personal',
    imageUrl: 'https://placehold.co/600x700.png',
    description: 'Desarrollo de la identidad visual para un chef emergente, incluyendo retratos y videos de recetas.',
    videoUrl: 'https://player.vimeo.com/video/336825378',
    dataAiHint: 'chef cooking',
  },
  {
    id: 5,
    title: 'Aventura en la Montaña',
    category: 'Drone',
    imageUrl: 'https://placehold.co/600x450.png',
    description: 'Tomas aéreas espectaculares para un documental de aventura, mostrando la majestuosidad del paisaje.',
    videoUrl: 'https://player.vimeo.com/video/336825378',
    dataAiHint: 'mountain landscape',
  },
  {
    id: 6,
    title: 'Tech Startup Launch',
    category: 'Comercial',
    imageUrl: 'https://placehold.co/600x500.png',
    description: 'Video de lanzamiento para una startup tecnológica, explicando su producto de forma clara y dinámica.',
    videoUrl: 'https://player.vimeo.com/video/336825378',
    dataAiHint: 'tech startup',
  },
];

export const testimonials = [
  {
    name: 'Ana Rodriguez',
    title: 'Gerente de Marketing, Café Sol',
    quote: 'El equipo de Videame superó nuestras expectativas. Capturaron la esencia de nuestra marca con una calidad visual impresionante. Totalmente recomendados.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Carlos Jimenez',
    title: 'Fundador, TechNova',
    quote: 'Profesionalismo, creatividad y entrega puntual. El video de lanzamiento fue un éxito y una pieza clave en nuestra estrategia.',
    avatar: 'https://placehold.co/100x100.png',
  },
  {
    name: 'Sofia Vargas',
    title: 'Wedding Planner',
    quote: 'Trabajar con Videame es garantía de tranquilidad. Sus videos de boda son pura emoción y arte. Mis clientes siempre quedan felices.',
    avatar: 'https://placehold.co/100x100.png',
  },
];

export const clients = [
    { name: 'Client 1', logoUrl: 'https://placehold.co/120x60/FFFFFF/000000?text=Cliente+1' },
    { name: 'Client 2', logoUrl: 'https://placehold.co/120x60/FFFFFF/000000?text=Cliente+2' },
    { name: 'Client 3', logoUrl: 'https://placehold.co/120x60/FFFFFF/000000?text=Cliente+3' },
    { name: 'Client 4', logoUrl: 'https://placehold.co/120x60/FFFFFF/000000?text=Cliente+4' },
    { name: 'Client 5', logoUrl: 'https://placehold.co/120x60/FFFFFF/000000?text=Cliente+5' },
];

export const processSteps = [
    {
        title: "Brief & Estrategia",
        description: "Nos reunimos para entender tus objetivos, audiencia y mensaje clave. Definimos la estrategia creativa.",
        icon: <Lightbulb className="w-8 h-8" />,
    },
    {
        title: "Pre-Producción",
        description: "Planificamos cada detalle: guion, storyboard, locaciones, casting y logística para un rodaje impecable.",
        icon: <Users className="w-8 h-8" />,
    },
    {
        title: "Rodaje & Producción",
        description: "Con equipo de última generación y un ojo cinematográfico, damos vida a la visión. Capturamos la magia.",
        icon: <Film className="w-8 h-8" />,
    },
    {
        title: "Post-Producción & Entrega",
        description: "La historia toma forma final en edición. Entregamos un producto pulido que supera tus expectativas.",
        icon: <Award className="w-8 h-8" />,
    },
];
