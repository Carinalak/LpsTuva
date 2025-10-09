import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe-animation för snöflingornas fall
const fall = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0.5;
  }
`;

// Styled-komponent för en enskild snöflinga
const Snowflake = styled.div`
  position: absolute;
  top: -10px; /* Start ovanför skärmen */
  background-color: white;
  border-radius: 50%;
  opacity: 0.8;
  pointer-events: none;
  animation: ${fall} linear infinite;
`;

// Föräldrakomponent som täcker hela viewporten och förhindrar att snöflingor påverkar sidans storlek
const SnowContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Döljer flingor som går utanför */
  z-index: 9999;
  pointer-events: none; /* Gör att snön inte kan interageras med */
`;

// SnowFall-komponenten
const SnowFall: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const [snowflakes, setSnowflakes] = useState<
    { id: string; left: string; size: string; duration: string; delay: string }[]
  >([]);

  // Generera snöflingor när komponenten mountar
  useEffect(() => {
    const generateSnowflakes = (count: number) =>
      Array.from({ length: count }).map(() => ({
        id: Math.random().toString(36).substr(2, 9),
        left: `${Math.random() * 100}%`, // Random position horisontellt
        size: `${Math.random() * 10 + 5}px`, // Mellan 5px och 15px
        duration: `${Math.random() * 4 + 4}s`, // Mellan 5s och 10s
        delay: `${Math.random() * 4}s`, // Mellan 0s och 5s för fördröjd start
      }));

    setSnowflakes(generateSnowflakes(count));
  }, [count]);

  return (
    <SnowContainer>
      {snowflakes.map((flake) => (
        <Snowflake
          key={flake.id}
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            animationDuration: flake.duration,
            animationDelay: flake.delay, // Fördröjning innan animationen startar
          }}
        />
      ))}
    </SnowContainer>
  );
};

export default SnowFall;
