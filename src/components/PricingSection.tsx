import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Rocket, Zap } from "lucide-react";

const plans = [
  {
    name: "Doctor Starter",
    price: "399",
    period: "/mês",
    description:
      "\"Pare de perder clientes fora do horário comercial.\"\nPara: Restaurantes, Lojas e Negócios Locais.",
    icon: Zap,
    features: [
      "Atendimento 24/7",
      "500 disparos WhatsApp/mês",
      "3 NeuralChains",
      "1 Usuário",
      "Agenda Simples",
    ],
    popular: false,
    cardStyle: "border-border bg-card/50",
    buttons: [
      {
        text: "Testar Grátis por 3 Dias",
        variant: "outline" as const,
        link: "https://doctorai.com.br/login/register/712/MONTHLY",
      },
    ],
  },
  {
    name: "Doctor CRC",
    price: "899",
    period: "/mês",
    description:
      "Para: Clínicas, Franquias, Academias, Imobiliárias e Concessionárias.",
    icon: Sparkles,
    stackedFrom: "Starter",
    features: [
      "IA com técnicas de Spin Selling",
      "60min de clone de voz",
      "6000 disparos Whatsapp/Mês",
      "Webchat para Site",
      "1 Resgate de Lead Automático",
      "Suporte Humanizado",
    ],
    popular: true,
    cardStyle:
      "border-primary/50 bg-gradient-to-b from-primary/5 to-transparent shadow-neon",
    buttons: [
      {
        text: "Testar Grátis por 3 Dias",
        variant: "popular" as const,
        link: "https://doctorai.com.br/login/register/712/MONTHLY",
      },
    ],
  },
  {
    name: "Doctor Elite",
    price: "1.699",
    period: "/mês",
    description:
      "Para: Empresas com alto fluxo de leads focadas em fechar vendas",
    icon: Rocket,
    stackedFrom: "CRC",
    accent: "secondary",
    features: [
      "IA 50% mais inteligente",
      "Disparos Ilimitados",
      "3 usuários",
      "9 Neural Chains",
      "Suporte Dedicado",
    ],
    cardStyle:
      "border-secondary/50 bg-gradient-to-b from-secondary/5 to-transparent",
    buttons: [
      {
        text: "Fale Conosco",
        variant: "elite" as const,
        link: "https://api.whatsapp.com/send/?phone=5511947806884&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Plano%20Elite%20do%20DoctorAI!",
      },
      {
        text: "Agendar Demonstração",
        variant: "outline" as const,
        link: "https://doctorai.com.br/demo",
      },
    ],
  },
  {
    name: "Doctor Mestre SDR",
    price: "3.399",
    period: "/mês",
    description:
      "Para: Alto volume de leads e necessidade de Cadência/Recuperação de leads antigos. Transforme leads 'mortos' e antigos em dinheiro novo no caixa.",
    icon: Crown,
    stackedFrom: "Elite",
    accent: "gold",
    features: [
      "SUPER IA para ser um SDR",
      "Resgate 200 leads antigos por mês",
      "CRM Kanban com IA",
      "120 min de clone de voz",
      "12 NeuralChains",
    ],
    cardStyle:
      "border-gold/30 bg-gradient-to-b from-gold/5 to-transparent",
    buttons: [
      {
        text: "Fale Conosco",
        variant: "premium" as const,
        link: "https://api.whatsapp.com/send/?phone=5511947806884&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Plano%20Mestre%20SDR%20do%20DoctorAI!",
      },
      {
        text: "Ver Como Funciona",
        variant: "outline" as const,
        link: "https://doctorai.com.br/login/register/714/MONTHLY?checkout=true",
      },
    ],
  },
];

// Mapeamento seguro de cores (evita erro do Tailwind)
const accentStyles: Record<string, string> = {
  secondary: "border-secondary text-secondary hover:bg-secondary/10",
  gold: "border-gold text-gold hover:bg-gold/10",
};

const PricingSection = () => {
  return (
    <section id="planos" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            PLANOS & PREÇOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sem Surpresas.{" "}
            <span className="text-gradient-primary">
              Sem Cobrança Extra de Tokens.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diferente dos concorrentes que cobram taxa por tokens, nosso preço é fixo.
            IA própria, sem dependência externa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`whitespace-pre-line relative flex flex-col p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${plan.cardStyle}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full shadow-neon">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <plan.icon className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">R$ {plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <div className="flex-1 mb-6">
                {plan.stackedFrom && (
                  <p className="text-xs font-semibold text-primary mb-3 pb-3 border-b border-border/50">
                    ✓ Tudo do {plan.stackedFrom}, mais:
                  </p>
                )}
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BOTÕES */}
              <div className="flex flex-col-reverse gap-3">
                {plan.buttons.map((btn, i) => {
                  const isSecondary = i === 1 && plan.accent;
                  return (
                    <Button
                      key={btn.text}
                      variant={isSecondary ? "outline" : btn.variant}
                      className={`w-full ${isSecondary ? accentStyles[plan.accent!] : ""}`}
                      asChild
                    >
                      <a href={btn.link} target="_blank" rel="noopener noreferrer">
                        {btn.text}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          🛡️ Teste grátis por 3 dias. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
