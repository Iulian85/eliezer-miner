// src/components/Mining/Lift.tsx
import { motion } from 'framer-motion';

export default function Lift({ isActive }: { isActive: boolean }) {
  if (!isActive) return null;

  return (
    <div className="absolute left-1/2 top-20 -translate-x-1/2 w-16">
      {/* Șina liftului */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-gray-800 border-x-4 border-gray-950"></div>
      
      {/* Căruța */}
      <motion.div
        className="relative w-16 h-16 bg-orange-700 rounded-lg shadow-xl border-4 border-orange-900"
        animate={{ y: [0, -320, -320, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-2 bg-yellow-400 rounded-sm"></div>
        <div className="absolute inset-x-0 top-1 h-2 bg-orange-900"></div>
      </motion.div>
    </div>
  );
}