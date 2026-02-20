import {
  AlertTriangle,
  ShieldOff,
  Eye,
  BarChart3,
  Plug,
  DollarSign,
  Clock,
  ScrollText,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { landingConfig } from "@/config/landing-config";

const iconMap = [
  AlertTriangle,
  ShieldOff,
  Eye,
  BarChart3,
  Plug,
  DollarSign,
  Clock,
  ScrollText,
  Users,
];

const painPoints = landingConfig.painPoints.items.map((item, index) => ({
  icon: iconMap[index] || AlertTriangle,
  title: item.title,
  description: item.description,
}));

export const PainPoints = () => {
  return (
    <section id="dores" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label text-[hsl(var(--coral))]">
            {landingConfig.painPoints.label}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mt-4 max-w-4xl mx-auto font-extrabold leading-[1.35]">
            {landingConfig.painPoints.title}
            {landingConfig.painPoints.titleHighlight && <span className="text-primary"> {landingConfig.painPoints.titleHighlight}</span>}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {landingConfig.painPoints.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border/50 card-hover-coral"
            >
              <div className="icon-box-coral mb-4">
                <point.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="rounded-full px-8 glow-effect" asChild>
            <a href="#contato">{landingConfig.painPoints.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
