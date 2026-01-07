import { Clock, DollarSign, TrendingDown, UserX, FileText, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Leads Perdidos",
    description: "Atendimento 24/7 é impossível para humanos. Leads que chegam fora do horário são dinheiro jogado fora.",
  },
  {
    icon: UserX,
    title: "Alto Turnover",
    description: "Funcionários vêm e vão. Cada demissão significa perda de conhecimento e retrabalho em treinamento.",
  },
  {
    icon: DollarSign,
    title: "Custo Operacional",
    description: "Contratar e manter SDRs é caro e difícil de escalar. O custo por lead fica cada vez maior.",
  },
  {
    icon: FileText,
    title: "Sem Controle de Script",
    description: "Cada atendente fala de um jeito. Sem padronização, você perde conversões e não identifica o que funciona.",
  },
  {
    icon: AlertTriangle,
    title: "Sem Gestão Completa",
    description: "Leads esquecidos no WhatsApp. Sem Kanban, sem funil, sem visibilidade do pipeline de vendas.",
  },
  {
    icon: TrendingDown,
    title: "Inconsistência Humana",
    description: "Mau humor, cansaço e dias ruins comprometem sua taxa de conversão todos os dias.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-destructive bg-destructive/10 rounded-full mb-4">VOCÊ ENFRENTA ISSO?</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Custo Oculto da <span className="text-destructive">Gestão Manual</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">97% dos concorrentes são réplicas dependentes do ChatGPT. Enquanto isso, você enfrenta problemas reais.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={problem.title} className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-destructive/50">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
