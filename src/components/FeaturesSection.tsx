import { Brain, Mic, RefreshCcw, Calendar, MessageSquare, Users, Globe, GraduationCap, Shield } from "lucide-react";

const features = [
  { icon: Brain, badge: "Neural Chains", title: "Onde a IA Deixa de Responder e Começa a Agir", description: "Fluxos de decisão inteligentes. A IA consulta planilhas, envia PDFs, contorna objeções e notifica vendedores automaticamente.", gradient: "from-primary/20 to-secondary/20", borderColor: "hover:border-primary/50" },
  { icon: Mic, badge: "Clone de Voz", title: "Uma IA com a Sua Personalidade", description: "Envie áudios com sua voz clonada. Os leads acham que estão falando com você. 100% humanizado.", gradient: "from-secondary/20 to-indigo/20", borderColor: "hover:border-secondary/50" },
  { icon: RefreshCcw, badge: "Neural Sales", title: "O Fim do Desperdício de Leads", description: "A IA analisa leads parados e reaqueç automaticamente. Funil de cadência com 9 abordagens até a conversão.", gradient: "from-gold/20 to-primary/20", borderColor: "hover:border-gold/50" },
];

const additionalFeatures = [
  { icon: GraduationCap, title: "WhatsApp Treinador", description: "Envie correção pelo WhatsApp e a IA atualiza o treinamento automaticamente.", isNew: true },
  { icon: Globe, title: "Multi-idioma", description: "A IA atende em qualquer idioma. Software em PT, EN e ES." },
  { icon: Calendar, title: "Agenda Nativa", description: "Agendamentos automáticos com lembretes que reduzem no-show." },
  { icon: MessageSquare, title: "WebChat Integrado", description: "Capture leads no seu site, 24/7." },
  { icon: Users, title: "Intervenção Humana", description: "Pause a IA e assuma o controle quando necessário." },
  { icon: Shield, title: "Sem Limite de Tokens", description: "Preço fixo, sem surpresas. Diferente de wrappers do ChatGPT." },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">FUNCIONALIDADES EXCLUSIVAS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mais de 63 Funcionalidades em <span className="text-gradient-primary">1 Só Ferramenta</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">IA própria desde 2023. Setup em 10 minutos. Sem dependência de tokens externos.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className={`group relative p-8 rounded-2xl border border-border bg-gradient-to-br ${feature.gradient} backdrop-blur-sm transition-all duration-500 ${feature.borderColor} hover:shadow-elevated`}>
              <div className="absolute inset-0 rounded-2xl bg-card/80 backdrop-blur-xl -z-10" />
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><feature.icon className="w-5 h-5 text-primary" /></div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{feature.badge}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {additionalFeatures.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><feature.icon className="w-4 h-4 text-primary" /></div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  {feature.isNew && <span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary font-bold">EXCLUSIVO</span>}
                </div>
                <p className="text-muted-foreground text-xs mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
