import { notFound } from "next/navigation";
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
import { PropertyDetailHero } from "@/src/features/property/components/property-detail-hero";
import { PropertyDetailSpecs } from "@/src/features/property/components/property-detail-specs";
import { PropertyDetailDescription } from "@/src/features/property/components/property-detail-description";
import { PropertyDetailContact } from "@/src/features/property/components/property-detail-contact";
import { PropertyDetailRelated } from "@/src/features/property/components/property-detail-related";
import {
  getPropertyById,
  getRelatedProperties,
} from "@/src/lib/mock-data/properties";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return {
      title: "Imóvel não encontrado | NextHome",
    };
  }

  return {
    title: `${property.title} | NextHome`,
    description: `${property.title} em ${property.address}, ${property.city} - ${property.state}. ${property.description || ""}`,
    openGraph: {
      title: property.title,
      description: property.description || `${property.title} em ${property.city}`,
      type: "website",
    },
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const relatedProperties = getRelatedProperties(id, property.type, 3);

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
                <BreadcrumbLink asChild>
                  <Link href="/imoveis">Imóveis</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{property.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-12">
            <PropertyDetailHero property={property} />
          </div>

          <div className="mb-12 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <PropertyDetailSpecs property={property} />
              <PropertyDetailDescription property={property} />
            </div>
            <div className="lg:col-span-1">
              <PropertyDetailContact />
            </div>
          </div>
        </div>

        <PropertyDetailRelated properties={relatedProperties} />
      </main>
      <Footer />
    </>
  );
}
