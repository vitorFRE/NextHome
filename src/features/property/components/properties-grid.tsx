import { Home } from "lucide-react";
import type { Property } from "@/src/types/property";
import { PropertyCard } from "./property-card";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/src/components/ui/empty";

interface PropertiesGridProps {
  properties: Property[];
}

export function PropertiesGrid({ properties }: PropertiesGridProps) {
  if (properties.length === 0) {
    return (
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Home className="h-6 w-6" aria-hidden="true" />
          </EmptyMedia>
          <EmptyTitle>Nenhum imóvel encontrado</EmptyTitle>
          <EmptyDescription>
            Tente ajustar os filtros ou volte mais tarde.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
