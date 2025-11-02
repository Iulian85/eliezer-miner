// src/components/Mining/Manager.tsx
type ManagerType = 'boss' | 'girl' | 'boy' | 'worker';

export default function Manager({ type }: { type: ManagerType }) {
  const colors: Record<ManagerType, string> = {
    boss: 'bg-purple-600',
    girl: 'bg-pink-500',
    boy: 'bg-blue-600',
    worker: 'bg-green-600'
  };

  return (
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
      <div className={`w-12 h-12 ${colors[type]} rounded-full border-4 border-white shadow-lg`}></div>
      <div className="absolute top-2 left-2 w-8 h-8 bg-white rounded-full"></div>
      <div className="absolute top-4 left-3 w-4 h-2 bg-black rounded-full"></div>
    </div>
  );
}