import { Clock, DollarSign, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Leads Perdidos",
    description: "Atendimento 24/7 é impossível para humanos. Leads que chegam fora do horário comercial são oportunidades desperdiçadas.",
  },
  {
    icon: DollarSign,
    title: "Alto Custo Operacional",
    description: "Contratar, treinar e manter uma equipe de SDRs é caro, demorado e difícil de escalar. Turnover elevado quebra a consistência.",
  },
  {
    icon: TrendingDown,
    title: "Inconsistência Humana",
    description: "Falta de padronização no follow-up e abordagens que variam com humor e cansaço comprometem sua taxa de conversão.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Custo Oculto da{" "}
            <span className="text-destructive">Gestão Manual</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A gestão tradicional de leads está queimando seu orçamento de marketing e deixando dinheiro na mesa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-destructive/50 hover:shadow-[0_0_30px_hsl(0_62%_50%/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
