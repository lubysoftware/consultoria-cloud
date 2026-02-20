import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Animation wrapper component
interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
  duration?: number;
}

export const ScrollAnimation = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
}: ScrollAnimationProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
      transitionDelay: `${delay}s`,
    };

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return { ...baseStyles, opacity: 0, transform: "translateY(40px)" };
        case "fade-left":
          return { ...baseStyles, opacity: 0, transform: "translateX(-40px)" };
        case "fade-right":
          return { ...baseStyles, opacity: 0, transform: "translateX(40px)" };
        case "scale":
          return { ...baseStyles, opacity: 0, transform: "scale(0.95)" };
        case "fade":
          return { ...baseStyles, opacity: 0 };
        default:
          return { ...baseStyles, opacity: 0, transform: "translateY(40px)" };
      }
    }

    return { ...baseStyles, opacity: 1, transform: "translateY(0) translateX(0) scale(1)" };
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  );
};
