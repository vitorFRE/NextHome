import { z } from "zod";

export const announcementRequestSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  message: z.string().optional(),
  propertyType: z.enum(["casa", "apartamento", "terreno", "comercial"]).optional(),
  addressOrNeighborhood: z.string().optional(),
  bedrooms: z.number().int().min(0).optional(),
  bathrooms: z.number().int().min(0).optional(),
  area: z.string().optional(),
  purpose: z.enum(["venda", "locacao"]).optional(),
  estimatedValue: z.string().optional(),
});

export type AnnouncementRequestFormValues = z.infer<typeof announcementRequestSchema>;
