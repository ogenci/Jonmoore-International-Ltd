import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const MobileStickyCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#contact"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 inline-flex items-center justify-between gap-3 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-2xl md:hidden"
        >
          Request a Quote
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};
