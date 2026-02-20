import type { LucideIcon } from "lucide-react";
import {
  Headphones,
  Users,
  FileText,
  Settings,
  Code,
  ShoppingCart,
  Cloud,
  Server,
  Shield,
  Database,
  Layers,
  BarChart3,
  DollarSign,
  RefreshCw,
  Box,
  Smartphone,
  Layout,
  Target,
  Search,
  Building2,
  BookOpen,
  Cpu,
  Sparkles,
  UserPlus,
  Briefcase,
  GitBranch,
  Lock,
  Activity,
  Zap,
} from "lucide-react";
import { landingConfig } from "@/config/landing-config";

const USE_CASE_ICONS: Record<string, LucideIcon> = {
  Headphones,
  Users,
  FileText,
  Settings,
  Code,
  ShoppingCart,
  Cloud,
  Server,
  Shield,
  Database,
  Layers,
  BarChart3,
  DollarSign,
  RefreshCw,
  Box,
  Smartphone,
  Layout,
  Target,
  Search,
  Building2,
  BookOpen,
  Cpu,
  Sparkles,
  UserPlus,
  Briefcase,
  GitBranch,
  Lock,
  Activity,
  Zap,
};

const iconMap: LucideIcon[] = [Headphones, Users, FileText, Settings, Code, ShoppingCart];

const useCases = landingConfig.useCases.items.map((item, index) => ({
  icon: (item.icon && USE_CASE_ICONS[item.icon]) ? USE_CASE_ICONS[item.icon] : iconMap[index] ?? Headphones,
  title: item.title,
  description: item.description,
}));

export const UseCases = () => {
  return (
    <section id="casos" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[70%] h-48 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse 100% 60% at center, rgba(65, 160, 220, 0.5) 0%, rgba(65, 160, 220, 0.2) 40%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label text-primary">{landingConfig.useCases.label}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mt-4 font-extrabold leading-[1.35] max-w-3xl mx-auto">
            {landingConfig.useCases.title}
            {landingConfig.useCases.titleHighlight && <span className="text-primary"> {landingConfig.useCases.titleHighlight}</span>}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border/50 card-hover"
            >
              <div className="icon-box-primary mb-4">
                <useCase.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[70%] h-48 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse 100% 60% at center, rgba(65, 160, 220, 0.5) 0%, rgba(65, 160, 220, 0.2) 40%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />
    </section>
  );
};
