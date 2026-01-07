import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">IA Proprietária • Sem Dependência do ChatGPT</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A Evolução da Gestão de Leads:{" "}
            <span className="text-gradient-primary">Inteligência Artificial Real</span>{" "}
            para Resultados Reais.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Não somos um wrapper do ChatGPT. Somos uma IA proprietária que atende, agenda e recupera leads perdidos 24/7.{" "}
            <span className="text-foreground font-medium">Instale em 10 minutos.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Começar Teste Grátis
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="w-5 h-5 mr-1" />
              Ver a IA em Ação
            </Button>
          </div>

          {/* Social Proof */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Tecnologia que gerencia mais de R$ 8 milhões</span>{" "}
              em anúncios mensais.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Junte-se a mais de{" "}
              <span className="text-foreground font-semibold">1.800 empresas</span>{" "}
              na vanguarda do atendimento com IA.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-primary animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 right-10 w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default HeroSection;
