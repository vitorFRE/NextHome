import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProperties } from "@/src/lib/mock-data/properties";
import { PropertyCard } from "@/src/features/property/components/property-card";
import { Button } from "@/src/components/ui/button";

export function FeaturedProperties() {
  const featuredProperties = getFeaturedProperties().slice(0, 3);

  return (
    <section className="py-20" aria-labelledby="featured-properties-heading">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2
              id="featured-properties-heading"
              className="text-3xl font-bold md:text-4xl lg:text-5xl"
            >
              Imóveis em Destaque
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Propriedades selecionadas especialmente para você
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex rounded-xl">
            <Link href="/imoveis">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {featuredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property: typeof featuredProperties[0]) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              Nenhum imóvel em destaque no momento.
            </p>
          </div>
        )}

        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" asChild className="rounded-xl">
            <Link href="/imoveis">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
