"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, LayoutDashboard, Heart, LogOut } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { signOut } from "@/src/lib/auth-client";

type HeaderUserDropdownProps = {
  isAdmin: boolean;
  onSelect?: () => void;
};

export function HeaderUserDropdown({ isAdmin, onSelect }: HeaderUserDropdownProps) {
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    onSelect?.();
    router.push("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-xl border bg-muted/50 hover:bg-muted"
          aria-label="Menu do usuário"
        >
          <User className="h-5 w-5" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {isAdmin && (
          <DropdownMenuItem asChild onSelect={onSelect}>
            <Link href="/dashboard" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild onSelect={onSelect}>
          <Link href="/favoritos" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Favoritos
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          onSelect={(e) => {
            e.preventDefault();
            void handleSignOut();
          }}
        >
          <LogOut className="h-4 w-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
