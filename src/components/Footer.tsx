import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/doctor-ai-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua Revolução no Atendimento <span className="text-gradient-primary">Começa em 10 Minutos</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Pronto para transformar seus leads em resultados? Comece seu teste grátis agora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="https://api.whatsapp.com/send/?phone=5511947806884&text=%EF%BF%BD+Ol%C3%A1%21+Obrigado+por+entrar+em+contato.+Como+posso+ajudar+voc%C3%AA+hoje%3F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                Começar Teste Grátis de 3 Dias
              </a>
            </Button>
            <Button variant="heroOutline" size="lg">
              Falar com um Especialista
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <img src={logo} alt="Doctor AI" className="h-60 w-auto mb-4" />
              <p className="text-sm text-muted-foreground max-w-sm">
                A primeira plataforma com Inteligência Artificial proprietária para gestão de leads. Criado por quem
                gerencia mais de R$ 8 milhões em anúncios mensais.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#funcionalidades" className="hover:text-primary transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#planos" className="hover:text-primary transition-colors">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Integrações
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Atualizações
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Doctor AI. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
