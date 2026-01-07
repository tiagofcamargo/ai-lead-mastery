import { Button } from "@/components/ui/button";
import { Play, Sparkles, MessageCircle, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">IA Proprietária desde 2023 • Sem ChatGPT</span>
            </div>

            {/* Main selling phrase */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-primary/50 bg-primary/10 mb-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
              <MessageCircle className="w-6 h-6 text-primary" />
              <span className="text-lg md:text-xl font-bold text-primary">IA pronta pra atender no WhatsApp em 10 minutos!</span>
              <Clock className="w-5 h-5 text-primary" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A Evolução da Gestão de Leads:{" "}
              <span className="text-gradient-primary">Inteligência Artificial Real</span>{" "}
              para Resultados Reais.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Não somos um wrapper do ChatGPT. Somos uma IA proprietária que atende, agenda e recupera leads perdidos 24/7.{" "}
              <span className="text-foreground font-medium">Construído para qualquer negócio que deseja cuidar de forma humanizada dos seus clientes, o dia inteiro!</span>
            </p>

            {/* WhatsApp Official Badges */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: "0.25s" }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#25D366] fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm font-medium text-[#25D366]">WhatsApp Business</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#25D366] fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm font-medium text-[#25D366]">API Oficial</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                Começar Teste Grátis
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#video-demo">
                  <Play className="w-5 h-5 mr-1" />
                  Ver a IA em Ação
                </a>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Criado por quem gerencia mais de R$ 8 milhões</span>{" "}
                em anúncios mensais e sabe a dor de perder 1 lead.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Junte-se a mais de{" "}
                <span className="text-foreground font-semibold">1.800 empresas</span>{" "}
                na vanguarda do atendimento com IA.
              </p>
            </div>
          </div>

          {/* Right Content - Video */}
          <div id="video-demo" className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated bg-card">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/icV6bmyVVCE"
                  title="Doctor AI - Inteligência Artificial que Converte Leads"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Veja como a IA funciona na prática em 3 minutos
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
