import { create } from 'zustand';
import { GameState } from '../types/game';

interface ClickEffect {
  x: number;
  y: number;
  amount: number;
}

const initialState: GameState = {
  stats: {
    elzrBalance: 0,
    miningPower: 1,
    experience: 0,
    level: 1,
    minersCount: 0
  },
  miners: []
};

export const useGameStore = create<GameState & {
  updateState: (fn: (state: GameState) => GameState) => void;
  clickEffect: ClickEffect | null;
  setClickEffect: (effect: ClickEffect | null) => void;
}>((set) => ({
  ...initialState,
  updateState: (fn) => set(fn),
  clickEffect: null,
  setClickEffect: (effect) => set({ clickEffect: effect }),
}));

// Venit pasiv
setInterval(() => {
  useGameStore.setState((prev) => ({
    stats: {
      ...prev.stats,
      elzrBalance: prev.stats.elzrBalance + 563_000_000 + prev.stats.minersCount * 100
    }
  }));
}, 1000);