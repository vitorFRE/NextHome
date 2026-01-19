"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/src/components/ui/button";


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/imoveis", label: "Imóveis" },
    { href: "/#sobre", label: "Sobre" },
  ];

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
    >
      <nav
        role="navigation"
        aria-label="Navegação principal"
        className="container mx-auto flex h-16 items-center justify-between px-4"
      >
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl"
          aria-label="NextHome - Ir para página inicial"
        >
          <span>NextHome</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:space-x-3">
          <Button variant="ghost" asChild className="rounded-xl">
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild className="rounded-xl">
            <Link href="/anunciar">Anunciar</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu de navegação"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t bg-background"
          role="menu"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t">
              <Button variant="ghost" className="w-full justify-start rounded-xl" asChild>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Entrar
                </Link>
              </Button>
              <Button className="w-full rounded-xl" asChild>
                <Link
                  href="/anunciar"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Anunciar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
