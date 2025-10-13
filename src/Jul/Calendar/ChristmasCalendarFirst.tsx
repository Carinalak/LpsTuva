import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// Exempelbilder — byt ut mot egna
const images: string[] = Array.from({ length: 24 }, (_, i) =>
  `https://picsum.photos/200/200?random=${i + 1}`
);

const CalendarWrapper = styled.div`
  background: #f5e6e0;
  border-radius: 20px;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const Title = styled.h1`
  color: #b22222;
  font-family: "Georgia", serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// mjuk glidanimation åt vänster
const slideLeft = keyframes`
  0%   { transform: translateX(0) rotateY(0); opacity: 1; }
  40%  { transform: translateX(-20%) rotateY(10deg); }
  100% { transform: translateX(-140%) rotateY(25deg); opacity: 0; }
`;

// mjuk glidanimation åt höger
const slideRight = keyframes`
  0%   { transform: translateX(0) rotateY(0); opacity: 1; }
  40%  { transform: translateX(20%) rotateY(-10deg); }
  100% { transform: translateX(140%) rotateY(-25deg); opacity: 0; }
`;

const DoorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  perspective: 1000px;
  overflow: hidden;
`;

const Door = styled.div<{ opened: boolean; direction: "left" | "right" }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #b22222 0%,
    #c73636 30%,
    #d95f5f 50%,
    #c73636 70%,
    #b22222 100%
  );
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.3, 1);

  /* Pappersriv-effekt (ljus kant på ena sidan) */
  ${({ direction }) =>
    direction === "left"
      ? css`
          border-right: 2px solid rgba(255, 255, 255, 0.6);
        `
      : css`
          border-left: 2px solid rgba(255, 255, 255, 0.6);
        `}

  ${({ opened, direction }) =>
    opened &&
    css`
      animation: ${direction === "left" ? slideLeft : slideRight}
        1.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      pointer-events: none;
    `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

interface DoorState {
  opened: boolean;
  direction: "left" | "right";
}

const ChristmasCalendar: React.FC = () => {
  const [doors, setDoors] = useState<DoorState[]>(
    Array(24)
      .fill(null)
      .map(() => ({
        opened: false,
        direction: Math.random() > 0.5 ? "left" : "right",
      }))
  );

  // Läs från localStorage vid start
  useEffect(() => {
    const stored = localStorage.getItem("christmasCalendar2025");
    if (stored) {
      setDoors(JSON.parse(stored));
    }
  }, []);

  // Spara när något ändras
  useEffect(() => {
    localStorage.setItem("christmasCalendar2025", JSON.stringify(doors));
  }, [doors]);

  const handleOpen = (index: number) => {
    const today = new Date().getDate();
    if (index + 1 <= today) {
      const newDoors = [...doors];
      newDoors[index].opened = true;
      setDoors(newDoors);
    } else {
      alert(`🎅 Du kan inte öppna lucka ${index + 1} ännu!`);
    }
  };

  return (
    <CalendarWrapper>
      <Title>🎄 Julkalender 2025 🎁</Title>
      <Grid>
        {images.map((img, index) => (
          <DoorWrapper key={index}>
            <Image src={img} alt={`Lucka ${index + 1}`} />
            <Door
              opened={doors[index].opened}
              direction={doors[index].direction}
              onClick={() => handleOpen(index)}
            >
              {index + 1}
            </Door>
          </DoorWrapper>
        ))}
      </Grid>
    </CalendarWrapper>
  );
};

export default ChristmasCalendar;
