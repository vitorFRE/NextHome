export type PropertyType = "casa" | "apartamento" | "terreno" | "comercial";

export interface Property {
  id: string;
  type: PropertyType;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  featured: boolean;
  createdAt: Date;
}
