import type { Property } from "@/src/types/property";
import { PropertyCard } from "./property-card";

interface PropertyDetailRelatedProps {
  properties: Property[];
}

export function PropertyDetailRelated({
  properties,
}: PropertyDetailRelatedProps) {
  if (properties.length === 0) {
    return null;
  }

  return (
    <section className="py-12" aria-labelledby="related-properties-heading">
      <div className="container mx-auto px-4">
        <h2
          id="related-properties-heading"
          className="mb-8 text-2xl font-bold md:text-3xl"
        >
          Imóveis Relacionados
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
