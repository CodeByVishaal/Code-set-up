import React, { useRef, type ReactNode } from "react";

import { motion, useInView } from "framer-motion";

// Define the props interface
interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  // Fix: Use 'amount' instead of 'threshold' for useInView
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="group"
      style={{ perspective: "1000px" }} // Use style instead of className for perspective
    >
      <div className="relative transform-gpu transition-all duration-500 hover:scale-105 hover:-rotate-1">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
