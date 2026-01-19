import type { Stat } from "@/src/types/stats";

export const mockStats: Stat[] = [
  {
    id: "1",
    label: "Imóveis Vendidos",
    value: 1250,
    icon: "House",
    description: "Mais de 1.250 imóveis vendidos com sucesso",
  },
  {
    id: "2",
    label: "Clientes Satisfeitos",
    value: 980,
    icon: "Users",
    description: "Mais de 980 clientes satisfeitos",
  },
  {
    id: "3",
    label: "Anos de Experiência",
    value: 15,
    icon: "Award",
    description: "15 anos de experiência no mercado imobiliário",
  },
  {
    id: "4",
    label: "Imóveis Disponíveis",
    value: 320,
    icon: "Buildings",
    description: "Mais de 320 imóveis disponíveis para você",
  },
];
