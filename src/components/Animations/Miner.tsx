// src/components/Mining/Miner.tsx
import { motion } from 'framer-motion';

export default function Miner({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;
  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 0.6, repeat: Infinity }}
      className="w-10 h-12 bg-orange-600 rounded-full relative"
    >
      <div className="absolute top-1 left-1 w-8 h-8 bg-yellow-300 rounded-full"></div>
      <motion.div
        className="absolute -left-3 top-4 w-6 h-1 bg-gray-700 origin-right"
        animate={{ rotate: [0, 45, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
}