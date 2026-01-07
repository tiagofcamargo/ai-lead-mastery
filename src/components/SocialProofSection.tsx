import { TrendingUp, Zap, PiggyBank, Star, Quote } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "+164%",
    label: "em Conversão",
    color: "text-primary",
  },
  {
    icon: Zap,
    value: "+367%",
    label: "em Produtividade",
    color: "text-secondary",
  },
  {
    icon: PiggyBank,
    value: "-80%",
    label: "em Custos Operacionais",
    color: "text-gold",
  },
];

const testimonials = [
  {
    quote: "Em 2 semanas aumentamos nossa taxa de agendamentos em 340%. O Doctor AI revolucionou nosso atendimento.",
    author: "Humberto Morais",
    role: "Magrass Hortolândia",
    sector: "Estética",
  },
  {
    quote: "O Neural Sales transformou como resgatamos clientes. Nosso faturamento dobrou no primeiro mês com os leads que eram esquecidos.",
    author: "Dr. Persio Mariani",
    role: "Clínica de Cirurgia Plástica",
    sector: "Saúde",
  },
  {
    quote: "Temos 1 SDR que se transformou em 3 com a IA. Economia de R$ 15.000/mês + muito mais conversões.",
    author: "Cliente Satisfeito",
    role: "Setor de Franquias",
    sector: "Franquias",
  },
];

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            RESULTADOS COMPROVADOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Prova Está nos{" "}
            <span className="text-gradient-primary">Números</span>
          </h2>
          <p className="text-muted-foreground">
            Resultados médios observados nos primeiros 30 dias de uso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Quem Usa, <span className="text-gradient-secondary">Confirma</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-secondary/30 transition-all group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20 group-hover:text-secondary/40 transition-colors" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4">
                <span className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary">
                  {testimonial.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
