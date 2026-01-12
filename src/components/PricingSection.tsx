import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Rocket, Zap } from "lucide-react";

const plans = [
  { name: "Doctor Starter", price: "399", period: "/mês", description: "Para Restaurantes e Lojas Locais", icon: Zap, features: ["Atendimento 24/7", "500 disparos WhatsApp/mês", "3 NeuralChains", "1 Usuário", "Agenda Simples"], buttonText: "Testar Grátis", buttonVariant: "outline" as const, popular: false, cardStyle: "border-border bg-card/50", link: "https://doctorai.com.br/login/register/712/MONTHLY?checkout=true" },
  { name: "Doctor CRC", price: "899", period: "/mês", description: "Para Franquias e Imobiliárias", icon: Sparkles, stackedFrom: "Starter", features: ["Atendimento com Spin Selling, Rapport e Contorno de Objeções", "60min de Clone de Voz", "6.000 disparos WhatsApp/mês", "Webchat para Site", "Suporte Humanizado"], buttonText: "Quero Automatizar", buttonVariant: "popular" as const, popular: true, cardStyle: "border-primary/50 bg-gradient-to-b from-primary/5 to-transparent shadow-neon", link: "https://doctorai.com.br/login/register/250/MONTHLY?checkout=true" },
  { name: "Doctor Elite", price: "1.699", period: "/mês", description: "Para Escalar Vendas", icon: Rocket, stackedFrom: "CRC", features: ["Disparos Ilimitados", "3 Usuários", "9 NeuralChains", "Resgate Rápido", "Suporte Dedicado"], buttonText: "Escalar Vendas", buttonVariant: "elite" as const, popular: false, cardStyle: "border-secondary/50 bg-gradient-to-b from-secondary/5 to-transparent", link: "#" },
  { name: "Doctor Mestre SDR", price: "3.399", period: "/mês", description: "Potência Máxima", icon: Crown, stackedFrom: "Elite", features: ["Funil de Resgate (Neural Sales)", "CRM Kanban com IA", "120min de Clone de Voz", "12 NeuralChains"], buttonText: "Ativar Resgate", buttonVariant: "premium" as const, popular: false, cardStyle: "border-gold/30 bg-gradient-to-b from-gold/5 to-transparent", link: "#" },
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">PLANOS & PREÇOS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sem Surpresas. <span className="text-gradient-primary">Sem Cobrança Extra de Tokens.</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Diferente dos concorrentes que cobram taxa por tokens, nosso preço é fixo. IA própria, sem dependência externa.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${plan.cardStyle}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full shadow-neon">MAIS POPULAR</span></div>}
              <div className="mb-6"><div className="flex items-center gap-2 mb-2"><plan.icon className={`w-5 h-5 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} /><h3 className="text-lg font-bold">{plan.name}</h3></div><p className="text-xs text-muted-foreground">{plan.description}</p></div>
              <div className="mb-6"><span className="text-4xl font-bold">R$ {plan.price}</span><span className="text-muted-foreground">{plan.period}</span></div>
              <div className="flex-1 mb-6">
                {plan.stackedFrom && <p className="text-xs font-semibold text-primary mb-3 pb-3 border-b border-border/50">✓ Tudo do {plan.stackedFrom}, mais:</p>}
                <ul className="space-y-3">{plan.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span className="text-muted-foreground">{f}</span></li>)}</ul>
              </div>
              <Button variant={plan.buttonVariant} className="w-full" asChild><a href={plan.link} target="_blank" rel="noopener noreferrer">{plan.buttonText}</a></Button>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">🛡️ Teste grátis por 3 dias. Cancele quando quiser.</p>
      </div>
    </section>
  );
};

export default PricingSection;
