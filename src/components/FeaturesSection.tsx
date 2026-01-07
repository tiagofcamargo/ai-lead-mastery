import { Brain, Mic, RefreshCcw, Zap, Calendar, MessageSquare, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    badge: "Neural Chains",
    title: "Onde a IA Deixa de Responder e Começa a Agir",
    description: "Crie fluxos de decisão inteligentes que superam qualquer chatbot. A IA consulta planilhas, envia PDFs, contorna objeções e notifica vendedores — tudo automaticamente.",
    gradient: "from-primary/20 to-secondary/20",
    borderColor: "hover:border-primary/50",
  },
  {
    icon: Mic,
    badge: "Clone de Voz",
    title: "Uma IA com a Sua Personalidade",
    description: "Envie áudios com a sua própria voz clonada. Defina a personalidade da IA como vendedor, SDR ou consultor, com técnicas de Spin Selling e Rapport integradas.",
    gradient: "from-secondary/20 to-indigo/20",
    borderColor: "hover:border-secondary/50",
  },
  {
    icon: RefreshCcw,
    badge: "Neural Sales",
    title: "O Fim do Desperdício de Leads",
    description: "A IA analisa seu banco de leads parados e inicia conversas personalizadas para reaquecê-los. Funil de cadência inteligente com 9 abordagens diferentes até a conversão.",
    gradient: "from-gold/20 to-primary/20",
    borderColor: "hover:border-gold/50",
  },
];

const additionalFeatures = [
  {
    icon: Calendar,
    title: "Agenda Nativa Inteligente",
    description: "Agendamentos automáticos respeitando horários e intervalos. Lembretes e confirmações que reduzem o no-show.",
  },
  {
    icon: MessageSquare,
    title: "WebChat Integrado",
    description: "Capture e qualifique leads diretamente no seu site, 24/7.",
  },
  {
    icon: Users,
    title: "Intervenção Humana",
    description: "Pause a IA com um clique e assuma o controle quando necessário.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            FUNCIONALIDADES EXCLUSIVAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nos Torna{" "}
            <span className="text-gradient-primary">Realmente Diferentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IA própria e independente. Sem limite de tokens. Setup em menos de 10 minutos. Mais de 30 atualizações por ano.
          </p>
        </div>

        {/* Main Features - Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl border border-border bg-gradient-to-br ${feature.gradient} backdrop-blur-sm transition-all duration-500 ${feature.borderColor} hover:shadow-elevated`}
            >
              <div className="absolute inset-0 rounded-2xl bg-card/80 backdrop-blur-xl -z-10" />
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {feature.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {additionalFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-muted-foreground text-xs">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
