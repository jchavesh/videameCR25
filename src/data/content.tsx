

import { Camera, Clapperboard, Globe, Scissors, Users, Lightbulb, Film, Award } from 'lucide-react';
import type { ReactElement } from "react";

interface Service {
  title: string;
  description: string;
  icon: ReactElement;
}

export type Language = 'es' | 'en';

type Content = {
  services: Service[];
  portfolio: PortfolioProject[];
  testimonials: Testimonial[];
  clients: Client[];
  processSteps: ProcessStep[];
  page: Record<string, string>;
};

const imagePath = '/images';

export const content: Record<Language, Content> = {
  es: {
    services: [
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
        title: 'Desarrollo Web',
        description: 'Desarrollo de sitios web modernos y optimizados para complementar tu estrategia audiovisual.',
        icon: <Globe className="w-8 h-8" />,
      },
    ],
    portfolio: [
      {
        id: 22,
        title: "Vuelta Al Lago",
        category: "Marca Personal",
        imageUrl: `${imagePath}/vueltaLago.png`,
        description: "Lideramos la producción audiovisual completa para Vuelta al Lago, una carrera de ciclismo, cubriendo la planificación, la cobertura multicámara en el sitio y la postproducción, para entregar una película de alta energía que captura el recorrido, los atletas y la atmósfera del evento.",
        videoUrl: "https://youtu.be/bq89JREVBN8?si=sltU5J6AfnOtLinR",
        dataAiHint: "cycling race"
      },
      {
        id: 23,
        title: "Mambotopia",
        category: "Marca Personal",
        imageUrl: `${imagePath}/mambotopia.png`,
        description: "Lideramos la producción audiovisual completa para Mambotopia, un congreso internacional de baile, cubriendo la preproducción, la captura de eventos con múltiples cámaras y la postproducción, para entregar videos destacados, perfiles de artistas y cortes para redes sociales.",
        videoUrl: "https://youtu.be/iuGd8RN20hY?si=l9cIuAleTK9uK3tP",
        dataAiHint: "dance congress"
      },
      {
        id: 1,
        title: "Entornos CR",
        category: "Comercial",
        imageUrl: `${imagePath}/AR_mg.jpg`,
        description: "El objetivo de este proyecto de video fue crear una producción audiovisual que posicione a Entornos CR como una empresa con experiencia, solidez y confianza. Desde las primeras etapas de preproducción, incluida la selección de música, la dirección creativa se guió por la intención de proyectar un tono tranquilo y conciso, reforzando la identidad formal y profesional de la empresa.",
        videoUrl: "https://youtu.be/gHVWjYhBZxQ?si=k-AtKKTUb81k7sGW",
        dataAiHint: "corporate video"
      },
      {
        id: 2,
        title: "Introducing the Ford Explorer® Men’s Only Edition",
        category: "Comercial",
        imageUrl: `${imagePath}/MensOnly_md.jpg`,
        description: "Nos encargamos de la redacción del guión y la postproducción del video \"Introducing the Ford Explorer® Men’s Only Edition\", dando forma a una narrativa clara y atractiva, mejorando las imágenes con una edición precisa y asegurando que la pieza final se alineara perfectly con la identidad de la marca Ford.",
        videoUrl: "https://youtu.be/gIjWLWlRctE?si=MWxDv_cTqvocb1St",
        dataAiHint: "car commercial"
      },
      {
        id: 9,
        title: "Kotex Overnight",
        category: "Comercial",
        imageUrl: `${imagePath}/Kotex_md.jpg`,
        description: "Desarrollamos el comercial de Kotex Overnight desde cero, supervisando todo el proceso creativo, desde el concepto y el guión hasta la producción y la postproducción, entregando una pieza final visualmente atractiva y centrada en la marca.",
        videoUrl: "https://youtu.be/XobsJHkZrSw?si=NKKBrbn6shWkqQkv",
        dataAiHint: "beauty product"
      },
      {
        id: 10,
        title: "Purina Pro Plan",
        category: "Motion Graphics",
        imageUrl: `${imagePath}/Purina_md.jpg`,
        description: "Creamos gráficos en movimiento personalizados para PURINA Pro Plan, mejorando la narración visual y elevando el mensaje de la marca a través de animaciones dinámicas y de alta calidad.",
        videoUrl: "https://youtu.be/33W-940ZEuE?si=o-vcfHDyDbpLuMZs",
        dataAiHint: "pet food"
      },
      {
        id: 11,
        title: "Otra Vez - Prince Royce",
        category: "Marca Personal",
        imageUrl: `${imagePath}/Prince_md.jpg`,
        description: "Contribuimos a la producción de un video musical para Prince Royce, brindando apoyo creativo y técnico para lograr una pieza final visualmente cautivadora y alineada con el estilo del artista.",
        videoUrl: "https://youtu.be/6RENya8IoT4?si=201UV5rqPUjtTsjo",
        dataAiHint: "music video"
      },
      {
        id: 12,
        title: "Specialized",
        category: "Comercial",
        imageUrl: `${imagePath}/Specialized_md.jpg`,
        description: "Gestionamos la producción audiovisual completa para Specialized, desde el desarrollo del concepto y la filmación hasta la postproducción, creando una pieza de alto impacto que mostraba la innovación y el rendimiento de la marca.",
        videoUrl: "https://youtu.be/xUjt0tYngfQ?si=QT3tf2sl2lwfBX7D",
        dataAiHint: "bicycle"
      },
      {
        id: 13,
        title: "A New American Is Arriving",
        category: "Comercial",
        imageUrl: `${imagePath}/America_mg.jpg`,
        description: "Produjimos el video completo para American Airlines, cubriendo cada etapa desde el concepto y el guión hasta la filmación y la postproducción, entregando una pieza final pulida y alineada con la marca.",
        videoUrl: "https://youtu.be/1c8daiOKRD8?si=QsM78szc-ayku9Jl",
        dataAiHint: "airline"
      },
      {
        id: 14,
        title: "La Soledad",
        category: "Marca Personal",
        imageUrl: `${imagePath}/LaSoledad_md.jpg`,
        description: "Gestionamos la producción completa para la carrera de ciclismo La Soledad, capturando la energía del evento desde la planificación y filmación hasta la postproducción, resultando en un video final dinámico y atractivo.",
        videoUrl: "https://youtu.be/sH4B4dDWLH4?si=a9JbeL4B67hbBCQH",
        dataAiHint: "cycling race"
      },
      {
        id: 15,
        title: "Motta y Vieto Arquitectura e Ingeniería",
        category: "Marca Personal",
        imageUrl: `${imagePath}/Motta_md.jpg`,
        description: "Lideramos la producción audiovisual completa para Motta & Vieto, una de las principales firmas de arquitectura e ingeniería de Costa Rica, entregando una pieza visualmente impactante que destacó su experiencia y proyectos innovadores.",
        videoUrl: "https://youtu.be/MHZjYhjH9OQ?si=7vCbBOyY9gfOSLva",
        dataAiHint: "architecture"
      },
      {
        id: 16,
        title: "HPE Social",
        category: "Comercial",
        imageUrl: `${imagePath}/HpeMg.jpg`,
        description: "Produjimos videos para televisión y redes sociales para HPE, creando contenido atractivo y adaptado para plataformas de transmisión y digitales, alineado con los mensajes y la identidad visual de la marca.",
        videoUrl: "https://player.vimeo.com/video/540334508?h=0f3b80e739&title=0&byline=0&portrait=0",
        dataAiHint: "tech company"
      },
      {
        id: 17,
        title: "Baila q Baila",
        category: "Marca Personal",
        imageUrl: `${imagePath}/work_2_md.jpg`,
        description: "Gestionamos la producción audiovisual completa para Baila q Baila, desde el concepto y la preproducción hasta la filmación y la postproducción, entregando una pieza final dinámica e impulsada por el rendimiento.",
        videoUrl: "https://youtu.be/Q52Tkw_ieYs?si=tHK4y37kzuPh80Sm",
        dataAiHint: "dance performance"
      },
      {
        id: 18,
        title: "Lunchables",
        category: "Comercial",
        imageUrl: `${imagePath}/Lunchables_md.png`,
        description: "Me desempeñé como editor de video para Lunchables, entregando un ritmo nítido, una narración concisa y visuales alineados con la marca para un anuncio impactante y enfocado en la juventud.",
        videoUrl: "https://youtu.be/nIph2h63jRw",
        dataAiHint: "food product"
      },
      {
        id: 19,
        title: "Mugre",
        category: "Motion Graphics",
        imageUrl: `${imagePath}/Mugre_mg.jpg`,
        description: "Animación de personajes",
        videoUrl: "https://youtu.be/gvNn3qwPGXA?si=_f_tH-VXa-yC6mdr",
        dataAiHint: "character animation"
      },
      {
        id: 20,
        title: "Caribe",
        category: "Marca Personal",
        imageUrl: `${imagePath}/Caribe_md.jpg`,
        description: "Lideramos la producción audiovisual completa para Caribe (ICT - Instituto Costarricense de Turismo), desde el desarrollo del concepto y la logística, hasta la producción de campo y la postproducción, entregando una pieza cinematográfica que destaca la cultura y la belleza natural de la región.",
        videoUrl: "https://youtu.be/dRKCUTqIRHE?si=gde5e23LF4YrBrIT",
        dataAiHint: "tourism video"
      },
      {
        id: 21,
        title: "CR BioHealth",
        category: "Marca Personal",
        imageUrl: `${imagePath}/BioHealth_md.jpg`,
        description: "Lideramos la producción audiovisual completa para CR BioHealth (odontología), desde el concepto y el guión hasta la filmación y la postproducción, entregando una pieza limpia y centrada en el paciente que comunica confianza y cuidado.",
        videoUrl: "https://youtu.be/xxDgfVDK8vQ?si=MonKrWB5-IzKC24B",
        dataAiHint: "dentistry"
      }
    ],
    testimonials: [
      {
        name: 'Sofia Vargas',
        title: 'Wedding Planner',
        quote: 'Trabajar con Videame es garantía de tranquilidad. Sus videos de boda son pura emoción y arte. Mis clientes siempre quedan felices.',
        avatar: `${imagePath}/SofiaVargas.png`,
      },
      {
        name: 'Carlos Jimenez',
        title: 'Fundador, TechNova',
        quote: 'Profesionalismo, creatividad y entrega puntual. El video de lanzamiento fue un éxito y una pieza clave en nuestra estrategia.',
        avatar: `${imagePath}/CarlosJimenez.png`,
      },
      {
        name: 'Ana Rodriguez',
        title: 'Gerente de Marketing, Café Sol',
        quote: 'El equipo de Videame superó nuestras expectativas. Capturaron la esencia de nuestra marca con una calidad visual impresionante. Totalmente recomendados.',
        avatar: `${imagePath}/AnaRodriguez.png`,
      },
    ],
    clients: [
      { name: 'Adobe', logoUrl: `${imagePath}/logo-adobe.png` },
      { name: 'American Airlines', logoUrl: `${imagePath}/logo-American.png` },
      { name: 'CR Dental', logoUrl: `${imagePath}/logo-Dental.png` },
      { name: 'Google', logoUrl: `${imagePath}/logo-google.png` },
      { name: 'HP', logoUrl: `${imagePath}/logo-HP.png` },
      { name: 'Kimberly Clark', logoUrl: `${imagePath}/logo-KC.png` },
      { name: 'Kotex', logoUrl: `${imagePath}/logo-Kotex.png` },
      { name: 'Lunchables', logoUrl: `${imagePath}/logo-lunchables.png` },
      { name: 'Motta & Vieto', logoUrl: `${imagePath}/logo-MV.png` },
      { name: 'Paypal', logoUrl: `${imagePath}/logo-paypal.png` },
      { name: 'Puma', logoUrl: `${imagePath}/logo-puma.png` },
      { name: 'Rayban', logoUrl: `${imagePath}/logo-Rayban.png` },
      { name: 'Specialized', logoUrl: `${imagePath}/logo-spec.png` },
    ],
    processSteps: [
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
    ],
    page: {
      "seeReel": "Ver Reel",
      "getQuote": "Solicitar Cotización",
      "ourServices": "Nuestros Servicios",
      "ourServicesSub": "Desde la idea hasta la entrega final, te acompañamos en cada paso.",
      "ourWork": "Nuestro Trabajo",
      "ourWorkSub": "Explora una selección de proyectos que hemos traído a la vida.",
      "ourProcess": "Nuestro Proceso Creativo",
      "ourProcessSub": "Un enfoque estructurado para garantizar resultados excepcionales.",
      "testimonials": "Lo que dicen nuestros clientes",
      "aboutUs": "Sobre Videame",
      "aboutUsP1": "En Videame integramos diseño, tecnología y storytelling para convertir objetivos de comunicación en piezas audiovisuales memorables. Nuestro enfoque combina motion graphics, experiencias AR/VR y postproducción de alto nivel, con una operación de extremo a extremo: concepto y guión, producción y post, hasta la entrega final para TV, social y web. Trabajamos de cerca con cada marca para asegurar coherencia visual, claridad del mensaje y resultados medibles.",
      "aboutUsP2": "La dirección creativa está a cargo de José Chaves, Productor Audiovisual, Filmmaker e Ingeniero en Sistemas con 16 años de experiencia, reconocido por fusionar precisión técnica con lenguaje cinematográfico. Bajo su liderazgo, el estudio impulsa flujos eficientes, acabados consistentes y soluciones creativas alineadas a cada identidad de marca.",
      "ourClients": "Algunos de nuestros clientes",
      "contactUs": "Hablemos de tu proyecto",
      "contactUsSub": "Completa el formulario o contáctanos directamente. Estamos listos para crear algo increíble juntos.",
      "contactInfo": "Información de Contacto",
      "whyUs": "¿Por qué Videame?",
      "whyUs1": "Calidad cinematográfica en cada proyecto.",
      "whyUs2": "Entrega a tiempo, siempre.",
      "whyUs3": "Equipo creativo y flexible adaptado a tus necesidades.",
      "navServices": "Servicios",
      "navPortfolio": "Portafolio",
      "navProcess": "Proceso",
      "navAbout": "Sobre Nosotros",
      "navContact": "Contacto",
      "navCasting": "Casting",
      "navPortal": "Portal",
      "footerRights": "Videame. Todos los derechos reservados. San José, Costa Rica.",
      "footerPrivacy": "Política de Privacidad",
      "formName": "Nombre",
      "formNamePlaceholder": "Tu nombre completo",
      "formEmail": "Email",
      "formEmailPlaceholder": "tu@email.com",
      "formPhone": "Teléfono (Opcional)",
      "formPhonePlaceholder": "Tu número de teléfono",
      "formProjectType": "Tipo de Proyecto",
      "formProjectTypePlaceholder": "Selecciona una opción",
      "formProjectCorp": "Video Corporativo",
      "formProjectComm": "Comercial TV/Web",
      "formProjectEvent": "Video de Evento",
      "formProjectPhoto": "Fotografía",
      "formProjectSocial": "Contenido para Redes",
      "formProjectOther": "Otro",
      "formMessage": "Mensaje",
      "formMessagePlaceholder": "Cuéntanos sobre tu proyecto...",
      "formSubmit": "Enviar Mensaje por WhatsApp",
      "formSuccessTitle": "¡Listo!",
      "formSuccessDesc": "Se ha abierto WhatsApp para que envíes tu mensaje.",
      "nameRequired": "El nombre es requerido.",
      "emailInvalid": "Email inválido.",
      "projectTypeRequired": "Selecciona un tipo de proyecto.",
      "messageRequired": "El mensaje debe tener al menos 10 caracteres.",
      "portfolioAll": "Todos",
      "clientsTitle": "Portal",
      "clientsSubtitle": "Ingresa tu código de proyecto para descargar los entregables.",
      "clientsInputPlaceholder": "Código de Proyecto",
      "clientsButton": "Acceder",
      "clientsToastSuccessTitle": "Acceso Concedido",
      "clientsToastSuccessDesc": "Tu proyecto está listo para descargar.",
      "clientsToastErrorTitle": "Acceso Denegado",
      "clientsToastErrorDesc": "El código de proyecto es incorrecto o el archivo no existe.",
      "clientsToastNetworkErrorTitle": "Error de Red",
      "clientsToastNetworkErrorDesc": "No se pudo verificar el proyecto. Inténtalo de nuevo.",
      "clientsToastInvalidTitle": "Código Inválido",
      "clientsToastInvalidDesc": "Por favor, ingresa un código de proyecto.",
      "clientsDownloadTitle": "Proyecto: {projectCode}",
      "clientsDownloadSubtitle": "¡Tu proyecto está listo para descargar!",
      "clientsDownloadButton": "Descargar Archivos",
      "clientsDownloadOtherCode": "Ingresar otro código"
    }
  },
  en: {
    services: [
      {
        title: 'Video Production',
        description: 'We create corporate, commercial, and brand videos that capture the essence of your message.',
        icon: <Clapperboard className="w-8 h-8" />,
      },
      {
        title: 'Post-Production',
        description: 'Editing, color grading, motion graphics, and sound to take your footage to the next level.',
        icon: <Scissors className="w-8 h-8" />,
      },
      {
        title: 'Professional Photography',
        description: 'Product, portrait, and event sessions with a cinematic look and attention to detail.',
        icon: <Camera className="w-8 h-8" />,
      },
      {
        title: 'Web Development',
        description: 'Development of modern and optimized websites to complement your audiovisual strategy.',
        icon: <Globe className="w-8 h-8" />,
      },
    ],
    portfolio: [
        {
          id: 22,
          title: "Vuelta Al Lago",
          category: "Personal Brand",
          imageUrl: `${imagePath}/vueltaLago.png`,
          description: "We led the full audiovisual production for Vuelta al Lago, a cycling race—covering planning, on-site multi-camera coverage, and post-production—to deliver a high-energy film that captures the course, the athletes, and the event’s atmosphere.",
          videoUrl: "https://youtu.be/bq89JREVBN8?si=sltU5J6AfnOtLinR",
          dataAiHint: "cycling race"
        },
        {
          id: 23,
          title: "Mambotopia",
          category: "Personal Brand",
          imageUrl: `${imagePath}/mambotopia.png`,
          description: "We led the full audiovisual production for Mambotopia, an international dance congress—covering pre-production, multi-camera event capture, and post-production—to deliver energetic highlight films, artist features, and social cutdowns.",
          videoUrl: "https://youtu.be/iuGd8RN20hY?si=l9cIuAleTK9uK3tP",
          dataAiHint: "dance congress"
        },
        {
          id: 1,
          title: "Entornos CR",
          category: "Commercial",
          imageUrl: `${imagePath}/AR_mg.jpg`,
          description: "The objective of this video project was to create an audiovisual production that positions Entornos CR as a company with experience, solidity, and trust. From the early stages of pre-production, including music selection, the creative direction was guided by the intention to project a calm and concise tone, reinforcing the company’s formal and professional identity.",
          videoUrl: "https://youtu.be/gHVWjYhBZxQ?si=k-AtKKTUb81k7sGW",
          dataAiHint: "corporate video"
        },
        {
          id: 2,
          title: "Introducing the Ford Explorer® Men’s Only Edition",
          category: "Commercial",
          imageUrl: `${imagePath}/MensOnly_md.jpg`,
          description: "We handled the scriptwriting and post-production for the \"Introducing the Ford Explorer® Men’s Only Edition\" video, shaping a clear and engaging narrative, enhancing visuals with precise editing, and ensuring the final piece aligned seamlessly with Ford’s brand identity.",
          videoUrl: "https://youtu.be/gIjWLWlRctE?si=MWxDv_cTqvocb1St",
          dataAiHint: "car commercial"
        },
        {
          id: 9,
          title: "Kotex Overnight",
          category: "Commercial",
          imageUrl: `${imagePath}/Kotex_md.jpg`,
          description: "We developed the Kotex Over the Night commercial from the ground up, overseeing the entire creative process—from concept and script to production and post-production—delivering a visually compelling and brand-focused final piece.",
          videoUrl: "https://youtu.be/XobsJHkZrSw?si=NKKBrbn6shWkqQkv",
          dataAiHint: "beauty product"
        },
        {
          id: 10,
          title: "Purina Pro Plan",
          category: "Motion Graphics",
          imageUrl: `${imagePath}/Purina_md.jpg`,
          description: "Created custom motion graphics for PURINA Pro Plan, enhancing the visual storytelling and elevating the brand’s message through dynamic, high-quality animations.",
          videoUrl: "https://youtu.be/33W-940ZEuE?si=o-vcfHDyDbpLuMZs",
          dataAiHint: "pet food"
        },
        {
          id: 11,
          title: "Otra Vez - Prince Royce",
          category: "Personal Brand",
          imageUrl: `${imagePath}/Prince_md.jpg`,
          description: "Contributed to the production of a music video for Prince Royce, delivering creative and technical support to achieve a visually captivating final piece aligned with the artist’s style.",
          videoUrl: "https://youtu.be/6RENya8IoT4?si=201UV5rqPUjtTsjo",
          dataAiHint: "music video"
        },
        {
          id: 12,
          title: "Specialized",
          category: "Commercial",
          imageUrl: `${imagePath}/Specialized_md.jpg`,
          description: "Managed the full audiovisual production for Specialized, from concept development and filming to post-production, creating a high-impact piece that showcased the brand’s innovation and performance.",
          videoUrl: "https://youtu.be/xUjt0tYngfQ?si=QT3tf2sl2lwfBX7D",
          dataAiHint: "bicycle"
        },
        {
          id: 13,
          title: "A New American Is Arriving",
          category: "Commercial",
          imageUrl: `${imagePath}/America_mg.jpg`,
          description: "Produced the full video for American Airlines, covering every stage from concept and script to filming and post-production, delivering a polished and brand-aligned final piece.",
          videoUrl: "https://youtu.be/1c8daiOKRD8?si=QsM78szc-ayku9Jl",
          dataAiHint: "airline"
        },
        {
          id: 14,
          title: "La Soledad",
          category: "Personal Brand",
          imageUrl: `${imagePath}/LaSoledad_md.jpg`,
          description: "Managed the full production for La Soledad cycling race, capturing the event’s energy from planning and filming to post-production, resulting in a dynamic and engaging final video.",
          videoUrl: "https://youtu.be/sH4B4dDWLH4?si=a9JbeL4B67hbBCQH",
          dataAiHint: "cycling race"
        },
        {
          id: 15,
          title: "Motta y Vieto Arquitectura e Ingeniería",
          category: "Personal Brand",
          imageUrl: `${imagePath}/Motta_md.jpg`,
          description: "We led the full audiovisual production for Motta & Vieto, one of Costa Rica’s top architecture and engineering firms, delivering a visually striking piece that highlighted their expertise and innovative projects.",
          videoUrl: "https://youtu.be/MHZjYhjH9OQ?si=7vCbBOyY9gfOSLva",
          dataAiHint: "architecture"
        },
        {
          id: 16,
          title: "HPE Social",
          category: "Commercial",
          imageUrl: `${imagePath}/HpeMg.jpg`,
          description: "Produced TV and social media videos for HPE, crafting engaging content tailored for broadcast and digital platforms, aligned with the brand’s messaging and visual identity.",
          videoUrl: "https://player.vimeo.com/video/540334508?h=0f3b80e739&title=0&byline=0&portrait=0",
          dataAiHint: "tech company"
        },
        {
          id: 17,
          title: "Baila q Baila",
          category: "Personal Brand",
          imageUrl: `${imagePath}/work_2_md.jpg`,
          description: "Managed the full audiovisual production for Baila q Baila—from concept and pre-production to filming and post—delivering a dynamic, performance-driven final piece.",
          videoUrl: "https://youtu.be/Q52Tkw_ieYs?si=tHK4y37kzuPh80Sm",
          dataAiHint: "dance performance"
        },
        {
          id: 18,
          title: "Lunchables",
          category: "Commercial",
          imageUrl: `${imagePath}/Lunchables_md.png`,
          description: "Served as Video Editor for Lunchables, delivering crisp pacing, tight storytelling, and brand-aligned visuals for a punchy, youth-focused spot.",
          videoUrl: "https://youtu.be/nIph2h63jRw",
          dataAiHint: "food product"
        },
        {
          id: 19,
          title: "Mugre",
          category: "Motion Graphics",
          imageUrl: `${imagePath}/Mugre_mg.jpg`,
          description: "Character Animation",
          videoUrl: "https://youtu.be/gvNn3qwPGXA?si=_f_tH-VXa-yC6mdr",
          dataAiHint: "character animation"
        },
        {
          id: 20,
          title: "Caribe",
          category: "Personal Brand",
          imageUrl: `${imagePath}/Caribe_md.jpg`,
          description: "We led the full audiovisual production for Caribe (ICT – Costa Rica Tourism Board), from concept development and logistics, to field production and post-production, delivering a cinematic piece that highlights the region’s culture and natural beauty.",
          videoUrl: "https://youtu.be/dRKCUTqIRHE?si=gde5e23LF4YrBrIT",
          dataAiHint: "tourism video"
        },
        {
          id: 21,
          title: "CR BioHealth",
          category: "Personal Brand",
          imageUrl: `${imagePath}/BioHealth_md.jpg`,
          description: "We led the full audiovisual production for CR BioHealth (dentistry), from concept and script through filming and post, delivering a clean, patient-centric piece that communicates trust and care.",
          videoUrl: "https://youtu.be/xxDgfVDK8vQ?si=MonKrWB5-IzKC24B",
          dataAiHint: "dentistry"
        }
    ],
    testimonials: [
      {
        name: 'Sofia Vargas',
        title: 'Wedding Planner',
        quote: 'Working with Videame is a guarantee of peace of mind. Their wedding videos are pure emotion and art. My clients are always happy.',
        avatar: `${imagePath}/SofiaVargas.png`,
      },
      {
        name: 'Carlos Jimenez',
        title: 'Founder, TechNova',
        quote: 'Professionalism, creativity, and on-time delivery. The launch video was a success and a key part of our strategy.',
        avatar: `${imagePath}/CarlosJimenez.png`,
      },
      {
        name: 'Ana Rodriguez',
        title: 'Marketing Manager, Café Sol',
        quote: 'The Videame team exceeded our expectations. They captured the essence of our brand with stunning visual quality. Totally recommended.',
        avatar: `${imagePath}/AnaRodriguez.png`,
      },
    ],
    clients: [
        { name: 'Adobe', logoUrl: `${imagePath}/logo-adobe.png` },
        { name: 'American Airlines', logoUrl: `${imagePath}/logo-American.png` },
        { name: 'CR Dental', logoUrl: `${imagePath}/logo-Dental.png` },
        { name: 'Google', logoUrl: `${imagePath}/logo-google.png` },
        { name: 'HP', logoUrl: `${imagePath}/logo-HP.png` },
        { name: 'Kimberly Clark', logoUrl: `${imagePath}/logo-KC.png` },
        { name: 'Kotex', logoUrl: `${imagePath}/logo-Kotex.png` },
        { name: 'Lunchables', logoUrl: `${imagePath}/logo-lunchables.png` },
        { name: 'Motta & Vieto', logoUrl: `${imagePath}/logo-MV.png` },
        { name: 'Paypal', logoUrl: `${imagePath}/logo-paypal.png` },
        { name: 'Puma', logoUrl: `${imagePath}/logo-puma.png` },
        { name: 'Rayban', logoUrl: `${imagePath}/logo-Rayban.png` },
        { name: 'Specialized', logoUrl: `${imagePath}/logo-spec.png` },
    ],
    processSteps: [
        {
            title: "Brief & Strategy",
            description: "We meet to understand your goals, audience, and key message. We define the creative strategy.",
            icon: <Lightbulb className="w-8 h-8" />,
        },
        {
            title: "Pre-Production",
            description: "We plan every detail: script, storyboard, locations, casting, and logistics for a flawless shoot.",
            icon: <Users className="w-8 h-8" />,
        },
        {
            title: "Shooting & Production",
            description: "With state-of-the-art equipment and a cinematic eye, we bring the vision to life. We capture the magic.",
            icon: <Film className="w-8 h-8" />,
        },
        {
            title: "Post-Production & Delivery",
            description: "The story takes its final shape in editing. We deliver a polished product that exceeds your expectations.",
            icon: <Award className="w-8 h-8" />,
        },
    ],
    page: {
      "seeReel": "See Reel",
      "getQuote": "Get a Quote",
      "ourServices": "Our Services",
      "ourServicesSub": "From idea to final delivery, we are with you every step of the way.",
      "ourWork": "Our Work",
      "ourWorkSub": "Explore a selection of projects we have brought to life.",
      "ourProcess": "Our Creative Process",
      "ourProcessSub": "A structured approach to ensure exceptional results.",
      "testimonials": "What our clients say",
      "aboutUs": "About Videame",
      "aboutUsP1": "At Videame we integrate design, technology and storytelling to convert communication objectives into memorable audiovisual pieces. Our approach combines motion graphics, AR/VR experiences and high-level post-production, with an end-to-end operation: concept and script, production and post, up to the final delivery for TV, social and web. We work closely with each brand to ensure visual coherence, clarity of message and measurable results.",
      "aboutUsP2": "Creative direction is led by José Chaves, an Audiovisual Producer, Filmmaker, and Systems Engineer with 16 years of experience, renowned for merging technical precision with cinematic language. Under his leadership, the studio drives efficient workflows, consistent finishes, and creative solutions aligned with each brand's identity.",
      "ourClients": "Some of our clients",
      "contactUs": "Let's talk about your project",
      "contactUsSub": "Fill out the form or contact us directly. We are ready to create something amazing together.",
      "contactInfo": "Contact Information",
      "whyUs": "Why Videame?",
      "whyUs1": "Cinematic quality in every project.",
      "whyUs2": "On-time delivery, always.",
      "whyUs3": "Creative and flexible team adapted to your needs.",
      "navServices": "Services",
      "navPortfolio": "Portfolio",
      "navProcess": "Process",
      "navAbout": "About Us",
      "navContact": "Contact",
      "navCasting": "Casting",
      "navPortal": "Portal",
      "footerRights": "Videame. All rights reserved. San José, Costa Rica.",
      "footerPrivacy": "Privacy Policy",
      "formName": "Name",
      "formNamePlaceholder": "Your full name",
      "formEmail": "Email",
      "formEmailPlaceholder": "you@email.com",
      "formPhone": "Phone (Optional)",
      "formPhonePlaceholder": "Your phone number",
      "formProjectType": "Project Type",
      "formProjectTypePlaceholder": "Select an option",
      "formProjectCorp": "Corporate Video",
      "formProjectComm": "TV/Web Commercial",
      "formProjectEvent": "Event Video",
      "formProjectPhoto": "Photography",
      "formProjectSocial": "Social Media Content",
      "formProjectOther": "Other",
      "formMessage": "Message",
      "formMessagePlaceholder": "Tell us about your project...",
      "formSubmit": "Send Message via WhatsApp",
      "formSuccessTitle": "Ready!",
      "formSuccessDesc": "WhatsApp has been opened for you to send your message.",
      "nameRequired": "Name is required.",
      "emailInvalid": "Invalid email.",
      "projectTypeRequired": "Please select a project type.",
      "messageRequired": "Message must be at least 10 characters long.",
      "portfolioAll": "All",
      "clientsTitle": "Portal",
      "clientsSubtitle": "Enter your project code to download the deliverables.",
      "clientsInputPlaceholder": "Project Code",
      "clientsButton": "Access",
      "clientsToastSuccessTitle": "Access Granted",
      "clientsToastSuccessDesc": "Your project is ready for download.",
      "clientsToastErrorTitle": "Access Denied",
      "clientsToastErrorDesc": "The project code is incorrect or the file does not exist.",
      "clientsToastNetworkErrorTitle": "Network Error",
      "clientsToastNetworkErrorDesc": "Could not verify the project. Please try again.",
      "clientsToastInvalidTitle": "Invalid Code",
      "clientsToastInvalidDesc": "Please enter a project code.",
      "clientsDownloadTitle": "Project: {projectCode}",
      "clientsDownloadSubtitle": "Your project is ready to download!",
      "clientsDownloadButton": "Download Files",
      "clientsDownloadOtherCode": "Enter another code"
    }
  }
};

export type PortfolioCategory = 'Comercial' | 'Marca Personal' | 'Motion Graphics' | 'Commercial' | 'Personal Brand';

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

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

export interface Client {
    name: string;
    logoUrl: string;
}

export interface ProcessStep {
    title: string;
    description: string;
    icon: ReactElement;
}
