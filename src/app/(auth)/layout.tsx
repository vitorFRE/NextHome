import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/src/lib/auth";

export const metadata: Metadata = {
  title: "Autenticação - NextHome",
  description: "Acesse sua conta na NextHome Imobiliária",
};

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-background p-4'>
      <div className='w-full max-w-md'>
        <div className='rounded-lg border bg-card p-8 shadow-sm'>{children}</div>
      </div>
    </div>
  );
}
