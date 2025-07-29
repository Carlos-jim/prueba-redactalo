"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isLoaded: boolean
}

const translations = {
  es: {
    // Navigation
    "nav.solutions": "Soluciones",
    "nav.methodologies": "Metodologías",
    "nav.resources": "Recursos",
    "nav.caseStudies": "Clientes",
    "nav.pricing": "Precios",
    "nav.blog": "Blog",
    "nav.community": "Comunidad",
    "nav.playbook": "Playbook",
    "nav.affiliates": "Afiliados",
    "nav.metrics": "Métricas",
    "nav.inspirations": "Inspiraciones",

    // Hero Section
    "hero.title": "Creamos Posts Personales que Atraen Clientes",
    "hero.subtitle": "Atrae Clientes con tu Marca Personal en LinkedIn",
    "hero.description":
      "Transforma tu presencia en LinkedIn con contenido auténtico que genera resultados reales. Nuestra metodología probada te ayuda a conseguir visibilidad, autoridad y ventas.",
    "hero.cta": "Comenzar Ahora",
    "hero.secondary": "Ver Metodología",
    "hero.badge": "Metodología probada por +1000 profesionales",
    "hero.slogan.1": "Crea Posts que Atraen Clientes",
    "hero.slogan.2": "Creamos Posts que Atraen Clientes",
    "hero.slogan.3": "Creamos Posts que Atraen Clientes en <5 mins",
    "hero.slogan.4": "Creamos Posts Personales que Atraen Clientes en <5 mins",
    "hero.slogan.5": "Creamos tus Posts para que Atraigas Clientes en LinkedIn",
    "hero.slogan.6": "Atrae Clientes con tu Marca Personal en LinkedIn",

    // Pricing
    "pricing.title": "Planes y Precios",
    "pricing.subtitle": "Elige el plan perfecto para hacer crecer tu marca personal",
    "pricing.basic": "Básico",
    "pricing.pro": "Profesional",
    "pricing.enterprise": "Empresarial",
    "pricing.month": "/mes",
    "pricing.getStarted": "Comenzar",
    "pricing.contactUs": "Contactanos",
    //Features Pricing
    "basic.feature1": "5 posts personalizados por mes",
    "basic.feature2": "Plantillas de contenido",
    "basic.feature3": "Análisis básico de métricas",
    "basic.feature4": "Soporte por email",
    "basic.feature5": "Acceso a la comunidad",
    "pro.feature1": "15 posts personalizados por mes",
    "pro.feature2": "Estrategia de contenido personalizada",
    "pro.feature3": "Análisis avanzado de métricas",
    "pro.feature4": "Soporte prioritario",
    "pro.feature5": "Acceso a la comunidad",
    "pro.feature6": "Sesiones de consultoría mensuales",
    "pro.feature7": "Optimización de perfil",
    "enterprise.feature1": "Posts ilimitados",
    "enterprise.feature2": "Estrategia empresarial completa",
    "enterprise.feature3": "Análisis y reportes detallados",
    "enterprise.feature4": "Soporte dedicado 24/7",
    "enterprise.feature5": "Formación para equipos",


       // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Resolvemos las dudas más comunes sobre nuestros planes",
    "faq.question1": "¿Puedo cambiar de plan en cualquier momento?",
    "faq.answer1": "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación.",
    "faq.question2": "¿Ofrecen garantía de devolución?",
    "faq.answer2": "Ofrecemos una garantía de 30 días. Si no estás satisfecho, te devolvemos el 100% de tu dinero.",
    "faq.question3": "¿Qué incluye el soporte?",
    "faq.answer3": "Todos los planes incluyen soporte por email. Los planes Pro y Enterprise incluyen soporte prioritario y consultoría.",
    "faq.question4": "¿Hay descuentos por pago anual?",
    "faq.answer4": "Sí, ofrecemos un 20% de descuento en todos los planes si pagas anualmente.",

    // Methodology Page
    "methodology.badge": "Nuestra Metodología",
    "methodology.mainTitle": "Metodología de Redactalo",
    "methodology.mainSubtitle": "El método Redactalo está diseñado para ayudar a profesionales y empresas B2B a conseguir visibilidad, autoridad y ventas creando contenido auténtico y personal para tener resultados en LinkedIn.",
    "methodology.transformation.title": "Transformación con Redactalo",
    "methodology.transformation.step1": "Situación Actual",
    "methodology.transformation.step2": "Resultados Reales",
    "methodology.transformation.bridge": "Metodología Redactalo como puente de éxito",
    "methodology.experience.title": "7 Años de Experiencia",
    "methodology.experience.p1": "Después de 7 años creando contenido en redes sociales, tanto para nosotros como para clientes, hemos decidido sintetizar todo este conocimiento en nuestro propio algoritmo para crear tu estrategia a medida según tus necesidades y objetivos.",
    "methodology.experience.p2": "Nuestra metodología está basada en los conceptos que realmente importan para tener resultados y conseguir visibilidad, autoridad y ventas.",
    "methodology.experience.imageAlt": "Equipo trabajando en estrategia",
    "methodology.howItWorks.title": "Cómo Funciona Nuestra Metodología",
    "methodology.howItWorks.subtitle": "Un proceso probado en 3 pasos para transformar tu presencia en LinkedIn",
    "methodology.step1.title": "Análisis de Objetivos",
    "methodology.step1.description": "Definimos tus metas específicas y audiencia objetivo para crear una estrategia personalizada.",
    "methodology.step2.title": "Creación de Contenido",
    "methodology.step2.description": "Desarrollamos posts auténticos que reflejan tu personalidad y expertise profesional.",
    "methodology.step3.title": "Optimización Continua",
    "methodology.step3.description": "Analizamos métricas y ajustamos la estrategia para maximizar el engagement y conversiones.",

    // Customers Page
    "customers.badge": "Clientes Satisfechos",
    "customers.title.line1": "Historias de",
    "customers.title.line2": "Éxito",
    "customers.subtitle": "Tu estrategia. Tu voz. Tus resultados. El agente IA que trabaja por ti.",
    "customers.stat1.label": "Usuarios Activos",
    "customers.stat2.label": "Uptime",
    "customers.stat3.label": "Empresas",
    "customers.customer1.name": "Alex Chen",
    "customers.customer1.role": "CEO",
    "customers.customer1.company": "NeuralTech",
    "customers.customer1.testimonial": "Esta plataforma ha revolucionado completamente nuestra forma de trabajar. La IA integrada es simplemente increíble.",
    "customers.customer2.name": "Sarah Martinez",
    "customers.customer2.role": "CTO",
    "customers.customer2.company": "QuantumFlow",
    "customers.customer2.testimonial": "La experiencia de usuario es excepcional. Hemos reducido nuestros tiempos de desarrollo en un 60%.",
    "customers.customer3.name": "David Kim",
    "customers.customer3.role": "Founder",
    "customers.customer3.company": "CyberVault",
    "customers.customer3.testimonial": "La seguridad y escalabilidad que ofrece esta solución es exactamente lo que necesitábamos para crecer.",
    "customers.metric.growth": "Crecimiento",
    "customers.metric.efficiency": "Eficiencia",
    "customers.cta.title": "¿Listo para ser el próximo caso de éxito?",
    "customers.cta.subtitle": "Únete a las empresas más innovadoras que ya están transformando su futuro con nuestra tecnología",
    "customers.cta.primary": "Comenzar Ahora",
    "customers.cta.secondary": "Ver Demo",

    // Case Studies
    "cases.title": "Casos de Éxito",
    "cases.subtitle": "Descubre cómo nuestros clientes han transformado su presencia en LinkedIn",

    // New CTA translations
    "cta.startFree": "EMPIEZA GRATIS",
    "cta.noCard": "No necesitas tarjeta",
    "cta.freeTrial": "7 días gratis",
    "cta.seeMore": "VER MÁS",

    // Social Proof Section
    "social.title": "Únete a los +100.000 creadores que usan Redactalo para crecer su audiencia",
    "social.subtitle": "Empresas y profesionales de todo el mundo confían en nosotros.",

    // Features Section
    "features.badge": "¿Por qué Redactalo?",
    "features.title": "La metodología que transforma tu LinkedIn",
    "features.subtitle":
      "Descubre por qué más de 1000 profesionales confían en nuestra metodología para hacer crecer su marca personal",
    "features.item1.title": "Nuestro algoritmo hará realidad tus objetivos",
    "features.item1.desc.point1": "Añade tus objetivos, nosotros nos encargamos del resto.",
    "features.item1.desc.point2": "+7 años de experiencia creando estrategias de contenido.",
    "features.item1.desc.point3": "Creamos contenido automatizado en base a tu estrategia.",
    "features.item1.desc.point4": "Con nuestra estrategia hemos generado +20M de impresiones en posts.",
    "features.item1.desc.point5": "Creamos una estrategia en base a tus objetivos y necesidades.",
    "features.item1.badge": "Rápido",
    "features.item2.title": "Despídete del bloqueo creativo: contenido único, creado en segundos.",
    "features.item2.desc.point1": "+300 estructuras probadas convierten tus ideas en posts personales.",
    "features.item2.desc.point2": "Comparte tu historia con nuestro agente de voz para generar posts únicos.",
    "features.item2.desc.point3": "Carga pdf’s, textos, audios u enlaces y afina tu modelo en minutos.",
    "features.item2.badge": "Efectivo",
    "features.item3.title": "Mide tu impacto, sin perderte en números",
    "features.item3.desc.point1": "Basta un vistazo para ver tu crecimiento en tiempo real",
    "features.item3.desc.point2": "Analiza y precide tus resultados a partir de tus datos",
    "features.item3.desc.point3": "Informe mensual automático con tus mejores insights",
    "features.item3.badge": "Datos",
    "features.item4.title": "Conoce los mejores creadores y posts",
    "features.item4.desc.point1": "Filtra los mejores posts de LinkedIn",
    "features.item4.desc.point2": "Sigue a tus referentes y analiza sus posts",
    "features.item4.desc.point3": "Copia el estilo de comunicación de creadores",
    "features.item4.badge": "Calidad",
    "features.item5.title": "Encuentra a clientes entre tus mayores fans",
    "features.item5.desc.point1": "Descubre quién te da más likes y comenta para convertirlos en clientes",
    "features.item5.desc.point2": "Añade cuál es tu ICP para filtrar a tus leads",
    "features.item5.desc.point3": "Filtra según el quien interactua más en el tiempo",
    "features.item5.badge": "Smart",
    "features.item6.title": "Centraliza el contenido de tu equipo",
    "features.item6.desc.point1": "Crear contenido de varias personas desde la misma cuenta",
    "features.item6.desc.point2": "Consulta las analíticas globales e individuales",
    "features.item6.desc.point3": "Sin necesidad de compartir la contraseña de LinkedIn",
    "features.item6.badge": "Confiable",

    // Stats Section
    "stats.title": "Resultados que hablan por sí solos",
    "stats.subtitle": "Estos números reflejan el impacto real de nuestra metodología en el crecimiento de marcas personales",
    "stats.item1.label": "Personas Alcanzadas",
    "stats.item1.description": "Nuestros clientes este año",
    "stats.item2.label": "Alcance Personal",
    "stats.item2.description": "Con nuestras cuentas propias",
    "stats.item3.label": "Profesionales",
    "stats.item3.description": "Confían en nuestra metodología",
    "stats.item4.label": "Años de Experiencia",
    "stats.item4.description": "Creando contenido exitoso",

    // CTA Section
    "cta.section.title": "Como las buenas ideas pueden cambiar tu vida",
    "cta.section.subtitle": "Únete a más de 1000 profesionales que ya están generando resultados con nuestra metodología",

    // Footer
    "footer.tagline": "Transformamos tu presencia en LinkedIn con contenido que genera resultados reales.",
    "footer.product": "Producto",
    "footer.resources": "Recursos",
    "footer.company": "Empresa",
    "footer.about": "Sobre Nosotros",
    "footer.contact": "Contacto",
    "footer.copyright": "© 2024 Redactalo. Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
  },
  en: {
    // Navigation
    "nav.solutions": "Solutions",
    "nav.methodologies": "Methodologies",
    "nav.resources": "Resources",
    "nav.caseStudies": "Customers",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.community": "Community",
    "nav.playbook": "Playbook",
    "nav.affiliates": "Affiliates",
    "nav.metrics": "Metrics",
    "nav.inspirations": "Inspirations",

    // Hero Section
    "hero.title": "We Create Personal Posts that Attract Clients in 5 mins",
    "hero.subtitle": "Attract Clients with your Personal Brand on LinkedIn",
    "hero.description":
      "Transform your LinkedIn presence with authentic content that generates real results. Our proven methodology helps you achieve visibility, authority and sales.",
    "hero.cta": "Get Started",
    "hero.secondary": "View Methodology",
    "hero.badge": "Methodology tested by +1000 professionals",
    "hero.slogan.1": "Create Posts that Attract Clients",
    "hero.slogan.2": "We Create Posts that Attract Clients",
    "hero.slogan.3": "We Create Posts that Attract Clients in 5 mins",
    "hero.slogan.4": "We Create Personal Posts that Attract Clients in 5 mins",
    "hero.slogan.5": "We Create your Posts to Attract Clients on LinkedIn",
    "hero.slogan.6": "Attract Clients with your Personal Brand on LinkedIn",

    // Pricing
    "pricing.title": "Plans & Pricing",
    "pricing.subtitle": "Choose the perfect plan to grow your personal brand",
    "pricing.basic": "Basic",
    "pricing.pro": "Professional",
    "pricing.enterprise": "Enterprise",
    "pricing.month": "/month",
    "pricing.getStarted": "Get Started",
    "pricing.contactUs": "Contact Us",
     //Features Pricing
    "basic.feature1": "5 personalized posts per month",
    "basic.feature2": "Content templates",
    "basic.feature3": "Basic metrics analysis",
    "basic.feature4": "Email support",
    "basic.feature5": "Community access",
    "pro.feature1": "15 personalized posts per month",
    "pro.feature2": "Personalized content strategy",
    "pro.feature3": "Advanced metrics analysis",
    "pro.feature4": "Priority support",
    "pro.feature5": "Community access",
    "pro.feature6": "Monthly consulting sessions",
    "pro.feature7": "Profile optimization",
    "enterprise.feature1": "Unlimited posts",
    "enterprise.feature2": "Complete business strategy",
    "enterprise.feature3": "Detailed analysis and reports",
    "enterprise.feature4": "24/7 dedicated support",
    "enterprise.feature5": "Team training",

         // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "We answer the most common questions about our plans",

    // Methodology Page
    "methodology.badge": "Our Methodology",
    "methodology.mainTitle": "Redactalo's Methodology",
    "methodology.mainSubtitle": "The Redactalo method is designed to help professionals and B2B companies gain visibility, authority, and sales by creating authentic and personal content to get results on LinkedIn.",
    "methodology.transformation.title": "Transformation with Redactalo",
    "methodology.transformation.step1": "Current Situation",
    "methodology.transformation.step2": "Real Results",
    "methodology.transformation.bridge": "Redactalo Methodology as a bridge to success",
    "methodology.experience.title": "7 Years of Experience",
    "methodology.experience.p1": "After 7 years of creating content on social media, both for ourselves and for clients, we have decided to synthesize all this knowledge into our own algorithm to create a tailored strategy according to your needs and objectives.",
    "methodology.experience.p2": "Our methodology is based on the concepts that truly matter to achieve results and gain visibility, authority, and sales.",
    "methodology.experience.imageAlt": "Team working on strategy",
    "methodology.howItWorks.title": "How Our Methodology Works",
    "methodology.howItWorks.subtitle": "A proven 3-step process to transform your LinkedIn presence",
    "methodology.step1.title": "Goal Analysis",
    "methodology.step1.description": "We define your specific goals and target audience to create a personalized strategy.",
    "methodology.step2.title": "Content Creation",
    "methodology.step2.description": "We develop authentic posts that reflect your personality and professional expertise.",
    "methodology.step3.title": "Continuous Optimization",
    "methodology.step3.description": "We analyze metrics and adjust the strategy to maximize engagement and conversions.",

    // Customers Page
    "customers.badge": "Satisfied Customers",
    "customers.title.line1": "Success",
    "customers.title.line2": "Stories",
    "customers.subtitle": "Your strategy. Your voice. Your results. The AI agent that works for you.",
    "customers.stat1.label": "Active Users",
    "customers.stat2.label": "Uptime",
    "customers.stat3.label": "Companies",
    "customers.customer1.name": "Alex Chen",
    "customers.customer1.role": "CEO",
    "customers.customer1.company": "NeuralTech",
    "customers.customer1.testimonial": "This platform has completely revolutionized the way we work. The integrated AI is simply incredible.",
    "customers.customer2.name": "Sarah Martinez",
    "customers.customer2.role": "CTO",
    "customers.customer2.company": "QuantumFlow",
    "customers.customer2.testimonial": "The user experience is exceptional. We have reduced our development times by 60%.",
    "customers.customer3.name": "David Kim",
    "customers.customer3.role": "Founder",
    "customers.customer3.company": "CyberVault",
    "customers.customer3.testimonial": "The security and scalability that this solution offers is exactly what we needed to grow.",
    "customers.metric.growth": "Growth",
    "customers.metric.efficiency": "Efficiency",
    "customers.cta.title": "Ready to be the next success story?",
    "customers.cta.subtitle": "Join the most innovative companies that are already transforming their future with our technology",
    "customers.cta.primary": "Get Started Now",
    "customers.cta.secondary": "View Demo",

    // Case Studies
    "cases.title": "Success Stories",
    "cases.subtitle": "Discover how our clients have transformed their LinkedIn presence",

    // New CTA translations
    "cta.startFree": "START FREE",
    "cta.noCard": "No credit card required",
    "cta.freeTrial": "7 days free",
    "cta.seeMore": "SEE MORE",

    // Social Proof Section
    "social.title": "Join 100,000+ creators who use Redactalo to grow their audience",
    "social.subtitle": "Companies and professionals from all over the world trust us.",

    // Features Section
    "features.badge": "Why Redactalo?",
    "features.title": "The methodology that transforms your LinkedIn",
    "features.subtitle": "Discover why over 1000 professionals trust our methodology to grow their personal brand",
    "features.item1.title": "Our algorithm will make your goals a reality",
    "features.item1.desc.point1": "Add your goals, we take care of the rest.",
    "features.item1.desc.point2": "+7 years of experience creating content strategies.",
    "features.item1.desc.point3": "We create automated content based on your strategy.",
    "features.item1.desc.point4": "With our strategy we have generated +20M impressions on posts.",
    "features.item1.desc.point5": "We create a strategy based on your goals and needs.",
    "features.item1.badge": "Fast",
    "features.item2.title": "Say goodbye to creative block: unique content, created in seconds.",
    "features.item2.desc.point1": "+300 proven structures turn your ideas into personal posts.",
    "features.item2.desc.point2": "Share your story with our voice agent to generate unique posts.",
    "features.item2.desc.point3": "Upload PDFs, texts, audios, or links and fine-tune your model in minutes.",
    "features.item2.badge": "Effective",
    "features.item3.title": "Measure your impact, without getting lost in numbers",
    "features.item3.desc.point1": "See your growth in real-time at a glance",
    "features.item3.desc.point2": "Analyze and predict your results from your data",
    "features.item3.desc.point3": "Automatic monthly report with your best insights",
    "features.item3.badge": "Data",
    "features.item4.title": "Discover the best creators and posts",
    "features.item4.desc.point1": "Filter the best posts on LinkedIn",
    "features.item4.desc.point2": "Follow your references and analyze their posts",
    "features.item4.desc.point3": "Copy the communication style of creators",
    "features.item4.badge": "Quality",
    "features.item5.title": "Find clients among your biggest fans",
    "features.item5.desc.point1": "Discover who likes and comments the most to turn them into clients",
    "features.item5.desc.point2": "Add your ICP to filter your leads",
    "features.item5.desc.point3": "Filter by who interacts the most over time",
    "features.item5.badge": "Smart",
    "features.item6.title": "Centralize your team's content",
    "features.item6.desc.point1": "Create content for multiple people from the same account",
    "features.item6.desc.point2": "Check global and individual analytics",
    "features.item6.desc.point3": "No need to share the LinkedIn password",
    "features.item6.badge": "Reliable",

    // Stats Section
    "stats.title": "Results that speak for themselves",
    "stats.subtitle": "These numbers reflect the real impact of our methodology on personal brand growth",
    "stats.item1.label": "People Reached",
    "stats.item1.description": "Our clients this year",
    "stats.item2.label": "Personal Reach",
    "stats.item2.description": "With our own accounts",
    "stats.item3.label": "Professionals",
    "stats.item3.description": "Trust our methodology",
    "stats.item4.label": "Years of Experience",
    "stats.item4.description": "Creating successful content",

    // CTA Section
    "cta.section.title": "How good ideas can change your life",
    "cta.section.subtitle": "Join over 1000 professionals already generating results with our methodology",

    // Footer
    "footer.tagline": "We transform your LinkedIn presence with content that generates real results.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.copyright": "© 2024 Redactalo. All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "faq.question1": "Can I change my plan at any time?",
    "faq.answer1": "Yes, you can upgrade or change your plan at any time. The changes will be applied in your next billing cycle.",
    "faq.question2": "Do you offer a money-back guarantee?",
    "faq.answer2": "We offer a 30-day guarantee. If you are not satisfied, we will refund 100% of your money.",
    "faq.question3": "What does support include?",
    "faq.answer3": "All plans include email support. The Pro and Enterprise plans include priority support and consulting.",
    "faq.question4": "Are there discounts for annual payment?",
    "faq.answer4": "Yes, we offer a 20% discount on all plans when you pay annually.",
  },

}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
        setLanguage(savedLanguage)
      }
      setIsLoaded(true)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
