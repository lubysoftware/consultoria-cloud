import { Rocket, ShieldCheck, Lock, BarChart3, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { landingConfig } from "@/config/landing-config";

const iconMap = [Rocket, ShieldCheck, Lock, BarChart3, DollarSign];

const differentials = landingConfig.whyLuby.differentials.map((diff, index) => ({
  icon: iconMap[index] || Rocket,
  title: diff.title,
  description: diff.description,
}));

export const WhyLuby = () => {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <span className="section-label text-primary">{landingConfig.whyLuby.label}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mt-4 font-extrabold leading-[1.35]">
              {landingConfig.whyLuby.title}
              {landingConfig.whyLuby.titleHighlight && <span className="text-primary"> {landingConfig.whyLuby.titleHighlight}</span>}
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              {landingConfig.whyLuby.description}
            </p>
            <Button size="lg" className="rounded-full px-8 glow-effect mt-8" asChild>
              <a href="#contato">{landingConfig.whyLuby.cta}</a>
            </Button>
          </div>

          <div className="space-y-4">
            {differentials.map((diff, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 card-hover"
              >
                <div className="icon-box-primary flex-shrink-0">
                  <diff.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{diff.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
