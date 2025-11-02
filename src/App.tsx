// src/App.tsx
import PlayerStats from './components/UI/PlayerStats';
import MiningScene from './components/Mining/MiningScene';
import ControlsPanel from './components/Mining/ControlsPanel';
import { useGameLoop } from './hooks/useGameLoop';

export default function App() {
  useGameLoop(); // ← ADAUGĂ ASTA

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 text-white">
      <PlayerStats />
      <main className="pb-32">
        <MiningScene />
      </main>
      <ControlsPanel />
    </div>
  );
}