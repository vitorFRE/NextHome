import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SkipLink } from "@/src/components/shared/skip-link";
import { QueryProvider } from "@/src/providers/query-provider";
import { Toaster } from "@/src/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextHome - Imobiliária",
  description: "NextHome - Encontre o imóvel dos seus sonhos. Casas, apartamentos e terrenos para venda e locação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <SkipLink />
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
