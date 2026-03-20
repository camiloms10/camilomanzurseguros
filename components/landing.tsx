"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MenuIcon,
  MessageCircleIcon,
  PhoneIcon,
  ShieldIcon,
  XIcon,
} from "@/components/icons";
import {
  benefits,
  faqs,
  formOptions,
  heroHighlights,
  insuranceTypes,
  navigation,
  siteConfig,
  stats,
  trustLogos,
} from "@/lib/site-data";

const whatsappHref = `https://wa.me/52${siteConfig.phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-left sm:text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-semibold leading-tight sm:mt-6 sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-7 sm:mt-4 sm:text-lg">{description}</p>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/82 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold text-white shadow-card sm:h-12 sm:w-12">
            CMS
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">Camilo Manzur Seguros</p>
            <p className="truncate text-[11px] text-slate sm:text-xs">Placeholder de logo</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate transition hover:text-brand-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="button-primary">
            Cotizar ahora
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand-navy/8 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200/70 px-4 py-3 text-sm font-medium text-slate"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary w-full"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-6 sm:pt-10">
      <div className="container-shell">
        <div className="grid items-center gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="animate-fade-up">
            <span className="eyebrow">Asesoría en seguros en todo México</span>
            <h1 className="mt-5 max-w-3xl text-[2.65rem] leading-[0.96] sm:mt-6 sm:text-6xl lg:text-7xl">
              22 años protegiendo{" "}
              <span className="text-brand-red">lo que más importa</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 sm:mt-6 sm:text-xl sm:leading-8">
              Te ayudamos a encontrar el seguro ideal entre más de 14 aseguradoras
              con atención personalizada, claridad y seguimiento durante todo el
              proceso.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-primary w-full gap-2 sm:w-auto"
              >
                Cotizar por WhatsApp
                <MessageCircleIcon className="h-4 w-4" />
              </a>
              <a href="#contacto" className="button-secondary w-full gap-2 sm:w-auto">
                Solicitar asesoría
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-brand-red/12 bg-white/75 px-4 py-3 text-sm text-brand-navy shadow-sm sm:hidden">
              <MessageCircleIcon className="h-4 w-4 flex-none text-brand-red" />
              <p className="text-sm leading-6 text-brand-navy">
                La forma más rápida de cotizar es por WhatsApp.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/60 bg-white/85 p-4 shadow-card backdrop-blur sm:p-5"
                >
                  <p className="text-base font-semibold text-brand-navy sm:text-lg">{item.value}</p>
                  <p className="mt-1.5 text-sm leading-6 sm:mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up lg:pl-6">
            <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full bg-brand-red/10 blur-2xl sm:block" />
            <div className="glass-panel relative overflow-hidden p-4 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-navy to-brand-red" />
              <div className="grid gap-4 sm:gap-5">
                <div className="rounded-[28px] bg-hero-radial p-5 shadow-soft sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red sm:text-sm">
                        Diagnóstico rápido
                      </p>
                      <h2 className="mt-3 text-xl font-semibold leading-tight sm:text-2xl">
                        Cotiza con el respaldo de un agente que compara por ti
                      </h2>
                    </div>
                    <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white sm:flex">
                      <ShieldIcon className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 sm:mt-6">
                    {heroHighlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="flex items-start gap-3 rounded-2xl border border-white/70 bg-white/85 p-3.5 sm:gap-4 sm:p-4"
                        >
                          <div className="mt-0.5 rounded-2xl bg-brand-sky p-2.5 text-brand-navy sm:mt-1 sm:p-3">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold">{item.title}</h3>
                            <p className="mt-1 text-sm leading-6">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 rounded-[28px] bg-brand-navy p-5 text-white shadow-soft sm:grid-cols-[1fr_auto] sm:items-center sm:p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-sm">
                      Contacto directo
                    </p>
                    <p className="mt-2 text-lg font-semibold sm:text-xl">
                      Habla con Camilo y recibe orientación clara desde el primer mensaje.
                    </p>
                  </div>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky"
                  >
                    Escribir ahora
                    <ChevronRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="beneficios" className="section-gap">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Beneficios"
          title="Un servicio pensado para darte confianza desde el primer contacto"
          description="La asesoría se centra en ayudarte a decidir con claridad, comparar bien y contar con acompañamiento humano en cada paso."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="glass-panel group p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="inline-flex rounded-3xl bg-brand-sky p-3 text-brand-navy transition group-hover:bg-brand-red group-hover:text-white sm:p-4">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-5 text-xl">{benefit.title}</h3>
                <p className="mt-2.5 text-sm leading-7">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InsuranceGrid() {
  return (
    <section id="seguros" className="section-gap pt-0">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Seguros"
          title="Coberturas para cada etapa, patrimonio y necesidad"
          description="Desde seguros personales hasta soluciones empresariales, aquí encuentras acompañamiento para elegir con criterio y sin presión."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {insuranceTypes.map((insurance) => {
            const Icon = insurance.icon;

            return (
              <article
                key={insurance.title}
                className="group flex h-full flex-col rounded-[28px] border border-brand-navy/10 bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-brand-red/25 hover:shadow-soft sm:p-7"
              >
                <div className="inline-flex w-fit rounded-3xl bg-brand-navy p-3 text-white transition group-hover:bg-brand-red sm:p-4">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-5 text-xl sm:text-2xl">{insurance.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-7">{insurance.description}</p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-red transition group-hover:gap-3 sm:mt-6"
                >
                  Cotizar
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section-gap pt-0">
      <div className="container-shell">
        <div className="glass-panel overflow-hidden p-5 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
            <div>
              <span className="eyebrow">Confianza que se siente</span>
              <h2 className="mt-5 text-3xl sm:mt-6 sm:text-4xl">
                Más de 22 años de experiencia comparando opciones con criterio
              </h2>
              <p className="mt-3 text-base leading-7 sm:mt-4 sm:text-lg">
                Cotizamos en más de 14 aseguradoras para ayudarte a encontrar la
                combinación correcta entre cobertura, servicio y precio. Miles de
                clientes han recibido asesoría con atención cercana y profesional.
              </p>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                <div className="rounded-3xl bg-brand-navy p-4 text-white sm:p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                    Cobertura nacional
                  </p>
                  <p className="mt-2 text-lg font-semibold sm:text-xl">
                    Atención para personas, familias y empresas en todo México.
                  </p>
                </div>
                <div className="rounded-3xl border border-brand-navy/10 bg-mist p-4 sm:p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-brand-red">
                    Proceso claro
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-navy sm:text-xl">
                    Comparación, orientación y seguimiento en renovaciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="-mx-1 grid grid-cols-2 gap-3 sm:mx-0 sm:grid-cols-3 sm:gap-4">
              {trustLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex min-h-20 items-center justify-center rounded-[22px] border border-brand-navy/8 bg-white px-3 py-4 text-center text-xs font-semibold text-brand-navy shadow-sm sm:min-h-24 sm:rounded-[24px] sm:px-4 sm:py-5 sm:text-sm"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonalSection() {
  return (
    <section className="section-gap pt-0">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">
          <div className="relative">
            <div className="absolute inset-x-8 inset-y-10 rounded-[36px] bg-brand-red/10 blur-3xl" />
            <div className="glass-panel relative flex min-h-[320px] items-end overflow-hidden p-5 sm:min-h-[420px] sm:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(11,31,58,0.92),rgba(11,31,58,0.62),rgba(214,45,50,0.28))]" />
              <div className="relative z-10 rounded-[26px] border border-white/20 bg-white/10 p-5 text-white backdrop-blur sm:rounded-[30px] sm:p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-white/70">
                  Foto placeholder
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl">Camilo Manzur</h3>
                <p className="mt-3 max-w-sm text-white/80">
                  Agente de seguros con más de 22 años ayudando a familias y empresas
                  a proteger su patrimonio.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Asesoría humana</span>
            <h2 className="mt-5 text-3xl sm:mt-6 sm:text-4xl">
              Una relación de confianza, no solo una cotización
            </h2>
            <p className="mt-3 text-base leading-7 sm:mt-4 sm:text-lg sm:leading-8">
              El enfoque de Camilo Manzur Seguros es acompañarte con claridad y
              cercanía para que tomes una decisión bien informada. Aquí no se trata
              de ofrecerte una póliza al azar, sino de entender qué quieres proteger
              y ayudarte a elegir la cobertura adecuada.
            </p>
            <p className="mt-3 text-base leading-7 sm:mt-4 sm:text-lg sm:leading-8">
              Esa combinación de experiencia, seguimiento y trato personalizado es
              la razón por la que tantos clientes vuelven para renovar, ajustar o
              ampliar su protección con el tiempo.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-primary w-full sm:w-auto"
              >
                Hablar con Camilo
              </a>
              <a href="#contacto" className="button-secondary w-full sm:w-auto">
                Dejar mis datos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="section-gap pt-0">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="mt-5 text-3xl sm:mt-6 sm:text-4xl">
              Respuestas claras para decidir con más confianza
            </h2>
            <p className="mt-3 text-base leading-7 sm:mt-4 sm:text-lg">
              Si prefieres resolverlo en una conversación rápida, WhatsApp sigue
              siendo la vía más directa para empezar tu cotización.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="button-primary mt-6 inline-flex w-full sm:mt-8 sm:w-auto"
            >
              Resolver por WhatsApp
            </a>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isActive = active === index;

              return (
                <article
                  key={faq.question}
                  className="rounded-[24px] border border-brand-navy/10 bg-white p-4 shadow-card sm:p-6"
                >
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between gap-4 text-left"
                    onClick={() => setActive(isActive ? null : index)}
                  >
                    <span className="pr-2 text-base font-semibold text-ink sm:text-lg">{faq.question}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 flex-none text-brand-red transition ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isActive ? <p className="mt-3 text-sm leading-7 sm:mt-4">{faq.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="section-gap pt-0">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          <div className="rounded-[32px] bg-brand-navy p-5 text-white shadow-soft sm:p-10">
            <span className="eyebrow border-white/15 bg-white/10 text-white">Contacto</span>
            <h2 className="mt-5 text-3xl text-white sm:mt-6 sm:text-4xl">
              Tu siguiente paso puede empezar hoy
            </h2>
            <p className="mt-3 text-base leading-7 text-white/76 sm:mt-4 sm:text-lg sm:leading-8">
              Si ya sabes qué quieres cotizar, escríbenos por WhatsApp. Si prefieres,
              también puedes dejar tus datos y te contactaremos para orientarte.
            </p>

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 items-center justify-between gap-4 rounded-[24px] border border-white/12 bg-white/10 px-4 py-4 transition hover:bg-white/15 sm:px-5"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <MessageCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">WhatsApp</p>
                    <p className="text-sm font-semibold sm:text-base">Respuesta rápida para cotizar</p>
                  </div>
                </div>
                <ChevronRightIcon className="h-5 w-5" />
              </a>

              <div className="rounded-[24px] border border-white/12 bg-white/10 px-4 py-4 sm:px-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Teléfono</p>
                    <p className="font-semibold">{siteConfig.phone}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/12 bg-white/10 px-4 py-4 sm:px-5">
                <p className="text-sm text-white/70">Cobertura</p>
                <p className="mt-1 font-semibold">Atención en todo México desde Tampico, Tamaulipas</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 sm:p-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl">Solicitar asesoría</h3>
              <p className="mt-3 text-sm leading-7">
                Formulario conectado a FormSubmit. Puedes cambiar este destino más
                adelante por tu CRM o servicio de email preferido sin tocar el diseño.
              </p>
            </div>

            <form
              action="https://formsubmit.co/camilo@symseguros.mx"
              method="POST"
              className="mt-6 grid gap-4 sm:mt-8 sm:gap-5"
            >
              <input type="hidden" name="_subject" value="Nuevo lead desde Camilo Manzur Seguros" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

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

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-ink">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-red"
                    placeholder="tu@email.com"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-ink">
                  Tipo de seguro
                  <select
                    name="tipo_de_seguro"
                    required
                    className="min-h-12 rounded-2xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-red"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {formOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-ink">
                Mensaje
                <textarea
                  name="mensaje"
                  rows={5}
                  className="rounded-3xl border border-brand-navy/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-red"
                  placeholder="Cuéntanos qué necesitas proteger o qué tipo de cobertura estás buscando."
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-6">
                  Al enviar tus datos aceptas ser contactado para recibir asesoría
                  sobre seguros. Puedes reemplazar este flujo por tu CRM cuando lo
                  necesites.
                </p>
                <button type="submit" className="button-primary w-full sm:w-auto">
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-brand-navy/8 bg-white/90 py-10">
      <div className="container-shell bottom-safe flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-brand-navy">Camilo Manzur Seguros</p>
          <p className="mt-2 max-w-xl text-sm leading-7">
            Asesoría profesional en seguros con enfoque humano, comparación entre
            aseguradoras y seguimiento personalizado en todo México.
          </p>
        </div>

        <div className="grid gap-2 text-sm">
          <a href={`tel:${siteConfig.phone}`} className="transition hover:text-brand-red">
            Teléfono: {siteConfig.phone}
          </a>
          <p>Ubicación: {siteConfig.city}</p>
          <a href={`mailto:${siteConfig.email}`} className="transition hover:text-brand-red">
            Correo: {siteConfig.email}
          </a>
          <p className="text-xs text-slate">
            Información de carácter informativo. Las coberturas y condiciones dependen
            de cada aseguradora y del perfil de contratación.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-24 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#17c45b] px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#11af50] sm:bottom-5 sm:right-5 sm:px-5"
    >
      <MessageCircleIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-navy/10 bg-white/96 px-4 pb-[calc(0.9rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_rgba(7,17,31,0.08)] backdrop-blur xl:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-[1.5fr_1fr] gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="button-primary gap-2"
        >
          <MessageCircleIcon className="h-4 w-4" />
          WhatsApp
        </a>
        <a href="#contacto" className="button-secondary">
          Formulario
        </a>
      </div>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen mobile-safe xl:pb-0">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <InsuranceGrid />
        <TrustSection />
        <PersonalSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <MobileStickyBar />
    </div>
  );
}
