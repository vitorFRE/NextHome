import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Car, MapPin } from "lucide-react";
import type { Property } from "@/src/types/property";
import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { cn } from "@/src/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
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

function formatArea(area: number): string {
  return `${area}m²`;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const propertyUrl = `/imoveis/${property.id}`;

  return (
    <Card
      className={cn(
        "group overflow-hidden rounded-2xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      <Link
        href={propertyUrl}
        className="block focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-2xl"
        aria-label={`Ver detalhes de ${property.title} em ${property.address}, ${property.city}`}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
          <Image
            src={property.image}
            alt={`${property.title} em ${property.address}, ${property.city}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {property.featured && (
            <Badge
              className="absolute top-3 left-3 rounded-full bg-primary shadow-lg"
              variant="default"
            >
              Destaque
            </Badge>
          )}
          <Badge
            className="absolute top-3 right-3 rounded-full shadow-lg"
            variant="secondary"
          >
            {propertyTypeLabels[property.type]}
          </Badge>
        </div>

        <CardContent className="p-5">
          <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-tight">
            {property.title}
          </h3>

          <div className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1">
              {property.address}, {property.city} - {property.state}
            </span>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1.5 rounded-lg bg-muted/50 px-2 py-1">
                <Bed className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="font-medium">{property.bedrooms}</span>
                <span className="sr-only">quartos</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1.5 rounded-lg bg-muted/50 px-2 py-1">
                <Bath className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="font-medium">{property.bathrooms}</span>
                <span className="sr-only">banheiros</span>
              </div>
            )}
            {property.parking > 0 && (
              <div className="flex items-center gap-1.5 rounded-lg bg-muted/50 px-2 py-1">
                <Car className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="font-medium">{property.parking}</span>
                <span className="sr-only">vagas de garagem</span>
              </div>
            )}
            <div className="ml-auto rounded-lg bg-muted/50 px-2 py-1 font-medium">
              {formatArea(property.area)}
            </div>
          </div>

          <div className="border-t border-border/50 pt-4">
            <p className="text-xl font-bold text-primary">
              {formatPrice(property.price)}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
