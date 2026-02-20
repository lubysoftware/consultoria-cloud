import { useState } from "react";
import { Send, FileSearch, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
import { normalizeBrazilPhone, isValidBrazilPhone } from "@/lib/phone";
import { landingConfig } from "@/config/landing-config";

const CONTACTS_EDGE_FUNCTION_URL =
  "https://pbvjsixlqnuzcnqahbxu.supabase.co/functions/v1/contacts-landings-br";

const iconMap = [FileSearch, ShieldCheck, BarChart3, ArrowRight];
const benefits = landingConfig.contactForm.benefits.map((benefit, index) => ({
  icon: iconMap[index] || FileSearch,
  text: benefit.text,
}));

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phoneRaw = formData.phone.trim();

    if (!name || !email || !phoneRaw) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha nome, e-mail e telefone.",
        variant: "destructive",
      });
      return;
    }

    if (!isValidBrazilPhone(phoneRaw)) {
      toast({
        title: "Telefone inválido",
        description: "Use DDD + número (10 ou 11 dígitos).",
        variant: "destructive",
      });
      return;
    }

    const normalizedPhone = normalizeBrazilPhone(phoneRaw);
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!anonKey) {
      toast({
        title: "Erro de configuração",
        description: "Chave do Supabase não configurada.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const originUrl = window.location.href;
      const payload = {
        origin_url: originUrl,
        name,
        email,
        phone: normalizedPhone,
        company_name: null,
        profile: landingConfig.themeLabel,
        message: formData.message?.trim() || null,
        launch_goal: null,
        regulated_operation: null,
        urgency: null,
        raw_payload: {
          name,
          email,
          phone: normalizedPhone,
          message: formData.message?.trim() || null,
          submittedAt: new Date().toISOString(),
        },
        crm_sync: null,
      };

      const response = await fetch(CONTACTS_EDGE_FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${anonKey}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        const errMsg = (errBody as { error?: string })?.error;
        throw new Error(errMsg || "Falha no envio");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Um especialista entrará em contato em breve.",
      });

      if (typeof (window as any).gtag_report_conversion === "function") {
        (window as any).gtag_report_conversion();
      }

      setFormData(initialFormData);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Não foi possível enviar o formulário. Tente novamente.";
      toast({
        title: "Erro",
        description: message,
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
          background:
            "radial-gradient(ellipse 100% 60% at center, rgba(65, 160, 220, 0.5) 0%, rgba(65, 160, 220, 0.2) 40%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div>
            <span className="section-label text-primary">{landingConfig.contactForm.label}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] mt-4 mb-6 font-extrabold leading-[1.35]">
              {landingConfig.contactForm.title}
              {landingConfig.contactForm.titleHighlight && (
                <span className="text-primary"> {landingConfig.contactForm.titleHighlight}</span>
              )}
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

              <div>
                <Label className="text-sm text-foreground mb-2 block">E-mail *</Label>
                <Input
                  type="email"
                  placeholder="E-mail"
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
                  placeholder="(00) 00000-0000"
                  required
                  className="bg-input border-border/50"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <Label className="text-sm text-foreground mb-2 block">Descrição</Label>
                <Textarea
                  placeholder="Descreva sua necessidade ou dúvida"
                  className="bg-input border-border/50 min-h-[100px]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
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
          background:
            "radial-gradient(ellipse 100% 60% at center, rgba(65, 160, 220, 0.5) 0%, rgba(65, 160, 220, 0.2) 40%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />
    </section>
  );
};
