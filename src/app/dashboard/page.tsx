import type { Metadata } from "next";
import { StatsCards } from "@/src/features/dashboard/components/stats-cards";
import { RecentPropertiesTable } from "@/src/features/dashboard/components/recent-properties-table";

export const metadata: Metadata = {
  title: "Dashboard Administrativo - NextHome",
  description: "Painel administrativo para gestão de imóveis, clientes e negócios da NextHome",
};

export default function DashboardPage() {
  return (
    <>
      <StatsCards />
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Imóveis recentes</h2>
        <RecentPropertiesTable />
      </div>
    </>
  );
}
