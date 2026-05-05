import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "h1" | "h2" | "h3" | "p";
  once?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
  once = false,
}: RevealProps) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};

interface RevealWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
}

export const RevealWords = ({ text, className, wordClassName, delay = 0 }: RevealWordsProps) => {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom leading-[1.05]" aria-hidden="true">
          <motion.span
            className={"inline-block " + (wordClassName ?? "")}
            initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 1 : 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.06 }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
