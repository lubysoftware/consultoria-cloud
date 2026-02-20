import siemens from "@/assets/clients/siemens.png";
import caliber from "@/assets/clients/caliber.png";
import dci from "@/assets/clients/dci.png";
import foxtrot from "@/assets/clients/foxtrot.png";
import gigpay from "@/assets/clients/gigpay.png";
import interco from "@/assets/clients/interco.png";
import masspay from "@/assets/clients/masspay.png";
import neocova from "@/assets/clients/neocova.png";
import onlineIps from "@/assets/clients/online-ips.png";
import papaya from "@/assets/clients/papaya.png";
import sunwestBank from "@/assets/clients/sunwest-bank.png";
import usend from "@/assets/clients/usend.png";

const stats = [
  { value: "+20", label: "anos de experiência" },
  { value: "+500", label: "projetos entregues" },
  { value: "+100", label: "engenheiros sêniores" },
  { value: "3x", label: "mais velocidade com IA" },
];

const clients = [
  { name: "Siemens", logo: siemens },
  { name: "Caliber", logo: caliber },
  { name: "DCI", logo: dci },
  { name: "Foxtrot", logo: foxtrot },
  { name: "GigPay", logo: gigpay },
  { name: "Interco", logo: interco },
  { name: "MassPay", logo: masspay },
  { name: "Neocova", logo: neocova },
  { name: "Online IPS", logo: onlineIps },
  { name: "Papaya", logo: papaya },
  { name: "Sunwest Bank", logo: sunwestBank },
  { name: "Usend", logo: usend },
];

export const Clients = () => {
  return (
    <section id="clientes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mt-4 font-extrabold leading-[1.35]">
            Empresas que
            <br />
            <span className="text-primary">modernizaram com a Luby</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            E muitas outras equipes que evoluíram sistemas críticos sem interromper a operação.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-3 rounded-xl bg-white h-28"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-20 max-w-[180px] object-contain"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const hasPlus = stat.value.startsWith('+');
            const number = stat.value.replace('+', '');
            return (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-1">
                  {hasPlus && <span className="text-primary">+</span>}
                  <span className="text-foreground">{number}</span>
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
