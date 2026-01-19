import { mockStats } from "@/src/lib/mock-data/stats";
import { Card, CardContent } from "@/src/components/ui/card";
import { House, Users, Award, Building2 } from "lucide-react";

const iconMap = {
  House,
  Users,
  Award,
  Buildings: Building2,
};

function formatNumber(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k+`;
  }
  return value.toString();
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-background py-20" aria-labelledby="stats-heading">
      <div className="container mx-auto px-4">
        <h2 id="stats-heading" className="sr-only">
          Nossos números
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mockStats.map((stat: typeof mockStats[0]) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <Card
                key={stat.id}
                className="rounded-2xl border border-border/50 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  {Icon && (
                    <div className="mb-5 rounded-2xl bg-primary/10 p-4">
                      <Icon
                        className="h-10 w-10 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <p className="mb-3 text-5xl font-bold text-primary">
                    {formatNumber(stat.value)}
                  </p>
                  <p className="mb-2 text-xl font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
