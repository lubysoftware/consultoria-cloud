import { useState } from "react";
import { Send, FileSearch, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/lib/supabase";
import { landingConfig } from "@/config/landing-config";

const iconMap = [FileSearch, ShieldCheck, BarChart3, ArrowRight];

const benefits = landingConfig.contactForm.benefits.map((benefit, index) => ({
  icon: iconMap[index] || FileSearch,
  text: benefit.text,
}));

const technologies = [
  "Python",
  "Node.js / JavaScript",
  "Java",
  ".NET / C#",
  "Go",
  "Ruby",
  "Outro",
];

const documentationOptions = ["Sim", "Parcial", "Não"];

const painOptions = [
  "Performance",
  "Custo",
  "Manutenibilidade",
  "Risco de segurança",
  "Integrações",
  "Atrasos no roadmap",
];

const systemSizes = [
  "Pequeno (1-5 sistemas)",
  "Médio (6-15 sistemas)",
  "Grande (16+ sistemas)",
];

const urgencies = [
  "Imediata",
  "30 dias",
  "60 dias",
  "Explorando opções",
];

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  technology: "",
  documentation: "",
  pain: "",
  urgency: "",
  systemSize: "",
};

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const payload = {
        origin_url: window.location.href,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        tech_stack: formData.technology ? { technology: formData.technology } : null,
        documentation: formData.documentation || null,
        pain: formData.pain || "Agent AI development request",
        timezone,
        urgency: formData.urgency || null,
        message: null,
        system_size: formData.systemSize ? { size: formData.systemSize } : null,
        raw_payload: {
          ...formData,
          submittedAt: new Date().toISOString(),
        },
      };

      const { error } = await supabase
        .from("contacts_landings")
        .insert([payload])
        .select();

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Um especialista entrará em contato em breve.",
      });

      if (typeof (window as any).gtag_report_conversion === "function") {
        (window as any).gtag_report_conversion();
      }

      setFormData(initialFormData);
    } catch {
      toast({
        title: "Erro",
        description: "Não foi possível enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[70%] h-48 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse 100% 60% at center, rgba(65, 160, 220, 0.5) 0%, rgba(65, 160, 220, 0.2) 40%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div>
            <span className="section-label text-primary">{landingConfig.contactForm.label}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] mt-4 mb-6 font-extrabold leading-[1.35]">
              {landingConfig.contactForm.title}
              {landingConfig.contactForm.titleHighlight && <span className="text-primary"> {landingConfig.contactForm.titleHighlight}</span>}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {landingConfig.contactForm.description}
            </p>

            <div className="flex flex-col gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border/50 max-w-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label className="text-sm text-foreground mb-2 block">Nome completo *</Label>
                <Input
                  placeholder="Nome completo"
                  required
                  className="bg-input border-border/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-foreground mb-2 block">E-mail corporativo *</Label>
                  <Input
                    type="email"
                    placeholder="E-mail corporativo"
                    required
                    className="bg-input border-border/50"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-sm text-foreground mb-2 block">Telefone *</Label>
                  <Input
                    type="tel"
                    placeholder="Telefone"
                    required
                    className="bg-input border-border/50"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm text-foreground mb-2 block">Qual tecnologia vocês usam hoje?</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, technology: value })}>
                  <SelectTrigger className="bg-input border-border/50">
                    <SelectValue placeholder="Selecione uma tecnologia" />
                  </SelectTrigger>
                  <SelectContent>
                    {technologies.map((tech) => (
                      <SelectItem key={tech} value={tech.toLowerCase()}>{tech}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-foreground mb-2 block">Vocês têm documentação?</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, documentation: value })}>
                    <SelectTrigger className="bg-input border-border/50">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {documentationOptions.map((opt) => (
                        <SelectItem key={opt} value={opt.toLowerCase()}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-foreground mb-2 block">Qual é sua principal dor hoje?</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, pain: value })}>
                    <SelectTrigger className="bg-input border-border/50">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {painOptions.map((pain) => (
                        <SelectItem key={pain} value={pain.toLowerCase()}>{pain}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-foreground mb-2 block">Nível de urgência</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                    <SelectTrigger className="bg-input border-border/50">
                      <SelectValue placeholder="Selecione a urgência" />
                    </SelectTrigger>
                    <SelectContent>
                      {urgencies.map((urg) => (
                        <SelectItem key={urg} value={urg.toLowerCase()}>{urg}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-foreground mb-2 block">Tamanho estimado do sistema</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, systemSize: value })}>
                    <SelectTrigger className="bg-input border-border/50">
                      <SelectValue placeholder="Selecione o tamanho" />
                    </SelectTrigger>
                    <SelectContent>
                      {systemSizes.map((size) => (
                        <SelectItem key={size} value={size.toLowerCase()}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full h-12 rounded-full glow-effect"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando…" : landingConfig.contactForm.ctaSubmit}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 rounded-full border-primary text-primary-foreground bg-transparent hover:bg-primary/10"
                  size="lg"
                  disabled={isSubmitting}
                  onClick={() => window.open("https://schedule.luby.co", "_blank")}
                >
                  {landingConfig.contactForm.ctaSchedule}
                </Button>
              </div>
            </form>
          </div>
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
