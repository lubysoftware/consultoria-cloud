import { GitBranch, Wrench, ShieldCheck, Activity } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { landingConfig } from "@/config/landing-config";

const iconMap = [GitBranch, Wrench, ShieldCheck, Activity];

const deliveries = landingConfig.deliveries.items.map((item, index) => ({
  id: item.id,
  icon: iconMap[index] || GitBranch,
  title: item.title,
  items: item.items,
}));

export const Deliveries = () => {
  const deliveriesPhoto = `${import.meta.env.BASE_URL}assets/${landingConfig.deliveries.image}`;
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="section-label text-primary">
                {landingConfig.deliveries.label}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mt-4 font-extrabold leading-[1.35]">
                {landingConfig.deliveries.title}{" "}
                {landingConfig.deliveries.titleHighlight && <span className="text-primary"> {landingConfig.deliveries.titleHighlight}</span>}
              </h2>
            </div>
            <Accordion type="single" collapsible defaultValue={landingConfig.deliveries.items[0]?.id || "strategy"} className="flex-1">
              {deliveries.map((delivery) => (
                <AccordionItem 
                  key={delivery.id} 
                  value={delivery.id}
                  className="border border-border/50 rounded-xl mb-3 px-4 bg-card overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <delivery.icon className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-left">{delivery.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-3 pl-8">
                      {delivery.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="hidden lg:block h-full">
            <div 
              className="relative w-full h-full rounded-2xl p-[2px]"
              style={{
                background: "linear-gradient(135deg, rgba(65, 160, 220, 0.6), rgba(65, 160, 220, 0.2), rgba(65, 160, 220, 0.6))",
                boxShadow: "0 0 40px rgba(65, 160, 220, 0.3), 0 0 80px rgba(65, 160, 220, 0.15)",
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                <img
                  src={deliveriesPhoto}
                  alt="Developer working with code"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
