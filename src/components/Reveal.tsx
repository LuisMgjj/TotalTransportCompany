import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "fade" | "zoom";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: RevealVariant;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
}

const variantClasses: Record<RevealVariant, string> = {
  up: "translate-y-6",
  left: "-translate-x-6",
  right: "translate-x-6",
  fade: "",
  zoom: "scale-95",
};

const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 700,
  variant = "up",
  once = true,
  as: Tag = "div",
  style,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const Component = Tag as keyof JSX.IntrinsicElements;
  const transform = visible ? "" : variantClasses[variant];

  return (
    <Component
      ref={ref as never}
      className={cn(
        "will-change-transform transition-all motion-reduce:transition-none",
        visible ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${transform}`,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        ...style,
      }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
