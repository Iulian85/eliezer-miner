// src/hooks/useGameLoop.ts
import { useEffect } from 'react';
import { useGameStore } from './useGameStore';

export function useGameLoop() {
  useEffect(() => {
    const interval = setInterval(() => {
      const { stats } = useGameStore.getState();
      const passiveIncome = 563_000_000 + stats.minersCount * 100;

      useGameStore.setState((prev) => ({
        stats: {
          ...prev.stats,
          elzrBalance: prev.stats.elzrBalance + passiveIncome
        }
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
}