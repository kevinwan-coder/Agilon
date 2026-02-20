import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  children: ReactNode;
}

export function StepCard({ children }: StepCardProps) {
  return (
    <div className="max-w-[1260px] mx-auto mt-5 mb-8 px-5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1a1a1a] rounded-[14px] p-8 shadow-lg border border-border"
      >
        {children}
      </motion.div>
    </div>
  );
}
