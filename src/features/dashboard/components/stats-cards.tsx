import { Building2, Star, Home, Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { mockProperties, getFeaturedProperties } from "@/src/lib/mock-data/properties"
import type { PropertyType } from "@/src/types/property"

function getPropertyCountByType(type: PropertyType): number {
  return mockProperties.filter((p) => p.type === type).length
}

export function StatsCards() {
  const totalProperties = mockProperties.length
  const featuredProperties = getFeaturedProperties().length
  const housesCount = getPropertyCountByType("casa")
  const apartmentsCount = getPropertyCountByType("apartamento")

  const stats = [
    {
      title: "Total de Imóveis",
      value: totalProperties,
      icon: Building2,
    },
    {
      title: "Em Destaque",
      value: featuredProperties,
      icon: Star,
    },
    {
      title: "Casas",
      value: housesCount,
      icon: Home,
    },
    {
      title: "Apartamentos",
      value: apartmentsCount,
      icon: Building,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title} className="py-4">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
