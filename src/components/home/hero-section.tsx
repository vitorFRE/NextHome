"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Label } from "@/src/components/ui/label";
import { Card } from "@/src/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative min-h-[650px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
          alt="Imóveis de qualidade para você encontrar o lar dos seus sonhos"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[650px] items-center px-4 py-20">
        <div className="w-full max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Encontre o imóvel dos seus sonhos
          </h1>
          <p className="mb-10 text-lg text-white/90 md:text-xl">
            Explore milhares de propriedades disponíveis para venda e locação
            com as melhores condições do mercado
          </p>

          <Card className="w-full rounded-2xl border-0 bg-white/95 p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <form
              className="grid gap-4 md:grid-cols-4 md:gap-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
              aria-label="Formulário de busca de imóveis"
            >
              <div className="md:col-span-1">
                <Label htmlFor="property-type" className="sr-only">
                  Tipo de imóvel
                </Label>
                <Select name="type">
                  <SelectTrigger id="property-type" className="w-full rounded-xl">
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="apartamento">Apartamento</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-1">
                <Label htmlFor="location" className="sr-only">
                  Localização
                </Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Cidade, bairro ou região"
                  aria-label="Digite a localização desejada"
                  className="rounded-xl"
                />
              </div>

              <div className="md:col-span-1">
                <Label htmlFor="max-price" className="sr-only">
                  Preço máximo
                </Label>
                <Input
                  id="max-price"
                  name="maxPrice"
                  type="number"
                  placeholder="Preço máximo"
                  aria-label="Digite o preço máximo desejado"
                  className="rounded-xl"
                />
              </div>

              <div className="md:col-span-1">
                <Button type="submit" className="w-full rounded-xl" size="lg">
                  <Search className="mr-2 h-4 w-4" aria-hidden="true" />
                  Buscar
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
