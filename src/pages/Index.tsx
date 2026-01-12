import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <ProblemSection />
        <FeaturesSection />
        <TargetAudienceSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
