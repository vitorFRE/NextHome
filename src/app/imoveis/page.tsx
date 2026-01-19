import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { PropertiesFilters } from "@/src/features/property/components/properties-filters";
import { PropertiesGrid } from "@/src/features/property/components/properties-grid";
import { getProperties } from "@/src/lib/mock-data/properties";

interface PageProps {
  searchParams: Promise<{ tipo?: string }>;
}

const propertyTypeTitles: Record<string, string> = {
  casa: "Casas",
  apartamento: "Apartamentos",
  terreno: "Terrenos",
  comercial: "Imóveis Comerciais",
};

function getPageTitle(tipo?: string): string {
  if (!tipo) {
    return "Todos os Imóveis";
  }
  return propertyTypeTitles[tipo] || "Todos os Imóveis";
}

function getMetadataTitle(tipo?: string): string {
  const title = getPageTitle(tipo);
  return `${title} | NextHome`;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { tipo } = await searchParams ?? {};

  return {
    title: getMetadataTitle(tipo),
    description:
      "Encontre casas, apartamentos, terrenos e imóveis comerciais para venda e locação. Explore nosso catálogo completo de propriedades.",
  };
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const { tipo } = await searchParams ?? {};
  const properties = getProperties(tipo);
  const pageTitle = getPageTitle(tipo);

  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Imóveis</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {pageTitle}
            </h1>
            <PropertiesFilters currentTipo={tipo} />
          </div>

          <PropertiesGrid properties={properties} />
        </div>
      </main>
      <Footer />
    </>
  );
}
