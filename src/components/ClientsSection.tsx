import goakira from "@/assets/clients/goakira.png";
import marchon from "@/assets/clients/marchon.png";
import drhair from "@/assets/clients/drhair.png";
import hyundai from "@/assets/clients/hyundai.png";
import sumire from "@/assets/clients/sumire.png";
import oticasLuri from "@/assets/clients/oticas-luri.webp";
import oralsin from "@/assets/clients/oralsin.webp";
import magrass from "@/assets/clients/magrass.png";

const clients = [
  { name: "Grupo Goakira", logo: goakira },
  { name: "Marchon Eyewear", logo: marchon },
  { name: "Dr. Hair Franchising", logo: drhair },
  { name: "Hyundai", logo: hyundai },
  { name: "Sumirê", logo: sumire },
  { name: "Óticas Luri", logo: oticasLuri },
  { name: "Oral Sin Implantes", logo: oralsin },
  { name: "Magrass", logo: magrass },
];

const ClientsSection = () => {
  return (
    <section className="py-16 relative border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
            EMPRESAS QUE CONFIAM
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Mais de 1.800 Empresas{" "}
            <span className="text-gradient-primary">Já Usam Doctor AI</span>
          </h2>
          <p className="text-muted-foreground">
            De clínicas a concessionárias, franquias a indústrias.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain max-w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
