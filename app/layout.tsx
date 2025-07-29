import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import { ThemeProvider } from "@/components/theme-provider"
import { CTASection } from "@/components/cta-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redactalo - Crea Posts que Atraen Clientes",
  description:
    "Creamos Posts Personales que Atraen Clientes en LinkedIn en menos de 5 minutos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          {children}
          <CTASection />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
