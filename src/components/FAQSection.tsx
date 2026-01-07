import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "O Doctor AI usa ChatGPT ou outra IA externa?", answer: "Não. Somos uma IA proprietária lançada em 2023, muito antes da maioria das ferramentas. Sem limite de tokens e custo previsível." },
  { question: "Quanto tempo leva para configurar?", answer: "Setup em menos de 10 minutos. Nos planos CRC+, nossa equipe te ajuda a configurar e otimizar." },
  { question: "O que é o WhatsApp Treinador?", answer: "Funcionalidade exclusiva: envie correção pelo WhatsApp e a IA atualiza o treinamento automaticamente." },
  { question: "A IA tem comportamento humano?", answer: "Sim! Construída com experiência de milhões de leads em 12+ países. Clone de Voz faz leads acharem que é você." },
  { question: "O Doctor AI fecha vendas?", answer: "Sim! Pode enviar links de pagamento e efetuar vendas diretas, além de agendar e fazer follow-up." },
  { question: "O que é o Neural Sales?", answer: "Tecnologia exclusiva que analisa leads antigos e reaqueçe automaticamente com 9 abordagens inteligentes." },
  { question: "A IA atende em outros idiomas?", answer: "Sim! Responde em qualquer idioma. Software disponível em PT, EN e ES." },
  { question: "Posso pausar a IA?", answer: "Sim! Função Intervenção Humana permite pausar e assumir controle com um clique." },
  { question: "Funciona para Franquias?", answer: "Sim! Muitas redes usam Doctor AI. 40+ unidades ganham atendimento exclusivo." },
  { question: "Por que custa mais que outros?", answer: "Concorrentes de R$150-500 cobram tokens extras. Doctor AI: IA própria, preço fixo, sem surpresas." },
  { question: "Posso testar antes?", answer: "Sim! Teste grátis por 3 dias, sem cartão de crédito." },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">PERGUNTAS FREQUENTES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas? Nós <span className="text-gradient-primary">Respondemos</span></h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/30">
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
