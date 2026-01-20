import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/src/components/ui/sidebar";
import { AppSidebar } from "@/src/components/sidebar/app-sidebar";
import { DashboardHeader } from "@/src/features/dashboard/components/dashboard-header";
import { auth } from "@/src/lib/auth";
import { canAccessDashboard } from "@/src/lib/auth-config";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  if (!canAccessDashboard(session.user.role)) {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className='flex flex-1 flex-col gap-4 p-4 md:p-6'>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
