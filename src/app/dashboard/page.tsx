import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Administrativo - NextHome",
  description: "Painel administrativo para gestão de imóveis, clientes e negócios da NextHome",
};

export default function DashboardPage() {
  return (
    <main id="main-content" className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-muted-foreground">
        Bem-vindo ao painel de controle do sistema.
      </p>
    </main>
  );
}