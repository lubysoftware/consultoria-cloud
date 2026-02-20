import { useState } from "react";
import { landingConfig } from "@/config/landing-config";

interface Technology {
  name: string;
  slug?: string;
  alt?: string;
}

interface TechnologiesSectionProps {
  technologies: Technology[];
}

const TechLogo = ({ tech, imagePath }: { tech: Technology; imagePath: string }) => {
  const [imageError, setImageError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Erro ao carregar imagem: ${imagePath}`, e);
    setImageError(true);
  };

  return (
    <div className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 card-hover min-h-[120px]">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {!imageError ? (
          <img
            src={imagePath}
            alt={tech.alt || tech.name}
            className="max-h-12 max-w-full object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
            onError={handleError}
          />
        ) : (
          <div className="text-muted-foreground text-sm font-medium text-center">
            {tech.name}
          </div>
        )}
      </div>
    </div>
  );
};

export const TechnologiesSection = ({ technologies }: TechnologiesSectionProps) => {
  const slugMap: Record<string, string> = {
    "AWS": "aws",
    "Google Cloud": "gcp",
    "Microsoft Azure": "azure",
    "Kubernetes": "kubernetes",
    "Terraform": "terraform",
    "Docker": "docker",
    "Cloudflare": "cloudflare",
    "Datadog": "datadog",
  };

  const getSlug = (name: string): string => {
    return slugMap[name] || name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-label text-primary">{landingConfig.technologies.label}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] mt-4 font-extrabold leading-[1.35] max-w-3xl mx-auto">
            {landingConfig.technologies.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {landingConfig.technologies.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {technologies.map((tech, index) => {
            const slug = tech.slug || getSlug(tech.name);
            const imagePath = `${import.meta.env.BASE_URL}assets/tech/${slug}.svg`;
            return <TechLogo key={index} tech={tech} imagePath={imagePath} />;
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">E muito mais…</p>
        </div>
      </div>
    </section>
  );
};
