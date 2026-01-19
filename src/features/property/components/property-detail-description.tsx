import type { Property } from "@/src/types/property";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

interface PropertyDetailDescriptionProps {
  property: Property;
}

export function PropertyDetailDescription({
  property,
}: PropertyDetailDescriptionProps) {
  const description =
    property.description ||
    "Este imóvel oferece excelente localização e características que atendem às suas necessidades. Entre em contato para mais informações.";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Descrição</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
