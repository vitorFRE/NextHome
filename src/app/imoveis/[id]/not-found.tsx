import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";

export default function PropertyNotFound() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-md text-center">
            <h1 className="mb-4 text-4xl font-bold">Imóvel não encontrado</h1>
            <p className="mb-8 text-muted-foreground">
              O imóvel que você está procurando não existe ou foi removido.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild className="rounded-xl">
                <Link href="/imoveis">Ver todos os imóveis</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <Link href="/">Voltar ao início</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
