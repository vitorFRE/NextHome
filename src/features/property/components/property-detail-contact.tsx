import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

export function PropertyDetailContact() {
  const phoneNumber = "+5511999999999";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
  const telUrl = `tel:${phoneNumber}`;

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Entre em Contato</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          asChild
          className="w-full rounded-xl"
          size="lg"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full rounded-xl"
          size="lg"
        >
          <a href={telUrl} aria-label="Ligar para imobiliária">
            <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
            Ligar
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
