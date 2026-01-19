import { Suspense } from "react";
import type { Metadata } from "next";

import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { HeroSection } from "@/src/features/home/components/hero-section";
import { FeaturedProperties } from "@/src/features/home/components/featured-properties";
import { RecentProperties } from "@/src/features/home/components/recent-properties";
import { PropertyCategories } from "@/src/features/home/components/property-categories";
import { StatsSection } from "@/src/features/home/components/stats-section";
import { AboutSection } from "@/src/features/home/components/about-section";
import { TestimonialsSection } from "@/src/features/home/components/testimonials-section";

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
