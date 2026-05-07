"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    // Force hide scrollbars during transition to prevent jump/glitch
    document.documentElement.style.overflowX = 'hidden';
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      document.documentElement.style.overflowX = '';
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflowX = '';
    };
  }, [pathname]);

  const barVariants: Variants = {
    initial: { scaleY: 0 },
    animate: (i: number) => ({
      scaleY: [0, 1, 1, 0],
      originY: [0, 0, 1, 1],
      transition: {
        duration: 0.8,
        times: [0, 0.4, 0.6, 1],
        ease: "easeInOut",
        delay: i * 0.05,
      },
    }),
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Staggered Vertical Bars */}
      <div className="fixed inset-0 z-9999 pointer-events-none grid grid-cols-5 overflow-hidden w-full">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={barVariants}
            initial="initial"
            animate={isTransitioning ? "animate" : "initial"}
            className="bg-navy w-full h-full"
          />
        ))}
      </div>
    </>
  );
}
