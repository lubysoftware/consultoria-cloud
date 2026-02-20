import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { landingConfig } from "@/config/landing-config";

const faqs = landingConfig.faq.items;

const leftColumnFaqs = faqs.slice(0, 5);
const rightColumnFaqs = faqs.slice(5, 10);

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const handleValueChange = (value: string) => {
    setOpenItem(value === openItem ? undefined : value);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label text-primary">{landingConfig.faq.label}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mt-4 font-extrabold leading-[1.35]">
            {landingConfig.faq.title}
            {landingConfig.faq.titleHighlight && <span className="text-primary"> {landingConfig.faq.titleHighlight}</span>}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="space-y-3">
            {leftColumnFaqs.map((faq, index) => (
              <Accordion
                key={`left-${index}`}
                type="single"
                collapsible
                value={openItem === `left-${index}` ? `left-${index}` : ""}
                onValueChange={() => handleValueChange(`left-${index}`)}
              >
                <AccordionItem
                  value={`left-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 h-[88px]">
                    <span className="font-medium pr-4 text-sm md:text-base line-clamp-2">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          <div className="space-y-3">
            {rightColumnFaqs.map((faq, index) => (
              <Accordion
                key={`right-${index}`}
                type="single"
                collapsible
                value={openItem === `right-${index}` ? `right-${index}` : ""}
                onValueChange={() => handleValueChange(`right-${index}`)}
              >
                <AccordionItem
                  value={`right-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 h-[88px]">
                    <span className="font-medium pr-4 text-sm md:text-base line-clamp-2">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
