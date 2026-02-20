import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { WhyLuby } from "@/components/WhyLuby";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { Clients } from "@/components/Clients";
import { Deliveries } from "@/components/Deliveries";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { landingConfig } from "@/config/landing-config";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <ScrollAnimation animation="fade-up">
        <PainPoints />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <HowItWorks />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up">
        <UseCases />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <WhyLuby />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up">
        <TechnologiesSection technologies={landingConfig.technologies.items} />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade">
        <Clients />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up">
        <Deliveries />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up" delay={0.1}>
        <ContactForm />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade-up">
        <FAQ />
      </ScrollAnimation>
      
      <ScrollAnimation animation="fade" delay={0.1}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
};

export default Index;
