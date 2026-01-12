import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5511947806884&text&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
    </a>
  );
};

export default WhatsAppButton;
