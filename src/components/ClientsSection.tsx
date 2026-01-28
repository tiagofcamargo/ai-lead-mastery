import goakira from "@/assets/clients/goakira.png";
import drhair from "@/assets/clients/drhair.png";
import hyundai from "@/assets/clients/hyundai.png";
import sumire from "@/assets/clients/sumire.png";
import oticasLuri from "@/assets/clients/oticas-luri.webp";
import oralsin from "@/assets/clients/oralsin.webp";
import magrass from "@/assets/clients/magrass.png";
import "../index.css";

const clients = [
  { name: "Grupo Goakira", logo: goakira },
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

        {/* CONTAINER MENOR SÓ PARA O CARROSSEL */}
        <div className="mx-auto max-w-4xl">
          <div className="marquee">
            <div className="marquee-track">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="marquee-item">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="logo-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
