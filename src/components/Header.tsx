import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import logo from "@/assets/footer-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#para-quem", label: "Para Quem É" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#planos", label: "Planos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col items-center gap-0.5">
            <img src={logo} alt="Doctor AI" className="h-10 w-auto" />
            <span className="text-xs font-bold text-white tracking-wide">Doctor AI</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button + Login */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5511947806884&text=%EF%BF%BD+Ol%C3%A1%21+Obrigado+por+entrar+em+contato.+Como+posso+ajudar+voc%C3%AA+hoje%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                Teste Grátis por 3 Dias
              </a>
            </Button>
            <a 
              href="https://www.doctorai.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Login"
            >
              <User size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-2" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5511947806884&text=%EF%BF%BD+Ol%C3%A1%21+Obrigado+por+entrar+em+contato.+Como+posso+ajudar+voc%C3%AA+hoje%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                Teste Grátis por 3 Dias
              </a>
            </Button>
            <a 
              href="https://www.doctorai.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary py-2 mt-2"
              aria-label="Login"
            >
              <User size={18} />
              Entrar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
