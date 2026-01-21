import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { AnnouncementRequestForm } from "@/src/features/anunciar/components/announcement-request-form";

export const metadata: Metadata = {
  title: "Anunciar Imóvel | NextHome",
  description:
    "Entre em contato conosco para anunciar seu imóvel. Nossa equipe entrará em contato para ajudá-lo.",
};

export default function AnunciarPage() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Anunciar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mx-auto max-w-2xl">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                Anunciar seu imóvel
              </h1>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo com suas informações de contato. Se desejar,
                você também pode nos fornecer algumas informações sobre o imóvel. Nossa
                equipe entrará em contato em breve para auxiliá-lo.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm md:p-8">
              <AnnouncementRequestForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
