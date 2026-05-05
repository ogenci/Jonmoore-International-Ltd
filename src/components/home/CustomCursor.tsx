import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const edgeX = useSpring(cursorX, springConfig);
  const edgeY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-primary/30"
        animate={{
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
          backgroundColor: isHovered ? "rgba(var(--primary), 0.05)" : "transparent",
        }}
        style={{
          x: edgeX,
          y: edgeY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <style>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
          .pointer-events-none { display: none !important; }
        }
      `}</style>
    </>
  );
};
