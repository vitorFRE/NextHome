"use client";

import * as React from "react";
import { Home, Building2, Settings, Building, MapPin } from "lucide-react";

import { NavMain } from "@/src/components/sidebar/nav-main";
import { NavProjects } from "@/src/components/sidebar/nav-projects";
import { NavUser } from "@/src/components/sidebar/nav-user";
import { TeamSwitcher } from "@/src/components/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/src/components/ui/sidebar";

const data = {
  user: {
    name: "Admin",
    email: "admin@nexthome.com",
    avatar: "https://github.com/vitorfre.png",
  },
  teams: [
    {
      name: "NextHome",
      logo: Building2,
      plan: "Imobiliária",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Imóveis",
      url: "/dashboard/imoveis",
      icon: Building2,
    },
    {
      title: "Configurações",
      url: "/dashboard/configs",
      icon: Settings,
      items: [
        {
          title: "Geral",
          url: "/dashboard/configs",
        },
        {
          title: "Perfil",
          url: "/dashboard/configs",
        },
        {
          title: "Notificações",
          url: "/dashboard/configs",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Casas",
      url: "/dashboard/imoveis?tipo=casa",
      icon: Home,
    },
    {
      name: "Apartamentos",
      url: "/dashboard/imoveis?tipo=apartamento",
      icon: Building,
    },
    {
      name: "Terrenos",
      url: "/dashboard/imoveis?tipo=terreno",
      icon: MapPin,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
