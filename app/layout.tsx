import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Camilo Manzur Seguros | Cotiza tu seguro con asesoría personalizada",
  description: siteConfig.description,
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Camilo Manzur Seguros",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
