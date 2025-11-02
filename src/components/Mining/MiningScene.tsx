// src/components/Mining/MiningScene.tsx
import { motion } from 'framer-motion';
import { useGameStore } from '../../hooks/useGameStore';
import Miner from '../Animations/Miner';
import Lift from '../Animations/Lift';
import { format } from '../../utils/formatNumber';

const levels = [
  { id: 161, income: 563_000_000, x: 15, y: 25 },
  { id: 157, income: 450_000_000, x: 65, y: 25 },
  { id: 90, income: 10_000_000, x: 30, y: 60 },
  { id: 59, income: 5_000_000, x: 70, y: 75 },
];

export default function MiningScene() {
  const { updateState, stats, clickEffect, setClickEffect } = useGameStore();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    updateState((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        elzrBalance: prev.stats.elzrBalance + stats.miningPower
      }
    }));

    setClickEffect({ x, y, amount: stats.miningPower });
    setTimeout(() => setClickEffect(null), 800);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-sky-300">
      {/* FUNDAL */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="url(#sky)" />
          <defs>
            <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#E0F6FF" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="15" r="8" fill="#FFD700" />
          <path d="M0,40 Q25,20 50,35 T100,40 L100,100 L0,100 Z" fill="#8B7355" />
        </svg>
      </div>

      {/* LIFT */}
      <div className="absolute inset-0 z-20">
        <Lift isActive={true} />
      </div>

      {/* NIVELURI */}
      <div className="absolute inset-0 z-10">
        {levels.map(level => (
          <div
            key={level.id}
            className="absolute"
            style={{ left: `${level.x}%`, top: `${level.y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <motion.div
              className="relative cursor-pointer"
              onClick={handleClick}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white p-3 rounded-lg shadow-2xl border-4 border-blue-950 text-center w-32">
                <div className="font-bold text-lg">Nivel {level.id}</div>
                <div className="text-yellow-300 text-sm font-bold">{format(level.income)}/s</div>
              </div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                <Miner isActive={true} />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* CLICK EFFECT */}
      {clickEffect && (
        <motion.div
          className="absolute text-yellow-400 font-bold text-3xl pointer-events-none drop-shadow-lg z-30"
          style={{ left: clickEffect.x - 30, top: clickEffect.y - 30 }}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          +{format(clickEffect.amount)}
        </motion.div>
      )}
    </div>
  );
}