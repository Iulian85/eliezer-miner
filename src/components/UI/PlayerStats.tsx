import { Zap, Coins, Gem } from 'lucide-react';
import { useGameStore } from '../../hooks/useGameStore';
import { format } from '../../utils/formatNumber';

export default function PlayerStats() {
  const { stats } = useGameStore();
  const passive = 563_000_000 + stats.minersCount * 100;

  return (
    <div className="p-4 bg-white/10 backdrop-blur-md flex justify-between text-sm">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-purple-400" />
        <div>
          <div className="text-xs text-purple-200">PASIV</div>
          <div className="font-bold">{format(passive)}/s</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Coins className="w-5 h-5 text-yellow-400" />
        <div>
          <div className="text-xs text-yellow-200">CASH</div>
          <div className="font-bold">{format(stats.elzrBalance)}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Gem className="w-5 h-5 text-green-400" />
        <div>
          <div className="text-xs text-green-200">SUPER</div>
          <div className="font-bold">111</div>
        </div>
      </div>
    </div>
  );
}