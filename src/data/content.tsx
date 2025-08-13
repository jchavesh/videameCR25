
import { Camera, Clapperboard, Megaphone, Scissors, Users, Lightbulb, Film, Award, Globe } from 'lucide-react';
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
    title: 'Web Development',
    description: 'Desarrollo de sitios web modernos y optimizados para complementar tu estrategia audiovisual.',
    icon: <Globe className="w-8 h-8" />,
  },
];

export type PortfolioCategory = 'Comercial' | 'Marca Personal' | 'Motion Graphics';

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
    title: "Entornos CR",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/AR_mg.jpg",
    description: "The objective of this video project was to create an audiovisual production that positions Entornos CR as a company with experience, solidity, and trust. From the early stages of pre-production, including music selection, the creative direction was guided by the intention to project a calm and concise tone, reinforcing the company’s formal and professional identity.",
    videoUrl: "https://youtu.be/gHVWjYhBZxQ?si=k-AtKKTUb81k7sGW",
    dataAiHint: "corporate video"
  },
  {
    id: 2,
    title: "Introducing the Ford Explorer® Men’s Only Edition",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/MensOnly_md.jpg",
    description: "We handled the scriptwriting and post-production for the \"Introducing the Ford Explorer® Men’s Only Edition\" video, shaping a clear and engaging narrative, enhancing visuals with precise editing, and ensuring the final piece aligned seamlessly with Ford’s brand identity.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/IntroducingtheFordExplorerMenOnly.MP4",
    dataAiHint: "car commercial"
  },
  {
    id: 9,
    title: "Kotex Overnight",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Kotex_md.jpg",
    description: "We developed the Kotex Over the Night commercial from the ground up, overseeing the entire creative process—from concept and script to production and post-production—delivering a visually compelling and brand-focused final piece.",
    videoUrl: "https://youtu.be/XobsJHkZrSw?si=NKKBrbn6shWkqQkv",
    dataAiHint: "beauty product"
  },
  {
    id: 10,
    title: "Purina Pro Plan",
    category: "Motion Graphics",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Purina_md.jpg",
    description: "Created custom motion graphics for PURINA Pro Plan, enhancing the visual storytelling and elevating the brand’s message through dynamic, high-quality animations.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/Purina_LATAM_PP_Storytelling_DOG_SPA_Reduced.mp4",
    dataAiHint: "pet food"
  },
  {
    id: 11,
    title: "Otra Ves - Prince Royce",
    category: "Marca Personal",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Prince_md.jpg",
    description: "Contributed to the production of a music video for Prince Royce, delivering creative and technical support to achieve a visually captivating final piece aligned with the artist’s style.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/PrinceRoyce-OtraVez.MP4",
    dataAiHint: "music video"
  },
  {
    id: 12,
    title: "Specialized",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Specialized_md.jpg",
    description: "Managed the full audiovisual production for Specialized, from concept development and filming to post-production, creating a high-impact piece that showcased the brand’s innovation and performance.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/Specialized_Orotina.MP4",
    dataAiHint: "bicycle"
  },
  {
    id: 13,
    title: "A New American Is Arriving",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/America_mg.jpg",
    description: "Produced the full video for American Airlines, covering every stage from concept and script to filming and post-production, delivering a polished and brand-aligned final piece.",
    videoUrl: "https://youtu.be/1c8daiOKRD8?si=QsM78szc-ayku9Jl",
    dataAiHint: "airline"
  },
  {
    id: 14,
    title: "La Soledad",
    category: "Marca Personal",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/LaSoledad_md.jpg",
    description: "Managed the full production for La Soledad cycling race, capturing the event’s energy from planning and filming to post-production, resulting in a dynamic and engaging final video.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/LaSoledad.MP4",
    dataAiHint: "cycling race"
  },
  {
    id: 15,
    title: "Motta y Vieto Arquitectura e Ingeniería",
    category: "Marca Personal",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Motta_md.jpg",
    description: "Led the full audiovisual production for Motta & Vieto, one of Costa Rica’s top architecture and engineering firms, delivering a visually striking piece that highlighted their expertise and innovative projects.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/MottayVieto.MP4",
    dataAiHint: "architecture"
  },
  {
    id: 16,
    title: "HPE Social",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/HpeMg.jpg",
    description: "Produced TV and social media videos for HPE, crafting engaging content tailored for broadcast and digital platforms, aligned with the brand’s messaging and visual identity.",
    videoUrl: "https://player.vimeo.com/video/540334508?h=0f3b80e739&title=0&byline=0&portrait=0",
    dataAiHint: "tech company"
  },
  {
    id: 17,
    title: "Baila q Baila",
    category: "Marca Personal",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/work_2_md.jpg",
    description: "Managed the full audiovisual production for Baila q Baila—from concept and pre-production to filming and post—delivering a dynamic, performance-driven final piece.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/BailaqBaila.MP4",
    dataAiHint: "dance performance"
  },
  {
    id: 18,
    title: "Lunchables",
    category: "Comercial",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Lunchables_md.png",
    description: "Served as Video Editor for Lunchables, delivering crisp pacing, tight storytelling, and brand-aligned visuals for a punchy, youth-focused spot.",
    videoUrl: "https://youtu.be/nIph2h63jRw",
    dataAiHint: "food product"
  },
  {
    id: 19,
    title: "Mugre",
    category: "Marca Personal",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Mugre_mg.jpg",
    description: "Character Animation",
    videoUrl: "https://youtu.be/gvNn3qwPGXA?si=_f_tH-VXa-yC6mdr",
    dataAiHint: "character animation"
  },
  {
    id: 20,
    title: "Caribe",
    category: "Marca Personal",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/Caribe_md.jpg",
    description: "Led the full audiovisual production for Caribe (ICT – Costa Rica Tourism Board), from concept development and logistics to field production and post-production, delivering a cinematic piece that highlights the region’s culture and natural beauty.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/Caribe.MP4",
    dataAiHint: "tourism video"
  },
  {
    id: 21,
    title: "CR BioHealth",
    category: "Marca Personal",
    imageUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/BioHealth_md.jpg",
    description: "Led the full audiovisual production for CR BioHealth (dentistry), from concept and script through filming and post, delivering a clean, patient-centric piece that communicates trust and care.",
    videoUrl: "https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/Videos/CRBioHealth_V3.MP4",
    dataAiHint: "dentistry"
  }
];


export const testimonials = [
  {
    name: 'Ana Rodriguez',
    title: 'Gerente de Marketing, Café Sol',
    quote: 'El equipo de Videame superó nuestras expectativas. Capturaron la esencia de nuestra marca con una calidad visual impresionante. Totalmente recomendados.',
    avatar: 'https://placehold.co/100x100/FFC0CB/000000.png',
  },
  {
    name: 'Carlos Jimenez',
    title: 'Fundador, TechNova',
    quote: 'Profesionalismo, creatividad y entrega puntual. El video de lanzamiento fue un éxito y una pieza clave en nuestra estrategia.',
    avatar: 'https://placehold.co/100x100/ADD8E6/000000.png',
  },
  {
    name: 'Sofia Vargas',
    title: 'Wedding Planner',
    quote: 'Trabajar con Videame es garantía de tranquilidad. Sus videos de boda son pura emoción y arte. Mis clientes siempre quedan felices.',
    avatar: 'https://placehold.co/100x100/90EE90/000000.png',
  },
];

export const clients = [
    { name: 'Adobe', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-adobe.png' },
    { name: 'American Airlines', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-American.png' },
    { name: 'CR Dental', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-Dental.png' },
    { name: 'Google', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-google.png' },
    { name: 'HP', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-HP.png' },
    { name: 'Kimberly Clark', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-KC.png' },
    { name: 'Kotex', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-Kotex.png' },
    { name: 'Lunchables', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-lunchables.png' },
    { name: 'Motta & Vieto', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-MV.png' },
    { name: 'Paypal', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-paypal.png' },
    { name: 'Puma', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-puma.png' },
    { name: 'Rayban', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-Rayban.png' },
    { name: 'Specialized', logoUrl: 'https://studio.bypgd.com/pdgstudio//Kimberly_Clark/KC-SITE/JoseChaves/videamecr/images/logo-spec.png' },
];

export const processSteps = [
    {
        title: "Brief & Estrategia",
        description: "Nos reunimos para entender tus objetivos, audiencia y mensaje clave. Definimos la estrategia creativa.",
        icon: <Lightbulb className="w-8 h-8" />,
    },
    {
        title: "Pre-Producción",
        description: "Planificamos cada detalle: guión, storyboard, locaciones, casting y logística para un rodaje impecable.",
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
