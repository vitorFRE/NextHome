"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

interface PropertiesFiltersProps {
  currentTipo?: string;
}

const propertyTypeOptions = [
  { value: "casa", label: "Casa" },
  { value: "apartamento", label: "Apartamento" },
  { value: "terreno", label: "Terreno" },
  { value: "comercial", label: "Comercial" },
];

export function PropertiesFilters({ currentTipo }: PropertiesFiltersProps) {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    router.push(`/imoveis?tipo=${value}`);
  };

  return (
    <Select value={currentTipo} onValueChange={handleValueChange}>
      <SelectTrigger className="w-full rounded-xl sm:w-[200px]">
        <SelectValue placeholder="Todos os tipos" />
      </SelectTrigger>
      <SelectContent>
        {propertyTypeOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
