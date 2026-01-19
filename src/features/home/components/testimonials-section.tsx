import { mockTestimonials } from "@/src/lib/mock-data/testimonials";
import { Card, CardContent } from "@/src/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/src/components/ui/avatar";
import { Star } from "lucide-react";
import { cn } from "@/src/lib/utils";

function renderStars(rating: number) {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={cn(
        "h-4 w-4",
        index < rating
          ? "fill-yellow-400 text-yellow-400"
          : "fill-gray-300 text-gray-300"
      )}
      aria-hidden="true"
    />
  ));
}

export function TestimonialsSection() {
  return (
    <section
      className="bg-linear-to-b from-muted/30 to-background py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2
            id="testimonials-heading"
            className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de quem confiou na NextHome
          </p>
        </div>

        {mockTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockTestimonials.map((testimonial: typeof mockTestimonials[0]) => (
              <Card key={testimonial.id} className="rounded-2xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-5 flex gap-1" role="img" aria-label={`${testimonial.rating} de 5 estrelas`}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="mb-5 text-muted-foreground">
                    <p className="text-base leading-relaxed">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.photo}
                        alt={`Foto de ${testimonial.name}`}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.propertyType}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">
              Nenhum depoimento disponível no momento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
