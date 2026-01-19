import type { Metadata } from "next";
import { getProperties } from "@/src/lib/mock-data/properties";
import { PropertiesTable } from "@/src/features/dashboard/components/properties-table";

export const metadata: Metadata = {
  title: "Imóveis - Dashboard",
  description: "Gerenciamento de imóveis",
};

export default function ImoveisPage() {
  const properties = getProperties();

  return (
    <div className="space-y-4">
      <PropertiesTable properties={properties} />
    </div>
  );
}
