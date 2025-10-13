import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// 🔹 Importera dina lokala bilder
import BunnyRedLeaf from "../../assets/images/galleri/autumn/BunnyRedLeaf.jpg";
import HundOrangeLov from "../../assets/images/galleri/autumn/Hund_orange_lov.jpg";
import Gungar from "../../assets/images/galleri/autumn/Gungar.jpg";
import SpindelOrangeLov1 from "../../assets/images/galleri/autumn/Spindel_orangelov1.jpg";
import RosaKatt from "../../assets/images/galleri/winter/rosa_katt.jpg";
import SnowKana from "../../assets/images/galleri/winter/Snow_kana.jpg";
import RavMossaSnow from "../../assets/images/galleri/winter/Rav_mossa_snow.jpg";
import ValrossIs from "../../assets/images/galleri/winter/valross_is.jpg";
import KaninPulka1 from "../../assets/images/galleri/winter/kanin_pulka.jpg";
import KaninPulka2 from "../../assets/images/galleri/winter/kanin_pulka2.jpg";

// 🔹 Bilder med hårdkodat lucknummer
const images = [
  { src: Gungar, alt: "Petshoparna gungar på en gul gunga", number: 1 },
  { src: RosaKatt, alt: "Rosa katt", number: 2 },
  { src: BunnyRedLeaf, alt: "Kanin med ett rött löv", number: 3 },
  { src: SpindelOrangeLov1, alt: "Spindel på gren", number: 4 },
  { src: HundOrangeLov, alt: "Hund bland orange löv", number: 5 },
  { src: SnowKana, alt: "Snökana", number: 6 },
  { src: ValrossIs, alt: "Valross i is", number: 7 },
  { src: SpindelOrangeLov1, alt: "Spindel på gren", number: 8 },
  { src: KaninPulka1, alt: "Kanin på pulka", number: 9 },
  { src: KaninPulka2, alt: "Kanin på pulka", number: 10 },
  { src: BunnyRedLeaf, alt: "Kanin med ett rött löv", number: 11 },
  { src: HundOrangeLov, alt: "Hund bland orange löv", number: 12 },
  { src: Gungar, alt: "Petshoparna gungar på en gul gunga", number: 13 },
  { src: SpindelOrangeLov1, alt: "Spindel på gren", number: 14 },
  { src: RavMossaSnow, alt: "Räv i mossa", number: 15 },
  { src: SnowKana, alt: "Snökana", number: 16 },
  { src: RavMossaSnow, alt: "Räv i mossa", number: 17 },
  { src: ValrossIs, alt: "Valross i is", number: 18 },
  { src: KaninPulka1, alt: "Kanin på pulka", number: 19 },
  { src: KaninPulka2, alt: "Kanin på pulka", number: 20 },
  { src: BunnyRedLeaf, alt: "Kanin med ett rött löv", number: 21 },
  { src: HundOrangeLov, alt: "Hund bland orange löv", number: 22 },
  { src: Gungar, alt: "Petshoparna gungar på en gul gunga", number: 23 },
  { src: SpindelOrangeLov1, alt: "Spindel på gren", number: 24 },
];

// 🔹 Styled-components och animationer
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

const slideLeft = keyframes`
  0%   { transform: translateX(0) rotateY(0); opacity: 1; }
  40%  { transform: translateX(-20%) rotateY(10deg); }
  100% { transform: translateX(-140%) rotateY(25deg); opacity: 0; }
`;

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
  border-radius: 10px;
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

  ${({ direction }) =>
    direction === "left"
      ? css`border-right: 2px solid rgba(255, 255, 255, 0.6);`
      : css`border-left: 2px solid rgba(255, 255, 255, 0.6);`}

  ${({ opened, direction }) =>
    opened &&
    css`
      animation: ${direction === "left" ? slideLeft : slideRight}
        1.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      pointer-events: none;
    `}
`;

const Image = styled.img<{ visible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: opacity 0.8s ease-in-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

interface DoorState {
  opened: boolean;
  direction: "left" | "right";
}

const ChristmasCalendar: React.FC = () => {
  const [doors, setDoors] = useState<DoorState[]>(
    Array(images.length)
      .fill(null)
      .map(() => ({
        opened: false,
        direction: Math.random() > 0.5 ? "left" : "right",
      }))
  );

  // Läs tidigare öppnade luckor från localStorage
  useEffect(() => {
    const stored = localStorage.getItem("christmasCalendar2025");
    if (stored) setDoors(JSON.parse(stored));
  }, []);

  // Spara när luckor öppnas
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

  // Sortera bilderna efter den ordning du vill visa i gridden
  const gridOrder = [
    3, 0, 5, 7, 2, 8, 1, 4, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 22
  ]; // Exempel: positioner i gridden

  return (
    <CalendarWrapper>
      <Title>🎄 Julkalender 2025 🎁</Title>
      <Grid>
        {gridOrder.map((imgIndex) => (
          <DoorWrapper key={images[imgIndex].number}>
            <Image
              src={images[imgIndex].src}
              alt={images[imgIndex].alt}
              visible={doors[images[imgIndex].number - 1].opened}
            />
            <Door
              opened={doors[images[imgIndex].number - 1].opened}
              direction={doors[images[imgIndex].number - 1].direction}
              onClick={() => handleOpen(images[imgIndex].number - 1)}
            >
              {images[imgIndex].number}
            </Door>
          </DoorWrapper>
        ))}
      </Grid>
    </CalendarWrapper>
  );
};

export default ChristmasCalendar;
