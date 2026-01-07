import { TrendingUp, Zap, PiggyBank, Heart, Star, Quote } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+164%", label: "De Conversão", color: "text-primary" },
  { icon: Zap, value: "+367%", label: "De Produtividade", color: "text-secondary" },
  { icon: Heart, value: "+78%", label: "Clientes Satisfeitos", color: "text-pink-500" },
  { icon: PiggyBank, value: "-80%", label: "Custos Operacionais", color: "text-gold" },
];

const testimonials = [
  { quote: "Em 2 semanas aumentamos nossa taxa de agendamentos em 340%. O Doctor AI revolucionou nosso atendimento.", author: "Humberto Morais", role: "Magrass Hortolândia", sector: "Saúde" },
  { quote: "Configuramos e iniciamos em 8 minutos! Nunca vi algo tão simples e poderoso. Nossa conversão duplicou.", author: "Marina Costa", role: "Rede de Academias", sector: "Fitness" },
  { quote: "O Neural Sales transformou como resgatamos clientes. Nosso faturamento dobrou com leads esquecidos.", author: "Dr. Persio Mariani", role: "Clínica de Cirurgia Plástica", sector: "Estética" },
  { quote: "O clone de voz é incrível! Os leads acham que estão falando comigo pessoalmente.", author: "Adriele Stein", role: "Oral Sin Implantes", sector: "Saúde" },
  { quote: "200% mais test drives agendados. O Doctor AI nunca dorme, nunca para de agendar.", author: "Edson", role: "Rede de Concessionárias", sector: "Automotivo" },
  { quote: "1 SDR virou 3 com a IA. Economia de R$15.000/mês + muito mais conversões.", author: "Cliente Franqueador", role: "Rede de Franquias", sector: "Franchising" },
];

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">RESULTADOS COMPROVADOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Prova Está nos <span className="text-gradient-primary">Números</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
              <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-muted-foreground text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm group">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
              <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-gold fill-gold" />)}</div>
              <p className="text-sm text-muted-foreground mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"><span className="text-sm font-bold text-primary">{t.author.charAt(0)}</span></div>
                <div><div className="font-semibold text-sm">{t.author}</div><div className="text-xs text-muted-foreground">{t.role}</div></div>
              </div>
              <div className="absolute bottom-4 right-4"><span className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary">{t.sector}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
