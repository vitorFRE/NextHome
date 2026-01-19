import {
  SidebarProvider,
  SidebarInset,
} from "@/src/components/ui/sidebar"
import { AppSidebar } from "@/src/components/sidebar/app-sidebar"
import { DashboardHeader } from "@/src/features/dashboard/components/dashboard-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
