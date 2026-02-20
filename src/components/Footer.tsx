import { Phone, Mail, Globe } from "lucide-react";
import lubyLogo from "@/assets/luby-logo.svg";

const services = [
  { label: "Modernização de Legado", href: "https://luby.com.br/solucoes-tecnologicas/" },
  { label: "FastTrack", href: "https://fasttrack.luby.com.br" },
  { label: "Desenvolvimento", href: "https://luby.com.br" },
  { label: "Consultoria", href: "https://luby.com.br" },
];

const company = [
  { label: "Sobre a Luby", href: "https://luby.com.br/a-luby/" },
  { label: "Clientes", href: "https://luby.com.br/cases/" },
  { label: "Carreiras", href: "https://luby.com.br/carreiras/" },
  { label: "Blog", href: "https://luby.com.br/blog/" },
];

const contact = [
  { label: "Contato", href: "https://luby.com.br/contato/" },
  { label: "Suporte", href: "https://luby.com.br/contato/" },
];

export const Footer = () => {
  return (
    <footer className="py-16 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 -ml-3">
              <img src={lubyLogo} alt="Luby" className="h-14 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              20 anos construindo software real com engenharia sênior. Ajudamos a transformar sistemas complexos em produtos modernos, escaláveis e fáceis de manter.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-2">
              {contact.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Localizações</h4>
            <div className="space-y-4">
              <div>
                <a href="https://luby.com.br" target="_blank" rel="noopener noreferrer" className="text-sm font-medium mb-1 hover:text-primary transition-colors">
                  Brasil
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Edifício Villa Office<br />
                  R. Amália de Noronha, 151 sala 303<br />
                  Pinheiros, São Paulo, SP
                </p>
                <a href="tel:+551130553404" className="flex items-center gap-2 mt-2 text-xs text-primary hover:text-primary/80 transition-colors">
                  <Phone className="w-3 h-3" /><span>+55 11 3055 3404</span>
                </a>
                <a href="mailto:comercial@luby.com.br" className="flex items-center gap-2 mt-1 text-xs text-primary hover:text-primary/80 transition-colors">
                  <Mail className="w-3 h-3" /><span>comercial@luby.com.br</span>
                </a>
                <a href="https://luby.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-1 text-xs text-primary hover:text-primary/80 transition-colors">
                  <Globe className="w-3 h-3" /><span>luby.com.br</span>
                </a>
              </div>

              <div>
                <a href="https://luby.co" target="_blank" rel="noopener noreferrer" className="text-sm font-medium mb-1 hover:text-primary transition-colors">
                  Estados Unidos
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  1110 Brickell Avenue Suite 310<br />
                  Miami, FL, United States
                </p>
                <a href="tel:+13056001993" className="flex items-center gap-2 mt-2 text-xs text-primary hover:text-primary/80 transition-colors">
                  <Phone className="w-3 h-3" /><span>+1 305 600 1993</span>
                </a>
                <a href="mailto:sales@luby.co" className="flex items-center gap-2 mt-1 text-xs text-primary hover:text-primary/80 transition-colors">
                  <Mail className="w-3 h-3" /><span>sales@luby.co</span>
                </a>
                <a href="https://luby.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-1 text-xs text-primary hover:text-primary/80 transition-colors">
                  <Globe className="w-3 h-3" /><span>luby.co</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Luby Software. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://luby.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Termos de Uso
            </a>
            <a href="https://luby.com.br/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
