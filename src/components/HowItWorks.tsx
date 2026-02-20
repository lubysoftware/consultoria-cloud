import { Search, FileCode, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { landingConfig } from "@/config/landing-config";

const iconMap = [Search, FileCode, Rocket, TrendingUp];

const steps = landingConfig.howItWorks.steps.map((step, index) => ({
  number: step.number,
  icon: iconMap[index] || Search,
  title: step.title,
  description: step.description,
  detail: step.detail,
}));

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label text-primary">{landingConfig.howItWorks.label}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mt-4 font-extrabold leading-[1.35]">
            {landingConfig.howItWorks.title}
            {landingConfig.howItWorks.titleHighlight && <span className="text-gradient"> {landingConfig.howItWorks.titleHighlight}</span>}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {landingConfig.howItWorks.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="sticky mb-6 last:mb-0"
                style={{ top: `${96 + index * 20}px`, zIndex: index + 1 }}
              >
                <div className="p-6 rounded-xl bg-card border border-border/50 shadow-xl min-h-[180px]">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="step-badge">{step.number}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      <p className="text-sm text-primary flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        <span>{step.detail}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
