import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export const metadata: Metadata = {
  title: "Camilo Manzur Seguros | Cotiza tu seguro con asesoría personalizada",
  description: siteConfig.description,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: siteConfig.logoPath,
    shortcut: siteConfig.logoPath,
    apple: siteConfig.logoPath,
  },
  alternates: {
    canonical: "/",
  },
  verification: googleVerification
    ? {
        google: googleVerification,
      }
    : undefined,
  keywords: [
    "seguros en Mexico",
    "agente de seguros",
    "cotizar seguro por WhatsApp",
    "seguro de auto",
    "gastos medicos",
    "Camilo Manzur Seguros",
  ],
  openGraph: {
    title: "Camilo Manzur Seguros",
    description: siteConfig.description,
    type: "website",
    locale: "es_MX",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Camilo Manzur Seguros",
    description: siteConfig.description,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  telephone: `+52${siteConfig.phone}`,
  email: siteConfig.email,
  areaServed: "MX",
  image: `${siteUrl}${siteConfig.logoPath}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tampico",
    addressRegion: "Tamaulipas",
    addressCountry: "MX",
  },
  sameAs: [siteConfig.facebookUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>
        {googleTagId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${googleTagId}');
                ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
              `}
            </Script>
          </>
        ) : null}
        <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        {children}
      </body>
    </html>
  );
}
