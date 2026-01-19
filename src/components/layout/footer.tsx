import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    imoveis: [
      { href: "/imoveis", label: "Todos os Imóveis" },
      { href: "/imoveis?tipo=casa", label: "Casas" },
      { href: "/imoveis?tipo=apartamento", label: "Apartamentos" },
      { href: "/imoveis?tipo=terreno", label: "Terrenos" },
      { href: "/imoveis?tipo=comercial", label: "Comerciais" },
    ],
    empresa: [
      { href: "/sobre", label: "Sobre Nós" },
      { href: "/contato", label: "Contato" },
      { href: "/blog", label: "Blog" },
      { href: "/carreiras", label: "Carreiras" },
    ],
    suporte: [
      { href: "/ajuda", label: "Central de Ajuda" },
      { href: "/faq", label: "Perguntas Frequentes" },
      { href: "/termos", label: "Termos de Uso" },
      { href: "/privacidade", label: "Política de Privacidade" },
    ],
  };

  const socialLinks = [
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: Facebook,
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: Linkedin,
    },
  ];

  return (
    <footer role="contentinfo" className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-4 inline-block text-xl font-bold"
              aria-label="NextHome - Ir para página inicial"
            >
              NextHome
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              Encontre o imóvel dos seus sonhos. Casas, apartamentos e terrenos
              para venda e locação com as melhores condições do mercado.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a
                  href="tel:+5511999999999"
                  className="hover:text-primary"
                  aria-label="Ligar para (11) 99999-9999"
                >
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a
                  href="mailto:contato@nexthome.com.br"
                  className="hover:text-primary"
                  aria-label="Enviar email para contato@nexthome.com.br"
                >
                  contato@nexthome.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span className="text-muted-foreground">
                  Av. Paulista, 1000 - São Paulo, SP
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Imóveis</h3>
            <ul className="space-y-2">
              {footerLinks.imoveis.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Suporte</h3>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NextHome. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`Visitar nosso ${social.label}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
