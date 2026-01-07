import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para configurar o Doctor AI?",
    answer: "O setup inicial é feito em menos de 10 minutos. Nossa plataforma é intuitiva e você pode criar seu primeiro agente de IA rapidamente. Nos planos CRC e superiores, nossa equipe de especialistas te ajuda a configurar e otimizar.",
  },
  {
    question: "O Doctor AI usa ChatGPT ou outra IA externa?",
    answer: "Não. Somos uma IA proprietária e independente. Não dependemos do ChatGPT, Gemini ou qualquer outra IA externa. Isso significa sem limite de tokens e custo-benefício real e previsível.",
  },
  {
    question: "Posso pausar a IA e atender manualmente quando quiser?",
    answer: "Sim! Com a função de Intervenção Humana, você pode pausar a IA com um clique e assumir o controle da conversa a qualquer momento, garantindo o melhor dos dois mundos.",
  },
  {
    question: "O que é o Neural Sales (Funil de Resgate)?",
    answer: "É nossa tecnologia exclusiva que analisa seu banco de leads antigos e inicia conversas personalizadas para reaquecê-los automaticamente. Transforma dinheiro parado em novas oportunidades.",
  },
  {
    question: "Posso testar antes de assinar?",
    answer: "Sim! Oferecemos teste grátis por 3 dias em todos os planos. Veja os resultados por si mesmo antes de decidir.",
  },
  {
    question: "O Clone de Voz funciona em português?",
    answer: "Sim! Nosso Clone de Voz funciona perfeitamente em português brasileiro. Você pode enviar áudios com sua própria voz clonada, criando uma experiência 100% humanizada.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas? Nós <span className="text-gradient-primary">Respondemos</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
