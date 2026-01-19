import type { Property, PropertyType } from "@/src/types/property";

export const mockProperties: Property[] = [
  {
    id: "1",
    type: "casa",
    title: "Casa Moderna com Piscina",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    price: 850000,
    area: 250,
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    featured: true,
    createdAt: new Date("2024-01-15"),
    description:
      "Casa moderna e espaçosa com piscina, ideal para quem busca conforto e lazer. Localizada em bairro tranquilo, possui ampla área de lazer e acabamento de primeira qualidade.",
  },
  {
    id: "2",
    type: "apartamento",
    title: "Apartamento Luxuoso no Centro",
    address: "Av. Paulista, 1000",
    city: "São Paulo",
    state: "SP",
    price: 1200000,
    area: 180,
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    featured: true,
    createdAt: new Date("2024-01-20"),
    description:
      "Apartamento luxuoso em uma das principais avenidas de São Paulo. Com vista panorâmica, acabamentos premium e localização privilegiada, próximo a tudo.",
  },
  {
    id: "3",
    type: "casa",
    title: "Casa de Campo com Chácara",
    address: "Estrada Rural, km 15",
    city: "Campinas",
    state: "SP",
    price: 650000,
    area: 400,
    bedrooms: 5,
    bathrooms: 4,
    parking: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    featured: false,
    createdAt: new Date("2024-01-25"),
    description:
      "Casa de campo espaçosa com chácara, perfeita para quem busca tranquilidade e contato com a natureza. Ideal para famílias grandes ou para investimento em turismo rural.",
  },
  {
    id: "4",
    type: "apartamento",
    title: "Apartamento Compacto e Moderno",
    address: "Rua Augusta, 500",
    city: "São Paulo",
    state: "SP",
    price: 450000,
    area: 65,
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    featured: false,
    createdAt: new Date("2024-01-28"),
    description:
      "Apartamento compacto e moderno, ideal para jovens profissionais ou casais. Bem localizado, com fácil acesso ao transporte público e comércio.",
  },
  {
    id: "5",
    type: "terreno",
    title: "Terreno Residencial 500m²",
    address: "Rua Nova, 200",
    city: "Guarulhos",
    state: "SP",
    price: 280000,
    area: 500,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    featured: false,
    createdAt: new Date("2024-02-01"),
    description:
      "Terreno residencial de 500m² em localização estratégica, com fácil acesso e infraestrutura completa. Perfeito para construir o imóvel dos seus sonhos.",
  },
  {
    id: "6",
    type: "comercial",
    title: "Sala Comercial em Localização Premium",
    address: "Av. Faria Lima, 2000",
    city: "São Paulo",
    state: "SP",
    price: 950000,
    area: 120,
    bedrooms: 0,
    bathrooms: 2,
    parking: 5,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    featured: true,
    createdAt: new Date("2024-02-05"),
    description:
      "Sala comercial em uma das principais avenidas de São Paulo, com excelente localização e infraestrutura completa. Ideal para empresas que buscam prestígio e visibilidade.",
  },
  {
    id: "7",
    type: "casa",
    title: "Casa Térrea com Quintal Amplo",
    address: "Rua das Acácias, 350",
    city: "São Paulo",
    state: "SP",
    price: 720000,
    area: 200,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    featured: false,
    createdAt: new Date("2024-02-10"),
    description:
      "Casa térrea aconchegante com quintal amplo, perfeita para famílias que valorizam espaço e tranquilidade. Bairro residencial com excelente qualidade de vida.",
  },
  {
    id: "8",
    type: "apartamento",
    title: "Cobertura com Vista Panorâmica",
    address: "Av. Brigadeiro Faria Lima, 3000",
    city: "São Paulo",
    state: "SP",
    price: 2500000,
    area: 350,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    featured: true,
    createdAt: new Date("2024-02-12"),
    description:
      "Cobertura de alto padrão com vista panorâmica da cidade, acabamentos luxuosos e área de lazer completa. O imóvel dos sonhos para quem busca exclusividade e conforto.",
  },
];

export const getFeaturedProperties = () =>
  mockProperties.filter((p) => p.featured);

export const getRecentProperties = () =>
  [...mockProperties]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 6);

export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find((p) => p.id === id);
};

export const getRelatedProperties = (
  propertyId: string,
  type: Property["type"],
  limit: number = 3
): Property[] => {
  return mockProperties
    .filter((p) => p.id !== propertyId && p.type === type)
    .slice(0, limit);
};

export const getProperties = (tipo?: string): Property[] => {
  if (!tipo) {
    return [...mockProperties];
  }

  const validTypes: PropertyType[] = ["casa", "apartamento", "terreno", "comercial"];
  if (validTypes.includes(tipo as PropertyType)) {
    return mockProperties.filter((p) => p.type === tipo);
  }

  return [...mockProperties];
};
