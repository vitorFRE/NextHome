import Link from "next/link";
import { Home, Building2, TreePine, Store } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";


const categories = [
  {
    type: "casa",
    label: "Casas",
    icon: Home,
    href: "/imoveis?tipo=casa",
    description: "Encontre a casa perfeita para sua família",
  },
  {
    type: "apartamento",
    label: "Apartamentos",
    icon: Building2,
    href: "/imoveis?tipo=apartamento",
    description: "Apartamentos modernos e bem localizados",
  },
  {
    type: "terreno",
    label: "Terrenos",
    icon: TreePine,
    href: "/imoveis?tipo=terreno",
    description: "Terrenos para construir seu sonho",
  },
  {
    type: "comercial",
    label: "Comerciais",
    icon: Store,
    href: "/imoveis?tipo=comercial",
    description: "Espaços comerciais para seu negócio",
  },
];

export function PropertyCategories() {
  return (
    <section className="bg-linear-to-b from-muted/30 to-background py-20" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4">
        <h2
          id="categories-heading"
          className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl"
        >
          Explore por Categoria
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Encontre o tipo de imóvel ideal para suas necessidades
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.type}
                href={category.href}
                className="group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-2xl"
              >
                <Card className="h-full rounded-2xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group-hover:border-primary/20">
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <div className="mb-5 rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 p-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-linear-to-br group-hover:from-primary/20 group-hover:to-primary/10">
                      <Icon
                        className="h-10 w-10 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {category.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
