import {
  ArrowRightIcon,
  BadgeCheckIcon,
  Building2Icon,
  CarFrontIcon,
  HandHeartIcon,
  HeartPulseIcon,
  HelpingHandIcon,
  HomeIcon,
  LandmarkIcon,
  LifeBuoyIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WalletCardsIcon,
} from "@/components/icons";

export const siteConfig = {
  name: "Camilo Manzur Seguros",
  description:
    "Asesoría personalizada en seguros para auto, gastos médicos, vida, hogar y empresas. Compara entre 18 aseguradoras y cotiza por WhatsApp en minutos.",
  siteUrl: "https://www.camilomanzurseguros.com",
  officeName: "Solbes & Manzur",
  officeLabel: "En Solbes & Manzur",
  officeMapUrl: "https://maps.app.goo.gl/uXhuKp1SDmuGzWGa7",
  officeMapEmbedUrl: "https://www.google.com/maps?q=22.2573419,-97.871416&z=17&output=embed",
  phone: "8331407662",
  email: "camilo@symseguros.mx",
  city: "Tampico, Tamaulipas",
  whatsappMessage: "Hola, quiero cotizar un seguro",
  facebookUrl: "https://www.facebook.com/profile.php?id=61577805622923",
  logoPath: "/logo-camilo-manzur.png",
};

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Seguros", href: "#seguros" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

export const insurerCount = 18;

export const stats = [
  { value: "22 años", label: "asesorando a familias y empresas en México" },
  { value: `+${insurerCount} aseguradoras`, label: "para comparar cobertura, servicio y costo" },
  { value: "Atención nacional", label: "acompañamiento profesional en todo México" },
];

export const benefits = [
  {
    title: "Atención personalizada",
    description:
      "Analizamos tu situación, tus prioridades y tu presupuesto para recomendarte una opción que sí haga sentido para ti.",
    icon: HandHeartIcon,
  },
  {
    title: "Comparación inteligente",
    description:
      "Revisamos distintas aseguradoras para ayudarte a elegir con claridad, sin perder tiempo comparando solo por tu cuenta.",
    icon: SparklesIcon,
  },
  {
    title: "Acompañamiento completo",
    description:
      "Te guiamos desde la cotización hasta la contratación, renovaciones y dudas posteriores para que siempre tengas respaldo.",
    icon: HelpingHandIcon,
  },
  {
    title: "Experiencia comprobada",
    description:
      "Más de dos décadas asesorando clientes con un trato cercano, profesional y enfocado en proteger lo que más valoras.",
    icon: BadgeCheckIcon,
  },
];

export const insuranceTypes = [
  {
    title: "Seguro de auto",
    description: "Protección para tu vehículo con coberturas claras y opciones competitivas entre distintas aseguradoras.",
    icon: CarFrontIcon,
    pageHref: "/seguro-de-auto",
  },
  {
    title: "Gastos médicos",
    description: "Alternativas para cuidar tu salud, acceso hospitalario y respaldo financiero ante imprevistos médicos.",
    icon: HeartPulseIcon,
    pageHref: "/gastos-medicos",
  },
  {
    title: "Seguro de vida",
    description: "Soluciones para proteger a tu familia, tu patrimonio y la tranquilidad de quienes dependen de ti.",
    icon: ShieldCheckIcon,
    pageHref: "/seguro-de-vida",
  },
  {
    title: "Seguro de hogar",
    description: "Coberturas pensadas para proteger tu casa, tus bienes y tu patrimonio frente a distintos riesgos.",
    icon: HomeIcon,
  },
  {
    title: "Seguro de empresas",
    description: "Opciones para negocios y empresas que buscan continuidad operativa y protección patrimonial.",
    icon: Building2Icon,
    pageHref: "/seguro-de-empresas",
  },
  {
    title: "Ahorro y retiro",
    description: "Planes para construir patrimonio con visión de largo plazo y mayor tranquilidad financiera.",
    icon: LandmarkIcon,
  },
];

type TrustLogo = {
  name: string;
  src?: string;
  logoClassName?: string;
  logoWidth?: string;
  logoHeight?: string;
};

export const trustLogos: TrustLogo[] = [
  { name: "AXA", src: "/insurers/axa.png", logoClassName: "object-contain", logoWidth: "70px", logoHeight: "70px" },
  { name: "ANA Seguros", src: "/insurers/ana-seguros.png", logoClassName: "h-8 max-w-[6rem] object-contain" },
  { name: "HDI", src: "/insurers/hdi.png", logoClassName: "h-7 max-w-[6.5rem] object-contain" },
  { name: "GMX Seguros", src: "/insurers/gmx-seguros.webp", logoClassName: "h-8 max-w-[5rem] object-contain" },
  { name: "GNP", src: "/insurers/gnp.svg", logoClassName: "h-8 max-w-[5.5rem] object-contain" },
  { name: "Inbursa", src: "/insurers/inbursa.png", logoClassName: "h-9 max-w-[4.5rem] object-contain" },
  { name: "Zurich", src: "/insurers/zurich.svg", logoClassName: "h-8 max-w-[6rem] object-contain" },
  { name: "Mapfre", src: "/insurers/mapfre.png", logoClassName: "h-6 max-w-[6rem] object-contain" },
  { name: "MetLife", src: "/insurers/metlife.png", logoClassName: "h-7 max-w-[6rem] object-contain" },
  { name: "Qualitas", src: "/insurers/qualitas.png", logoClassName: "h-9 max-w-[4.75rem] object-contain" },
  {
    name: "Seguros Monterrey",
    src: "/insurers/seguros-monterrey.png",
    logoClassName: "h-7 max-w-[6.5rem] object-contain",
  },
  { name: "Banorte", src: "/insurers/banorte.png", logoClassName: "h-9 max-w-[5.75rem] object-contain" },
  { name: "Bupa", src: "/insurers/bupa.svg", logoClassName: "object-contain", logoWidth: "70px", logoHeight: "70px" },
  { name: "Chubb", src: "/insurers/chubb.png", logoClassName: "h-6 max-w-[6rem] object-contain" },
  { name: "Seguros Atlas", src: "/insurers/seguros-atlas.png", logoClassName: "h-6 max-w-[6rem] object-contain" },
  { name: "El Potosi", src: "/insurers/el-potosi.png", logoClassName: "h-7 max-w-[5.5rem] object-contain" },
  { name: "Afirme", src: "/insurers/afirme.png", logoClassName: "h-6 max-w-[6rem] object-contain" },
  { name: "Plan Seguro", src: "/insurers/plan-seguro.png", logoClassName: "object-contain", logoWidth: "96px", logoHeight: "34px" },
];

export const faqs = [
  {
    question: "¿Cuál es el mejor seguro para mí?",
    answer:
      "Depende de tu etapa de vida, el nivel de protección que buscas y tu presupuesto. La asesoría se enfoca en entender tu caso y proponerte opciones reales, no una póliza genérica.",
  },
  {
    question: "¿Cuánto cuesta un seguro?",
    answer:
      "El costo cambia según el tipo de seguro, la cobertura y tu perfil. Por eso se comparan varias aseguradoras para presentarte alternativas claras y competitivas.",
  },
  {
    question: "¿Puedo comparar opciones antes de decidir?",
    answer:
      "Sí. Una parte clave del servicio es ayudarte a comparar beneficios, deducibles, sumas aseguradas y servicio para que elijas con confianza.",
  },
  {
    question: "¿Cómo funciona el proceso?",
    answer:
      "Primero se entiende qué necesitas, luego se cotiza entre varias aseguradoras y después se te acompaña para resolver dudas, contratar y dar seguimiento a tu póliza.",
  },
];

export const heroHighlights = [
  {
    title: "Respuesta rápida por WhatsApp",
    description: "La vía más directa para pasar de visita a conversación y cotización.",
    icon: ArrowRightIcon,
  },
  {
    title: "Comparación entre aseguradoras",
    description: "Acompañamiento profesional para ayudarte a elegir mejor cobertura.",
    icon: WalletCardsIcon,
  },
  {
    title: "Seguimiento real",
    description: "Asesoría antes, durante y después de contratar tu seguro.",
    icon: LifeBuoyIcon,
  },
];

export const formOptions = [
  "Seguro de auto",
  "Gastos médicos",
  "Seguro de vida",
  "Seguro de hogar",
  "Seguro de empresas",
  "Ahorro y retiro",
  "Otro",
];
