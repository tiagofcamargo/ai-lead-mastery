import { Stethoscope, Building2, ShoppingBag, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Stethoscope,
    title: "Saúde",
    items: ["Clínicas Médicas", "Odontológicas", "Estética", "Fisioterapia", "Psicologia"],
  },
  {
    icon: Briefcase,
    title: "Serviços",
    items: ["Advocacias", "Agências", "Contabilidade", "Consultoria"],
  },
  {
    icon: ShoppingBag,
    title: "Varejo & Imóveis",
    items: ["E-commerce", "Franquias", "Concessionárias", "Imobiliárias"],
  },
  {
    icon: Building2,
    title: "E Muito Mais",
    items: ["Academias", "Indústrias", "Restaurantes", "Lojas"],
  },
];

const TargetAudienceSection = () => {
  return (
    <section id="para-quem" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-secondary/10 rounded-full mb-4">
            PARA QUEM É
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Construído para Clínicas.{" "}
            <span className="text-gradient-secondary">Perfeito para o Seu Negócio.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-secondary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <audience.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{audience.title}</h3>
              <ul className="space-y-2">
                {audience.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
