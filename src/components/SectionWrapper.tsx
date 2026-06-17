import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: [0.215, 0.610, 0.355, 1.0] }}
      className={`relative w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}
