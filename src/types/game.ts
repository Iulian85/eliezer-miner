export interface Stats {
  elzrBalance: number;
  miningPower: number;
  experience: number;
  level: number;
  minersCount: number;
}

export interface Miner {
  id: string;
  type: string;
  efficiency: number;
  position: { x: number; y: number };
  isActive: boolean;
}

export interface GameState {
  stats: Stats;
  miners: Miner[];
}