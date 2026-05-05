import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  withArrow?: boolean;
}

export const MagneticButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  withArrow = true,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium tracking-wide transition-colors will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary-glow"
      : "border border-foreground/20 text-foreground hover:bg-foreground/5";

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <span className="relative z-10 grid place-items-center rounded-full bg-foreground/0 transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn(base, styles, className)}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: sx, y: sy }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={cn(base, styles, className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
    >
      {inner}
    </motion.button>
  );
};
