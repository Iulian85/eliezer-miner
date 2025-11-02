// hooks/useGameLoop.ts
import { create } from 'zustand';
import WebApp from '@twa-dev/sdk';

interface GameState {
  cash: number;
  passiveIncome: number;
  superCash: number;
  clickPower: number;
  clickEffect: { x: number; y: number; amount: number } | null;

  addCash: (amount: number) => void;
  showClickEffect: (x: number, y: number, amount: number) => void;
  loadGame: () => void;
  saveGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  cash: 0,
  passiveIncome: 563_000_000,
  superCash: 111,
  clickPower: 1,
  clickEffect: null,

  addCash: (amount) => set((state) => ({ cash: state.cash + amount })),

  showClickEffect: (x, y, amount) => {
    set({ clickEffect: { x, y, amount } });
    setTimeout(() => set({ clickEffect: null }), 800);
  },

  loadGame: async () => {
    try {
      const saved = await WebApp.CloudStorage.getItem('save');
      if (saved) set(JSON.parse(saved));
    } catch {}
  },

  saveGame: async () => {
    const state = get();
    await WebApp.CloudStorage.setItem('save', JSON.stringify({
      cash: state.cash,
      superCash: state.superCash,
    }));
  },
}));

// Game loop
setInterval(() => {
  const { passiveIncome, addCash } = useGameStore.getState();
  addCash(passiveIncome);
}, 1000);