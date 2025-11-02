// src/components/Mining/MiningScene.tsx
import { GameState } from '../../types/game';
import Miner from '../Animations/Miner';
import Lift from '../Animations/Lift';
import Wheelbarrow from '../Animations/Wheelbarrow';

type MiningSceneProps = {
  gameState: GameState;
};

const MiningScene = ({ gameState }: MiningSceneProps) => {
  return (
    <div className="mining-scene">
      {/* Background-ul minei vizuale */}
      <div className="mine-background">
        <div className="mine-tunnel"></div>
        <div className="mine-walls"></div>
      </div>
      
      {/* Lift animat */}
      <Lift 
        isActive={gameState.lift.isMoving}
        currentLevel={gameState.lift.currentLevel}
        speed={gameState.lift.speed * 1000}
      />
      
      {/* Minerii vizuali */}
      {gameState.miners.map((miner, index) => (
        <Miner
          key={miner.id}
          isActive={miner.isActive}
          efficiency={miner.efficiency}
          position={{
            x: 100 + (index * 80),
            y: 250 - (index * 20)
          }}
          type={miner.type}
          speed={miner.efficiency} // ⬅️ Acum pasăm speed
        />
      ))}
      
      {/* Roaba animată */}
      <Wheelbarrow 
        isMoving={gameState.miners.length > 0}
        speed={1.5}
        capacity={gameState.lift.capacity}
      />

      // Înlocuiește div-ul gol cu elemente vizuale
<div className="mining-scene">
  {/* Structura minei */}
  <div className="mine-structure">
    <div className="mine-level level-1"></div>
    <div className="mine-level level-2"></div>
    <div className="mine-level level-3"></div>
  </div>
  
  {/* Lift vizual */}
  <div className="visual-lift">
    <div className="lift-cage"></div>
    <div className="lift-cable"></div>
  </div>
  
  {/* Minerii vizuali */}
  <div className="visual-miners">
    <div className="miner-character mining"></div>
    <div className="miner-character mining"></div>
  </div>
</div>

      {/* Numere animate pentru resurse */}
      <div className="animated-numbers">
        <div className="animated-number" style={{ top: '20px', left: '20px' }}>
          {gameState.stats.elzrBalance.toFixed(0)} ELZR/s
        </div>
        <div className="animated-number" style={{ top: '50px', left: '20px' }}>
          {gameState.stats.elzrBalance.toFixed(0)} ELZR
        </div>
      </div>
    </div>
  );
};

export default MiningScene;