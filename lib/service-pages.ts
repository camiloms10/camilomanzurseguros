import type { ComponentType } from "react";
import {
  BadgeCheckIcon,
  Building2Icon,
  CarFrontIcon,
  HeartPulseIcon,
  HelpingHandIcon,
  LifeBuoyIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WalletCardsIcon,
} from "@/components/icons";

export type ServicePageConfig = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  whatsappMessage: string;
  heroHighlights: Array<{
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
  }>;
  valueProps: Array<{
    title: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const servicePages: ServicePageConfig[] = [
  {
    slug: "seguro-de-auto",
    title: "Seguro de auto",
    shortTitle: "Auto",
    eyebrow: "Cotiza seguro de auto",
    heroTitle: "Cotiza tu seguro de auto comparando cobertura, deducible y precio",
    heroDescription:
      "Recibe opciones claras entre varias aseguradoras para proteger tu auto con una cobertura que sí se ajuste a tu perfil y presupuesto.",
    metaTitle: "Seguro de auto | Cotiza con asesoría personalizada",
    metaDescription:
      "Cotiza seguro de auto con asesoría personalizada y comparación entre 18 aseguradoras. Atención rápida por WhatsApp y apoyo para elegir mejor cobertura.",
    whatsappMessage: "Hola, quiero cotizar un seguro de auto",
    heroHighlights: [
      {
        title: "Comparación real",
        description: "Analizamos varias aseguradoras para no dejarte con una sola opción.",
        icon: SparklesIcon,
      },
      {
        title: "Cobertura adecuada",
        description: "Te orientamos sobre deducibles, daños, robo, RC y asistencia.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Respuesta rápida",
        description: "La forma más ágil de avanzar es por WhatsApp con tus datos básicos.",
        icon: WalletCardsIcon,
      },
    ],
    valueProps: [
      {
        title: "Opciones según tu perfil",
        description: "No es lo mismo cotizar primer auto, uso diario o flotilla. La recomendación cambia según tu caso.",
        icon: CarFrontIcon,
      },
      {
        title: "Explicación clara",
        description: "Te ayudamos a entender qué cambia entre una cobertura básica, limitada o amplia.",
        icon: HelpingHandIcon,
      },
      {
        title: "Seguimiento posterior",
        description: "Si decides contratar, también te acompañamos con renovaciones y dudas de la póliza.",
        icon: LifeBuoyIcon,
      },
    ],
    faqs: [
      {
        question: "¿Qué necesito para cotizar un seguro de auto?",
        answer: "Normalmente basta con algunos datos del vehículo y del conductor para empezar a comparar opciones.",
      },
      {
        question: "¿Solo cotizas una aseguradora?",
        answer: "No. El objetivo es comparar varias alternativas para ayudarte a elegir por cobertura, servicio y precio.",
      },
      {
        question: "¿Puedo resolverlo por WhatsApp?",
        answer: "Sí. Es la vía más rápida para empezar la cotización y recibir orientación inicial.",
      },
    ],
  },
  {
    slug: "gastos-medicos",
    title: "Seguro de gastos médicos",
    shortTitle: "Gastos médicos",
    eyebrow: "Cotiza gastos médicos",
    heroTitle: "Cotiza tu seguro de gastos médicos con asesoría clara y comparación real",
    heroDescription:
      "Te ayudamos a evaluar deducible, coaseguro, red hospitalaria y alcance de cobertura para elegir con más confianza.",
    metaTitle: "Gastos médicos | Cotiza con comparación entre aseguradoras",
    metaDescription:
      "Cotiza seguro de gastos médicos con apoyo personalizado. Compara opciones entre 18 aseguradoras y resuelve dudas por WhatsApp.",
    whatsappMessage: "Hola, quiero cotizar un seguro de gastos médicos",
    heroHighlights: [
      {
        title: "Red hospitalaria",
        description: "Revisamos hospitales, médicos y alcance de protección para tu zona y perfil.",
        icon: HeartPulseIcon,
      },
      {
        title: "Explicación sin letras chiquitas",
        description: "Te explicamos deducible, coaseguro y exclusiones con lenguaje claro.",
        icon: HelpingHandIcon,
      },
      {
        title: "Comparación con criterio",
        description: "No solo precio: también servicio, acceso y continuidad.",
        icon: BadgeCheckIcon,
      },
    ],
    valueProps: [
      {
        title: "Decisión mejor informada",
        description: "Te acompañamos a comparar variables que sí impactan al momento de usar la póliza.",
        icon: SparklesIcon,
      },
      {
        title: "Ajuste a tu etapa de vida",
        description: "La recomendación cambia si cotizas de forma individual, familiar o empresarial.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Atención rápida",
        description: "Puedes iniciar la cotización por WhatsApp y avanzar sin perder tiempo.",
        icon: WalletCardsIcon,
      },
    ],
    faqs: [
      {
        question: "¿Qué influye más en el precio?",
        answer: "Edad, cobertura, deducible, coaseguro y red hospitalaria suelen ser variables clave al cotizar.",
      },
      {
        question: "¿Puedo comparar varias opciones antes de decidir?",
        answer: "Sí. Justo ese es el objetivo: revisar alternativas antes de comprometerte con una sola póliza.",
      },
      {
        question: "¿Me pueden orientar si nunca he tenido este seguro?",
        answer: "Sí. La asesoría busca ayudarte a entenderlo desde cero y aterrizarlo a tu caso real.",
      },
    ],
  },
  {
    slug: "seguro-de-vida",
    title: "Seguro de vida",
    shortTitle: "Vida",
    eyebrow: "Cotiza seguro de vida",
    heroTitle: "Cotiza tu seguro de vida con claridad y respaldo para tu familia",
    heroDescription:
      "Te ayudamos a revisar montos, plazos y objetivos para elegir una protección que tenga sentido para tu etapa de vida.",
    metaTitle: "Seguro de vida | Cotiza con acompañamiento personalizado",
    metaDescription:
      "Cotiza seguro de vida con asesoría personalizada, comparación entre aseguradoras y atención rápida por WhatsApp.",
    whatsappMessage: "Hola, quiero cotizar un seguro de vida",
    heroHighlights: [
      {
        title: "Protección con sentido",
        description: "La cobertura se alinea a tu familia, tus ingresos y tus objetivos patrimoniales.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Opciones comparadas",
        description: "Revisamos alternativas entre varias aseguradoras para encontrar mejor ajuste.",
        icon: SparklesIcon,
      },
      {
        title: "Orientación humana",
        description: "Resolvemos dudas de forma clara para que tomes una decisión informada.",
        icon: HelpingHandIcon,
      },
    ],
    valueProps: [
      {
        title: "Protección familiar",
        description: "Pensado para quienes quieren cuidar la estabilidad económica de quienes dependen de ellos.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Metas de largo plazo",
        description: "También te orientamos si buscas combinar protección con ahorro o retiro.",
        icon: WalletCardsIcon,
      },
      {
        title: "Acompañamiento completo",
        description: "Desde la cotización hasta la contratación, todo con seguimiento cercano.",
        icon: LifeBuoyIcon,
      },
    ],
    faqs: [
      {
        question: "¿Cómo sé qué suma asegurada necesito?",
        answer: "Depende de tus ingresos, dependientes, deudas y el objetivo de protección que quieres cubrir.",
      },
      {
        question: "¿Hay opciones con ahorro?",
        answer: "Sí, existen alternativas enfocadas en protección pura y otras que incorporan ahorro o retiro.",
      },
      {
        question: "¿Puedo empezar la cotización por WhatsApp?",
        answer: "Sí. Es la forma más rápida de iniciar y resolver dudas iniciales.",
      },
    ],
  },
  {
    slug: "seguro-de-empresas",
    title: "Seguro de empresas",
    shortTitle: "Empresas",
    eyebrow: "Cotiza seguro empresarial",
    heroTitle: "Cotiza seguro para empresas con opciones claras y seguimiento profesional",
    heroDescription:
      "Te ayudamos a revisar riesgos, continuidad operativa y protección patrimonial para construir una propuesta adecuada a tu empresa.",
    metaTitle: "Seguro de empresas | Cotiza cobertura empresarial",
    metaDescription:
      "Cotiza seguro para empresas con atención personalizada, comparación entre aseguradoras y soporte por WhatsApp.",
    whatsappMessage: "Hola, quiero cotizar un seguro para empresas",
    heroHighlights: [
      {
        title: "Protección patrimonial",
        description: "Analizamos necesidades reales para no sobrerrecomendar ni quedarte corto.",
        icon: Building2Icon,
      },
      {
        title: "Comparación profesional",
        description: "Revisamos alternativas según actividad, tamaño y nivel de exposición.",
        icon: BadgeCheckIcon,
      },
      {
        title: "Atención cercana",
        description: "Puedes iniciar por WhatsApp y después aterrizar los detalles necesarios.",
        icon: HelpingHandIcon,
      },
    ],
    valueProps: [
      {
        title: "Continuidad operativa",
        description: "La idea es ayudarte a proteger activos, operación y estabilidad del negocio.",
        icon: ShieldCheckIcon,
      },
      {
        title: "Cobertura a medida",
        description: "Las empresas no se resuelven con plantillas genéricas; la asesoría se adapta a tu caso.",
        icon: SparklesIcon,
      },
      {
        title: "Seguimiento real",
        description: "Tienes acompañamiento antes de contratar y también en renovaciones o ajustes.",
        icon: LifeBuoyIcon,
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de empresas pueden cotizar?",
        answer: "Se puede orientar tanto a negocios pequeños como a empresas que buscan una protección más robusta.",
      },
      {
        question: "¿Qué datos necesito para empezar?",
        answer: "Depende del tipo de empresa y cobertura, pero se puede iniciar con una conversación breve para perfilar la necesidad.",
      },
      {
        question: "¿Puedo empezar por WhatsApp?",
        answer: "Sí. Es la forma más ágil de arrancar y decidir qué información conviene reunir después.",
      },
    ],
  },
];

export const servicePagesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<string, ServicePageConfig>;
