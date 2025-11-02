// src/components/Animations/Wheelbarrow.tsx
import { useEffect, useState } from 'react';

type WheelbarrowProps = {
  isMoving: boolean;
  speed: number;
  capacity: number;
};

const Wheelbarrow = ({ 
  isMoving, 
  speed, 
  capacity 
}: WheelbarrowProps) => {
  const [position, setPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);
  const [loadAmount, setLoadAmount] = useState(0);

  useEffect(() => {
    if (isMoving) {
      const interval = setInterval(() => {
        setPosition((prev) => {
          const nextPos = (prev + 1) % 100;
          
          // Simulează încărcare/descărcare la capete
          if (nextPos === 0 || nextPos === 95) {
            setIsLoaded((prev) => !prev);
            setLoadAmount(isLoaded ? capacity : 0);
          }
          
          return nextPos;
        });
      }, 1000 / speed);

      return () => clearInterval(interval);
    }
  }, [isMoving, speed, capacity, isLoaded]);

  return (
    <div 
      className={`wheelbarrow ${isMoving ? 'moving' : 'stopped'} ${isLoaded ? 'loaded' : 'empty'}`}
      style={{
        left: `${position}%`,
        transition: `left ${1000 / speed}ms linear`
      }}
    >
      <div className="wheelbarrow-body">
        <div className="content">
          {isLoaded ? `⛏️${loadAmount}` : ' '}
        </div>
        <div className="wheel left"></div>
        <div className="wheel right"></div>
      </div>
      {isMoving && <div className="dust-effect">💨</div>}
    </div>
  );
};

export default Wheelbarrow;