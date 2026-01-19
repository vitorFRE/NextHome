import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Property } from "@/src/types/property";
import { Badge } from "@/src/components/ui/badge";

interface PropertyDetailHeroProps {
  property: Property;
}

const propertyTypeLabels: Record<Property["type"], string> = {
  casa: "Casa",
  apartamento: "Apartamento",
  terreno: "Terreno",
  comercial: "Comercial",
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price);
}

export function PropertyDetailHero({ property }: PropertyDetailHeroProps) {
  return (
    <div className="space-y-6">
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl">
        <Image
          src={property.image}
          alt={`${property.title} em ${property.address}, ${property.city}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.featured && (
            <Badge
              className="rounded-full bg-primary shadow-lg"
              variant="default"
            >
              Destaque
            </Badge>
          )}
          <Badge className="rounded-full shadow-lg" variant="secondary">
            {propertyTypeLabels[property.type]}
          </Badge>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {property.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>
              {property.address}, {property.city} - {property.state}
            </span>
          </div>
        </div>

        <div className="border-t border-border/50 pt-4">
          <p className="text-3xl font-bold text-primary md:text-4xl">
            {formatPrice(property.price)}
          </p>
        </div>
      </div>
    </div>
  );
}
