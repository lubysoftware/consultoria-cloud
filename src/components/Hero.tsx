import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { landingConfig } from "@/config/landing-config";

const benefits = landingConfig.hero.benefits;

const InfiniteCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      const firstSetWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= firstSetWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const duplicatedBenefits = [...benefits, ...benefits];

  return (
    <div className="relative w-screen mb-10 animate-slide-up" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#091426] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#091426] to-transparent z-10 pointer-events-none" />
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden px-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedBenefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-card/80 border border-border/50 backdrop-blur-sm whitespace-nowrap flex-shrink-0"
          >
            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Hero = () => {
  const heroBg = `${import.meta.env.BASE_URL}assets/${landingConfig.hero.backgroundImage}`;
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 section-divider overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 border border-border/50 mb-8 animate-fade-in backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">{landingConfig.hero.badge}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.35] mb-6 animate-slide-up font-extrabold">
            {landingConfig.hero.title}{" "}
            {landingConfig.hero.titleHighlight && <span className="text-primary">{landingConfig.hero.titleHighlight}</span>}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed animate-slide-up">
            {landingConfig.hero.subtitle}
            {landingConfig.hero.subtitleHighlight && <strong className="text-foreground font-semibold"> {landingConfig.hero.subtitleHighlight}</strong>}
          </p>

          <InfiniteCarousel />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button size="lg" className="rounded-full px-8 glow-effect group" asChild>
              <a href="#contato">
                {landingConfig.hero.ctaPrimary}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-primary text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
              <a href="#como-funciona">{landingConfig.hero.ctaSecondary}</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
