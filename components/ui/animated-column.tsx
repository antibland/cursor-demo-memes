"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedColumnProps {
  children: ReactNode;
  direction: "up" | "down";
}

export function AnimatedColumn({ children, direction }: AnimatedColumnProps) {
  return (
    <motion.div
      animate={{
        y: direction === "up" ? [-20, 20] : [20, -20],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  );
}
