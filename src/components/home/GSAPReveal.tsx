import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  stagger?: number;
}

export const GSAPReveal = ({
  children,
  delay = 0,
  y = 30,
  duration = 1,
  className = "",
  stagger = 0,
}: GSAPRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const childrenArray = gsap.utils.toArray(el.children);

    gsap.fromTo(
      childrenArray.length > 0 && stagger > 0 ? childrenArray : el,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay, y, duration, stagger]);

  return <div ref={elementRef} className={className}>{children}</div>;
};
