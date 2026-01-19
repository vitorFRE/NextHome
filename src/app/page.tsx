import { Suspense } from "react";
import type { Metadata } from "next";

import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { HeroSection } from "@/src/components/home/hero-section";
import { FeaturedProperties } from "@/src/components/home/featured-properties";
import { RecentProperties } from "@/src/components/home/recent-properties";
import { PropertyCategories } from "@/src/components/home/property-categories";
import { StatsSection } from "@/src/components/home/stats-section";
import { AboutSection } from "@/src/components/home/about-section";
import { TestimonialsSection } from "@/src/components/home/testimonials-section";

export const metadata: Metadata = {
  title: "NextHome - Encontre o Imóvel dos Seus Sonhos",
  description:
    "Encontre casas, apartamentos, terrenos e imóveis comerciais para venda e locação. Mais de 1.250 imóveis vendidos com sucesso. A melhor imobiliária para você.",
  openGraph: {
    title: "NextHome - Encontre o Imóvel dos Seus Sonhos",
    description:
      "Encontre casas, apartamentos, terrenos e imóveis comerciais para venda e locação.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <Suspense fallback={<div className="py-16 text-center">Carregando...</div>}>
          <FeaturedProperties />
        </Suspense>
        <PropertyCategories />
        <Suspense fallback={<div className="py-16 text-center">Carregando...</div>}>
          <RecentProperties />
        </Suspense>
        <StatsSection />
        <AboutSection />
        <Suspense fallback={<div className="py-16 text-center">Carregando...</div>}>
          <TestimonialsSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
