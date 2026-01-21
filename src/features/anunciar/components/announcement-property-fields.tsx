"use client";

import { ChevronDownIcon } from "lucide-react";
import { Control } from "react-hook-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { AnnouncementRequestFormValues } from "@/src/features/anunciar/schemas/announcement-request";

interface AnnouncementPropertyFieldsProps {
  control: Control<AnnouncementRequestFormValues>;
  disabled: boolean;
}

const purposeOptions = [
  { value: "venda", label: "Venda" },
  { value: "locacao", label: "Locação" },
];

export function AnnouncementPropertyFields({
  control,
  disabled,
}: AnnouncementPropertyFieldsProps) {
  return (
    <Collapsible defaultOpen={false} className="space-y-2">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-muted/50 [&[data-state=open]>span]:rotate-180">
        Mais detalhes do imóvel (opcional)
        <span
          className="inline-flex shrink-0 transition-transform duration-200"
          aria-hidden
        >
          <ChevronDownIcon className="size-4" />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="space-y-4 pt-2">
          <FormField
            control={control}
            name="addressOrNeighborhood"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço ou bairro</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Centro, Vila Nova..."
                    disabled={disabled}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quartos</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      disabled={disabled}
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(e.target.value ? Number(e.target.value) : undefined)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Banheiros</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      disabled={disabled}
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(e.target.value ? Number(e.target.value) : undefined)
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Área (m²)</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: 120" disabled={disabled} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Finalidade</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={disabled}
                >
                  <FormControl>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {purposeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="estimatedValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor estimado</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: R$ 500.000 ou a combinar"
                    disabled={disabled}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
