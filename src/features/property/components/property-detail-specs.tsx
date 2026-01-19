import { Bed, Bath, Car, Square } from "lucide-react";
import type { Property } from "@/src/types/property";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

interface PropertyDetailSpecsProps {
  property: Property;
}

function formatArea(area: number): string {
  return `${area}m²`;
}

export function PropertyDetailSpecs({ property }: PropertyDetailSpecsProps) {
  const specs = [
    {
      icon: Bed,
      label: "Quartos",
      value: property.bedrooms,
      show: property.bedrooms > 0,
    },
    {
      icon: Bath,
      label: "Banheiros",
      value: property.bathrooms,
      show: property.bathrooms > 0,
    },
    {
      icon: Car,
      label: "Vagas",
      value: property.parking,
      show: property.parking > 0,
    },
    {
      icon: Square,
      label: "Área",
      value: formatArea(property.area),
      show: true,
    },
  ].filter((spec) => spec.show);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Especificações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.label}
                className="flex flex-col items-center gap-2 rounded-lg bg-muted/50 p-4"
              >
                <Icon className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">{spec.label}</span>
                <span className="text-lg font-semibold">{spec.value}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
