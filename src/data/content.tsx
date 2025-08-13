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
    title: "Kimberly Clark",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio/Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/kimberly.png",
    description: "Video corporativo para Kimberly Clark.",
    videoUrl: "https://player.vimeo.com/video/336825378?h=9d529a5881",
    dataAiHint: "corporate video"
  },
  {
    id: 2,
    title: "Banco Nacional",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio/Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/banco.png",
    description: "Comercial para el Banco Nacional de Costa Rica.",
    videoUrl: "https://player.vimeo.com/video/336825378?h=9d529a5881",
    dataAiHint: "bank commercial"
  },
  {
    id: 3,
    title: "Huawei",
    category: "Producto",
    imageUrl: "https://studio.bypgd.com/pdgstudio/Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/huawei.png",
    description: "Video de producto para lanzamiento de Huawei.",
    videoUrl: "https://player.vimeo.com/video/336825378?h=9d529a5881",
    dataAiHint: "tech product"
  },
  {
    id: 4,
    title: "Toyota",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio/Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/toyota.png",
    description: "Comercial para Toyota.",
    videoUrl: "https://player.vimeo.com/video/336825378?h=9d529a5881",
    dataAiHint: "car commercial"
  },
  {
    id: 5,
    title: "Coronado",
    category: "Producto",
    imageUrl: "https://studio.bypgd.com/pdgstudio/Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/coronado.png",
    description: "Video de producto para Coronado.",
    videoUrl: "https://player.vimeo.com/video/336825378?h=9d529a5881",
    dataAiHint: "food product"
  },
  {
    id: 6,
    title: "Coope Ande",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio/Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/coopeande.png",
    description: "Comercial para Coope Ande.",
    videoUrl: "https://player.vimeo.com/video/336825378?h=9d529a5881",
    dataAiHint: "financial services"
  },
  {
    id: 7,
    title: "Entornos CR",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/AR_mg.jpg",
    description: "The objective of this video project was to create an audiovisual production that positions Entornos CR as a company with experience, solidity, and trust. From the early stages of pre-production, including music selection, the creative direction was guided by the intention to project a calm and concise tone, reinforcing the company’s formal and professional identity.",
    videoUrl: "https://youtu.be/gHVWjYhBZxQ?si=k-AtKKTUb81k7sGW",
    dataAiHint: "corporate video"
  }
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
