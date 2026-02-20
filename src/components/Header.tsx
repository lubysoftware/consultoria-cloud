import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import lubyLogo from "@/assets/luby-logo.svg";
import { landingConfig } from "@/config/landing-config";

const navItems = [
  { label: "Serviços", href: "#dores" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Por que a Luby", href: "#diferenciais" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src={lubyLogo} alt="Luby" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" className="rounded-full px-6" asChild>
              <a href="#contato">{landingConfig.header.ctaButton}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-4 rounded-full" asChild>
              <a href="#contato" onClick={() => setIsOpen(false)}>
                {landingConfig.header.ctaButton}
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
