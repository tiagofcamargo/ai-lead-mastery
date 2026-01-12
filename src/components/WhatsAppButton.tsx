import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511947806884&text=%EF%BF%BD+Ol%C3%A1%21+Obrigado+por+entrar+em+contato.+Como+posso+ajudar+voc%C3%AA+hoje%3F&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] transition-all duration-300 animate-pulse-whatsapp"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
