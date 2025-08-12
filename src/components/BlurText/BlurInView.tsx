"use client";
import { motion } from "framer-motion";
import React from "react";

type BlurInViewProps = {
  children: React.ReactNode;
  delayPerChild?: number; // optional delay for stagger if you want
};

const BlurInView = ({ children, delayPerChild = 0.05 }: BlurInViewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center font-sans"
    >
      {children}
    </motion.div>
  );
};

export default BlurInView;
