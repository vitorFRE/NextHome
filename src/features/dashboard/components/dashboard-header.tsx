"use client"

import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/src/components/ui/sidebar"

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/imoveis": "Imóveis",
  "/dashboard/configs": "Configurações",
}

export function DashboardHeader() {
  const pathname = usePathname()
  const title = pageTitles[pathname] || "Dashboard"

  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b px-4 md:px-6">
      <SidebarTrigger />
      <h1 className="text-lg font-semibold">{title}</h1>
    </header>
  )
}
