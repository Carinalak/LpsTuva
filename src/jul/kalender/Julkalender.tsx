import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { CalendarImages } from "./CalendarImages";
import { JulBackground } from "../../components/styled/Wrappers";
import { BREAKPOINT_BIGGER_DESKTOP } from "../../components/styled/Variables";
import { H1WhiteSecond } from "../../components/styled/Fonts";


const CalendarWrapper = styled.div`
  //background: #f5e6e0;
  background-color: transparent;
  border-radius: 20px;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  //box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  
      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
        margin-top: 200px;
        max-width: 70%;
    }
`;
/*
const Title = styled.h1`
  color: #b22222;
  font-family: ${FONT_PLAYPEN}; // Förut Georgia", serif
  font-size: 2rem;
  margin-bottom: 1.5rem;
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    font-size: 2.5rem;
}
`;*/

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
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      height: 150px;
  }
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

// Modal 
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

interface DoorState { opened: boolean; direction: "left" | "right"; }



const Julkalender: React.FC = () => {
  const today = new Date();
  const month = today.getMonth(); // 0 = januari, 11 = december
  const day = today.getDate();

  const [doors, setDoors] = useState<DoorState[]>(() => {
    const stored = localStorage.getItem("christmasCalendar2025");

    // Om det är december, använd sparade luckor från localStorage om de finns
    if (month === 11 && stored) {
      return JSON.parse(stored);
    }

    // Annars, skapa nya stängda luckor
    return Array(CalendarImages.length)
      .fill({ opened: false, direction: "left" })
      .map(d => ({ ...d, direction: Math.random() > 0.5 ? "left" : "right" }));
  });

  const [modalState, setModalState] = useState<{ images: {src:string,alt:string}[], index:number } | null>(null);

  // Spara luckor till localStorage **endast i december**
  useEffect(() => {
    if (month === 11) {
      localStorage.setItem("christmasCalendar2025", JSON.stringify(doors));
    } else {
      // Om det inte är december, rensa luckorna från localStorage
      localStorage.removeItem("christmasCalendar2025");
    }
  }, [doors, month]);

  const handleOpen = (index: number) => {
    if (month !== 11) {
      alert("🎅 Du kan bara öppna kalendern i december!");
      return;
    }

    if (index + 1 > day) {
      alert(`🎁 🎄 Du kan inte öppna lucka ${index + 1} ännu!`);
      return;
    }

    const newDoors = [...doors];
    newDoors[index].opened = true;
    setDoors(newDoors);
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
    3, 0, 11, 12, 7, 18, 2, 14, 1, 4, 20, 16, 9, 5, 10, 13, 15, 6, 17, 8, 19, 21, 23, 22
  ];

    // --------------------- Koden nedan gör så att sidan hamnar högst upp när den öppnas ---------------------- // 
    // Den scrollar till toppen endast vid första mount av komponenten. Ignorerar vid lokala klick.
      useEffect(() => {
        const topElement = document.getElementById("top");
        if (topElement) {
          topElement.scrollIntoView({ behavior: "auto" });
        }
      }, []); // Körs EN gång när sidan laddas
    // ---------------------------------------- SLUT PÅ SCROLLKOD ---------------------------------------------- //

  return (
    <JulBackground>
    <CalendarWrapper>
      <H1WhiteSecond>Julkalender</H1WhiteSecond>
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

      <CloseButton onClick={closeModal}>✖</CloseButton>
    </ModalContent>
  </ModalOverlay>


      )}

    </CalendarWrapper>
    </JulBackground>
  );
};

export default Julkalender;
