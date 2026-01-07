import { Stethoscope, Building2, ShoppingBag, Briefcase, Car, Dumbbell, UtensilsCrossed, Factory } from "lucide-react";

const audiences = [
  { icon: Stethoscope, title: "Saúde", items: ["Clínicas", "Odontológicas", "Estética", "Fisioterapia"] },
  { icon: Briefcase, title: "Serviços", items: ["Advocacias", "Agências", "Contabilidade", "Consultoria"] },
  { icon: ShoppingBag, title: "Varejo", items: ["E-commerce", "Franquias", "Lojas", "Imobiliárias"] },
  { icon: Car, title: "Automotivo", items: ["Concessionárias", "Locadoras", "Oficinas"] },
  { icon: Dumbbell, title: "Fitness", items: ["Academias", "Studios", "Personal"] },
  { icon: UtensilsCrossed, title: "Alimentação", items: ["Restaurantes", "Delivery", "Lanchonetes"] },
  { icon: Factory, title: "Indústria", items: ["B2B", "Distribuidores", "Atacado"] },
  { icon: Building2, title: "E Mais", items: ["Escolas", "Cursos", "Hotéis"] },
];

const TargetAudienceSection = () => {
  return (
    <section id="para-quem" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-secondary/10 rounded-full mb-4">PARA QUEM É</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Para Qualquer Negócio que Deseja <span className="text-gradient-secondary">Cuidar de Forma Humanizada</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Construído para empresas que querem atender clientes 24h por dia, de forma humanizada e escalável.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {audiences.map((a) => (
            <div key={a.title} className="p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-secondary/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20"><a.icon className="w-5 h-5 text-secondary" /></div>
              <h3 className="text-base font-bold mb-2">{a.title}</h3>
              <ul className="space-y-1">{a.items.map((item) => <li key={item} className="text-xs text-muted-foreground">{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
