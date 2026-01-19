import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="about-heading" className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Sobre a NextHome
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-muted-foreground">
              Com mais de 15 anos de experiência no mercado imobiliário, a
              NextHome é referência em qualidade, transparência e excelência no
              atendimento.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Nossa missão é ajudar você a encontrar o imóvel perfeito, seja
              para morar, investir ou expandir seu negócio. Contamos com uma
              equipe de profissionais especializados e um portfólio diversificado
              de propriedades em toda a região.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-lg">Transparência em todas as negociações</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-lg">Atendimento personalizado e humanizado</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-lg">Expertise técnica e conhecimento de mercado</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop"
              alt="Equipe da NextHome trabalhando com dedicação para encontrar o imóvel perfeito para você"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
