import PlayerStats from './components/UI/PlayerStats';
import MiningGame from './components/Mining/MiningGame';
import ControlsPanel from './components/Mining/ControlsPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600 text-white">
      <PlayerStats />
      <main className="pb-32">
        <MiningGame />
      </main>
      <ControlsPanel />
    </div>
  );
}