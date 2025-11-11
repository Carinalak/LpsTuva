import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { CalendarImages } from "./CalendarImages";

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
  cursor: zoom-in;
`;

// 🔹 Modal för gallery
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 10px;
    display: block;
    margin: 0 auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #b22222;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  &:hover { background: #8b1a1a; }
`;

const NavButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  color: white;
  border: none;
  font-size: 40px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover { background: rgba(0,0,0,0.6); }
`;

// 🔹 Komponent
interface DoorState { opened: boolean; direction: "left" | "right"; }

const Julkalender: React.FC = () => {
  const [doors, setDoors] = useState<DoorState[]>(
    Array(CalendarImages.length).fill({ opened: false, direction: "left" }).map(d => ({ ...d, direction: Math.random() > 0.5 ? "left" : "right" }))
  );
  const [modalState, setModalState] = useState<{ images: {src:string,alt:string}[], index:number } | null>(null);


// ------------------ Tidsbegränsad ----------------------------------- //
useEffect(() => {
  const RESET_KEY = "julkalender_reset_time";

  // Hämta tidigare sparad reset-tid
  const savedResetTime = localStorage.getItem(RESET_KEY);
  const now = Date.now();

  // Om ingen reset-tid finns, sätt den nu
  if (!savedResetTime) {
    localStorage.setItem(RESET_KEY, now.toString());
  }

const checkReset = () => {
  const saved = localStorage.getItem(RESET_KEY);
  if (!saved) return;

  // 🔹 Viktigt: räkna tiden dynamiskt varje gång!
  const currentTime = Date.now();
  const elapsedMinutes = (currentTime - Number(saved)) / (1000 * 60);


    // 🔸 Testläge: 1 minut
    if (elapsedMinutes >= 1) {
      // Nollställ alla luckor
      const resetDoors = Array(CalendarImages.length)
        .fill({ opened: false, direction: "left" })
        .map((d) => ({
          ...d,
          direction: Math.random() > 0.5 ? "left" : "right",
        }));

      setDoors(resetDoors);

      // Spara om nollställd data till localStorage
      localStorage.setItem("christmasCalendar2025", JSON.stringify(resetDoors));

      // Sätt ny reset-tid
      localStorage.setItem(RESET_KEY, Date.now().toString());

      console.log("🎅 Alla luckor har nollställts efter 1 minut!");
    }
  };

  // Kör kontroll varje 5:e sekund
  const interval = setInterval(checkReset, 5000);
  return () => clearInterval(interval);
}, []);


//------------------------------- END Tidsbegrändad ----------------------------------- //

/*
  useEffect(() => {
    const stored = localStorage.getItem("christmasCalendar2025");
    if (stored) setDoors(JSON.parse(stored));
  }, []);*/

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
      alert(`🎅 Du kan inte öppna lucka ${index+1} ännu!`);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openModal = (images: any[], index = 0) => setModalState({ images, index });
  const closeModal = () => setModalState(null);
  const prevImage = () => {
    if (!modalState) return;
    const newIndex = (modalState.index - 1 + modalState.images.length) % modalState.images.length;
    setModalState({ ...modalState, index: newIndex });
  };
  const nextImage = () => {
    if (!modalState) return;
    const newIndex = (modalState.index + 1) % modalState.images.length;
    setModalState({ ...modalState, index: newIndex });
  };

  const gridOrder = [
    3, 0, 5, 7, 2, 8, 1, 4, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 22
  ];

  return (
    <CalendarWrapper>
      <Title>🎄 Julkalender 2025 🎁</Title>
      <Grid>
        {gridOrder.map((i) => {
          const door = doors[CalendarImages[i].number-1];
          const imgData = CalendarImages[i];

          return (
            <DoorWrapper key={imgData.number}>
              <Image
                src={imgData.gallery ? imgData.gallery[0].src : imgData.src}
                alt={imgData.gallery ? imgData.gallery[0].alt : imgData.alt}
                visible={door.opened}
                onClick={() => {
                  if (!door.opened) return;
                  if (imgData.gallery) openModal(imgData.gallery);
                  else openModal([{ src: imgData.src, alt: imgData.alt }]);
                }}
              />
              <Door
                opened={door.opened}
                direction={door.direction}
                onClick={() => handleOpen(imgData.number-1)}
              >
                {imgData.number}
              </Door>
            </DoorWrapper>
          )
        })}
      </Grid>

      {modalState && (
  <ModalOverlay onClick={closeModal}>
    <ModalContent onClick={e => e.stopPropagation()}>
      <img src={modalState.images[modalState.index].src} alt={modalState.images[modalState.index].alt}/>
      
      {modalState.images.length > 1 && (
        <>
          <NavButton
            left
            onClick={prevImage}
            disabled={modalState.index === 0}
            style={{ opacity: modalState.index === 0 ? 0.3 : 1, cursor: modalState.index === 0 ? "not-allowed" : "pointer" }}
          >
            &#8249;
          </NavButton>
          
          <NavButton
            onClick={nextImage}
            disabled={modalState.index === modalState.images.length - 1}
            style={{ opacity: modalState.index === modalState.images.length - 1 ? 0.3 : 1, cursor: modalState.index === modalState.images.length - 1 ? "not-allowed" : "pointer" }}
          >
            &#8250;
          </NavButton>
        </>
      )}

      <CloseButton onClick={closeModal}>Stäng ✖</CloseButton>
    </ModalContent>
  </ModalOverlay>


      )}

    </CalendarWrapper>
  );
};

export default Julkalender;
