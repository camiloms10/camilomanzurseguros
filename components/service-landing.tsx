"use client";

import type { ComponentType, FormEvent } from "react";
import { useState } from "react";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  Building2Icon,
  CarFrontIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FacebookIcon,
  HeartPulseIcon,
  HelpingHandIcon,
  LifeBuoyIcon,
  MessageCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WalletCardsIcon,
} from "@/components/icons";
import type { ServiceIconKey, ServicePageConfig } from "@/lib/service-pages";
import { formOptions, insurerCount, siteConfig, trustLogos } from "@/lib/site-data";
import { trackLead } from "@/lib/tracking";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const serviceIcons: Record<ServiceIconKey, ComponentType<{ className?: string }>> = {
  badgeCheck: BadgeCheckIcon,
  building2: Building2Icon,
  carFront: CarFrontIcon,
  heartPulse: HeartPulseIcon,
  helpingHand: HelpingHandIcon,
  lifeBuoy: LifeBuoyIcon,
  shieldCheck: ShieldCheckIcon,
  sparkles: SparklesIcon,
  walletCards: WalletCardsIcon,
};

function buildWhatsappHref(message: string) {
  return `https://wa.me/52${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}

function ServiceBrandMarkHeader() {
  const [logoMissing, setLogoMissing] = useState(false);

  return (
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      {!logoMissing ? (
        <img
          src={siteConfig.logoPath}
          alt={siteConfig.name}
          className="h-12 w-auto flex-none object-contain sm:h-14"
          onError={() => setLogoMissing(true)}
        />
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-10 flex-none items-center justify-center sm:h-12 sm:w-11">
            <svg viewBox="0 0 86 120" className="h-11 w-10 sm:h-12 sm:w-11" fill="none" aria-hidden="true">
              <path
                d="M24 18c15-6 32-8 53-7-22 4-37 10-47 18v46c0 20 6 33 16 43-7-1-16-7-24-18C12 89 8 75 8 57V18c4 1 10 1 16 0Z"
                fill="#FFFFFF"
              />
              <path
                d="M41 24c14 0 27 2 40 7v34c0 19-8 35-24 48l-11-8c13-10 20-23 20-39V32c-8-3-17-5-25-8Z"
                fill="#B6BED2"
              />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="flex flex-col leading-none sm:flex-row sm:items-start sm:gap-3">
              <span className="truncate text-[1.55rem] font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                Camilo Manzur
              </span>
              <div className="sm:mt-[0.35rem]">
                <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/90 sm:mt-0 sm:text-[0.78rem]">
                  Agente de Seguros
                </span>
                <a
                  href="/#ubicacion"
                  className="mt-1 block text-[0.58rem] font-medium tracking-[0.1em] text-white/70 transition hover:text-white/90 sm:text-[0.62rem]"
                >
                  {siteConfig.officeLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="min-w-0">
        <div className="flex flex-col leading-none sm:flex-row sm:items-start sm:gap-3">
          <span className="truncate text-[1.55rem] font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
            Camilo Manzur
          </span>
          <div className="sm:mt-[0.35rem]">
            <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/90 sm:mt-0 sm:text-[0.78rem]">
              Agente de Seguros
            </span>
            <a
              href="/#ubicacion"
              className="mt-1 block text-[0.58rem] font-medium tracking-[0.1em] text-white/70 transition hover:text-white/90 sm:text-[0.62rem]"
            >
              {siteConfig.officeLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceLandingPage({ service }: { service: ServicePageConfig }) {
  const [faqIndex, setFaqIndex] = useState<number | null>(0);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const whatsappHref = buildWhatsappHref(service.whatsappMessage);
  const phoneHref = `tel:${siteConfig.phone}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_subject", `Nuevo lead de ${service.title} desde Camilo Manzur Seguros`);
    formData.set("_source", `Landing ${service.title}`);

    setFormState("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/camilo@symseguros.mx", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("FormSubmit rejected the request.");
      }

      trackLead({
        channel: "form",
        location: `${service.slug}_form`,
        insuranceType: service.title,
      });

      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <div className="min-h-screen mobile-safe xl:pb-0">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#172448] backdrop-blur-xl">
        <div className="container-shell flex h-[4.7rem] items-center justify-between gap-4 sm:h-[5.35rem]">
          <a href="/" className="flex min-w-0 items-center">
            <ServiceBrandMarkHeader />
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="button-whatsapp hidden lg:inline-flex"
            onClick={() =>
              trackLead({
                channel: "whatsapp",
                location: `${service.slug}_header`,
                insuranceType: service.title,
              })
            }
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-6 sm:pt-10">
          <div className="container-shell">
            <div className="grid items-start gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
              <div>
                <span className="eyebrow">{service.eyebrow}</span>
                <h1 className="type-display mt-5 max-w-4xl text-[2.65rem] leading-[0.96] sm:mt-6 sm:text-6xl lg:text-7xl">
                  {service.heroTitle}
                </h1>
                <p className="type-body mt-5 max-w-3xl sm:mt-6 sm:text-xl sm:leading-8">
                  {service.heroDescription}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="button-whatsapp w-full sm:w-auto"
                    onClick={() =>
                      trackLead({
                        channel: "whatsapp",
                        location: `${service.slug}_hero`,
                        insuranceType: service.title,
                      })
                    }
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a href="#formulario" className="button-secondary w-full gap-2 sm:w-auto">
                    Dejar mis datos
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
                  <div className="rounded-3xl border border-white/60 bg-white/85 p-4 shadow-card backdrop-blur sm:p-5">
                    <p className="type-subheading text-base text-brand-navy sm:text-lg">Respuesta rápida</p>
                    <p className="mt-1.5 text-sm leading-6">La vía principal para cotizar es WhatsApp.</p>
                  </div>
                  <div className="rounded-3xl border border-white/60 bg-white/85 p-4 shadow-card backdrop-blur sm:p-5">
                    <p className="type-subheading text-base text-brand-navy sm:text-lg">22 años</p>
                    <p className="mt-1.5 text-sm leading-6">Acompañando a familias y empresas con asesoría real.</p>
                  </div>
                  <div className="rounded-3xl border border-white/60 bg-white/85 p-4 shadow-card backdrop-blur sm:p-5">
                    <p className="type-subheading text-base text-brand-navy sm:text-lg">{insurerCount} aseguradoras</p>
                    <p className="mt-1.5 text-sm leading-6">Comparación profesional entre cobertura, servicio y costo.</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel overflow-hidden p-5 sm:p-8">
                <div className="rounded-[28px] bg-hero-radial p-5 shadow-soft sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy sm:text-sm">
                    Lo que obtienes
                  </p>
                  <div className="mt-5 space-y-3 sm:mt-6">
                    {service.heroHighlights.map((item) => {
                      const Icon = serviceIcons[item.icon];
                      return (
                        <div
                          key={item.title}
                          className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/85 p-3.5 sm:gap-4 sm:p-4"
                        >
                          <div className="mt-0.5 rounded-2xl bg-brand-sky p-2.5 text-brand-navy sm:mt-1 sm:p-3">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </div>
                          <div>
                            <h2 className="type-subheading text-base">{item.title}</h2>
                            <p className="mt-1 text-sm leading-6">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 rounded-[28px] bg-brand-navy p-5 text-white shadow-soft sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-sm">
                    Siguiente paso
                  </p>
                  <p className="type-subheading mt-2 text-lg text-white sm:text-xl">
                    Si quieres avanzar rápido, empieza por WhatsApp y te orientamos desde el primer mensaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-gap">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl text-left sm:text-center">
              <span className="eyebrow">Por qué esta landing</span>
              <h2 className="type-heading mt-5 text-3xl leading-tight sm:mt-6 sm:text-4xl">
                Diseñada para que pases de búsqueda a cotización con menos fricción
              </h2>
              <p className="type-body mt-3 sm:mt-4 sm:text-lg">
                Encontrar claridad rápido importa. Por eso dejamos el camino más corto
                hacia WhatsApp y una alternativa breve para dejar tus datos.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {service.valueProps.map((item) => {
                const Icon = serviceIcons[item.icon];
                return (
                  <div key={item.title} className="glass-panel p-5 sm:p-7">
                    <div className="inline-flex rounded-3xl bg-brand-sky p-3 text-brand-navy sm:p-4">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="type-subheading mt-5 text-xl">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-7">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-gap pt-0">
          <div className="container-shell">
            <div className="glass-panel overflow-hidden p-5 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10">
                <div>
                  <span className="eyebrow">Respaldo</span>
                  <h2 className="type-heading mt-5 text-3xl sm:mt-6 sm:text-4xl">
                    Comparamos opciones con criterio, no con prisa
                  </h2>
                  <p className="type-body mt-3 sm:mt-4 sm:text-lg">
                    No se trata solo de conseguir una cotización. Se trata de ayudarte a
                    elegir mejor cobertura, mejor servicio y una ruta de decisión más clara.
                  </p>
                </div>

                <div className="-mx-1 grid grid-cols-2 gap-3 sm:mx-0 sm:grid-cols-3 sm:gap-4">
                  {trustLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex min-h-24 items-center justify-center rounded-[22px] border border-brand-navy/8 bg-white px-4 py-5 text-center shadow-sm sm:min-h-28 sm:rounded-[24px] sm:px-5 sm:py-6"
                    >
                      {logo.src ? (
                        <div className="flex h-14 w-full items-center justify-center sm:h-16">
                          <img
                            src={logo.src}
                            alt={`Logo de ${logo.name}`}
                            className={logo.logoClassName ?? "h-8 w-auto object-contain"}
                            style={{
                              width: logo.logoWidth,
                              height: logo.logoHeight,
                            }}
                          />
                        </div>
                      ) : (
                        <span className="text-sm font-semibold text-brand-navy sm:text-base">{logo.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-gap pt-0">
          <div className="container-shell">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div>
                <span className="eyebrow">Preguntas frecuentes</span>
                <h2 className="type-heading mt-5 text-3xl sm:mt-6 sm:text-4xl">
                  Dudas comunes antes de cotizar
                </h2>
                <p className="type-body mt-3 sm:mt-4 sm:text-lg">
                  Si prefieres resolverlo en una conversación breve, WhatsApp sigue siendo la vía más rápida.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="button-whatsapp mt-6 inline-flex w-full sm:mt-8 sm:w-auto"
                  onClick={() =>
                    trackLead({
                      channel: "whatsapp",
                      location: `${service.slug}_faq`,
                      insuranceType: service.title,
                    })
                  }
                >
                  Cotizar por WhatsApp
                </a>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {service.faqs.map((faq, index) => {
                  const isActive = faqIndex === index;

                  return (
                    <div
                      key={faq.question}
                      className="rounded-[24px] border border-brand-navy/10 bg-white p-4 shadow-card sm:p-6"
                    >
                      <button
                        type="button"
                        className="flex min-h-12 w-full items-center justify-between gap-4 text-left"
                        onClick={() => setFaqIndex(isActive ? null : index)}
                      >
                        <span className="type-subheading pr-2 text-base sm:text-lg">{faq.question}</span>
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none text-brand-navy transition ${isActive ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isActive ? <p className="mt-3 text-sm leading-7 sm:mt-4">{faq.answer}</p> : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-gap pt-0" id="formulario">
          <div className="container-shell">
            <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
              <div className="rounded-[32px] bg-brand-navy p-5 text-white shadow-soft sm:p-10">
                <span className="eyebrow border-white/15 bg-white/10 text-white">Contacto</span>
                <h2 className="type-heading mt-5 text-3xl text-white sm:mt-6 sm:text-4xl">
                  Empieza tu cotización hoy
                </h2>
                <p className="mt-3 text-base leading-7 text-white/76 sm:mt-4 sm:text-lg sm:leading-8">
                  Si ya sabes que quieres cotizar {service.title.toLowerCase()}, escríbenos por WhatsApp.
                  Si prefieres, deja tus datos y te contactamos.
                </p>

                <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-16 items-center justify-between gap-4 rounded-[24px] border border-white/12 bg-white/10 px-4 py-4 transition hover:bg-white/15 sm:px-5"
                    onClick={() =>
                      trackLead({
                        channel: "whatsapp",
                        location: `${service.slug}_contact_card`,
                        insuranceType: service.title,
                      })
                    }
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="rounded-2xl bg-white/14 p-3">
                        <MessageCircleIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/82">WhatsApp</p>
                        <p className="text-sm font-semibold text-white sm:text-base">Respuesta rápida para cotizar</p>
                      </div>
                    </div>
                    <ChevronRightIcon className="h-5 w-5" />
                  </a>

                  <a
                    href={phoneHref}
                    className="block rounded-[24px] border border-white/12 bg-white/10 px-4 py-4 transition hover:bg-white/15 sm:px-5"
                    onClick={() =>
                      trackLead({
                        channel: "phone",
                        location: `${service.slug}_contact_phone`,
                        insuranceType: service.title,
                      })
                    }
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="rounded-2xl bg-white/14 p-3">
                        <PhoneIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-white/82">Teléfono</p>
                        <p className="font-semibold text-white">{siteConfig.phone}</p>
                      </div>
                    </div>
                  </a>

                  <div className="rounded-[24px] border border-white/12 bg-white/10 px-4 py-4 sm:px-5">
                    <p className="text-sm text-white/82">Cobertura</p>
                    <p className="mt-1 font-semibold text-white">Atención en todo México desde Tampico, Tamaulipas</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-5 sm:p-10">
                <div className="max-w-2xl">
                  <h3 className="type-heading text-2xl">Dejar mis datos</h3>
                  <p className="mt-3 text-sm leading-7">
                    Déjanos tu nombre, teléfono y el tipo de seguro. Te contactamos para ayudarte a cotizar sin compromiso.
                  </p>
                </div>

                <form
                  action="https://formsubmit.co/camilo@symseguros.mx"
                  method="POST"
                  className="mt-6 grid gap-4 sm:mt-8 sm:gap-5"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_subject" value={`Nuevo lead desde ${service.title}`} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_source" value={`Landing ${service.title}`} />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-ink">
                      Nombre
                      <input
                        type="text"
                        name="nombre"
                        required
                        className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-red"
                        placeholder="Tu nombre completo"
                      />
                    </label>

                    <label className="grid gap-2 text-sm font-medium text-ink">
                      Teléfono
                      <input
                        type="tel"
                        name="telefono"
                        required
                        className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-red"
                        placeholder="Tu número"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm font-medium text-ink">
                    Tipo de seguro
                    <select
                      name="tipo_de_seguro"
                      required
                      className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-red"
                      defaultValue={service.title}
                    >
                      <option value={service.title}>{service.title}</option>
                      {formOptions
                        .filter((option) => option !== service.title)
                        .map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                    </select>
                  </label>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-xs leading-6">
                      Tus datos se usan únicamente para contactarte sobre tu cotización.
                    </p>
                    <button
                      type="submit"
                      className="button-primary w-full sm:w-auto"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? "Enviando..." : "Dejar mis datos"}
                    </button>
                  </div>

                  {formState === "success" ? (
                    <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">
                      Tu solicitud fue enviada correctamente. Te contactaremos pronto para orientarte.
                    </div>
                  ) : null}

                  {formState === "error" ? (
                    <div className="rounded-[24px] border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-900">
                      No pudimos enviar tu solicitud en este momento. Intenta de nuevo o escríbenos por WhatsApp.
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-navy/8 bg-white/90 py-10">
        <div className="container-shell bottom-safe flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-semibold text-brand-navy">{siteConfig.name}</p>
            <p className="mt-2 max-w-xl text-sm leading-7">
              Asesoría profesional en seguros con enfoque humano, comparación entre
              aseguradoras y seguimiento personalizado en todo México.
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            <a href={phoneHref} className="transition hover:text-brand-navy">
              Teléfono: {siteConfig.phone}
            </a>
            <p>Ubicación: {siteConfig.city}</p>
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-brand-navy">
              Correo: {siteConfig.email}
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-brand-navy"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 sm:bottom-5 sm:right-5 xl:hidden">
        <a
          href="#formulario"
          aria-label="Ir a cotizar"
          className="inline-flex min-h-14 min-w-[9.5rem] items-center justify-center rounded-full border border-brand-navy/12 bg-white px-5 py-3 text-sm font-semibold text-brand-navy shadow-soft transition hover:-translate-y-0.5 hover:border-brand-navy/20"
        >
          Cotizar
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir WhatsApp"
          className="inline-flex min-h-14 min-w-[9.5rem] items-center justify-center gap-2 rounded-full bg-[#17c45b] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#11af50]"
          onClick={() =>
            trackLead({
              channel: "whatsapp",
              location: `${service.slug}_floating`,
              insuranceType: service.title,
            })
          }
        >
          <MessageCircleIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
