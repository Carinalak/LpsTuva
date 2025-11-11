import React, { useState } from "react";
import styled from "styled-components";

import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP, BREAKPOINT_BIGGER_DESKTOP, KRITVIT, TRANSSVART, CHRISTMAS_RED } from "../../components/styled/Variables";

// Styled-components

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${TRANSSVART};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: auto;
`;

export const ModalImage = styled.img`
  max-width: 450px;
  border-radius: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    max-width: 550px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    max-width: 700px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    max-width: 800px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: ${KRITVIT};
  font-size: 30px;
  cursor: pointer;
`;

export const NavButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background: ${CHRISTMAS_RED};
  color: ${KRITVIT};
  border: none;
  font-size: 40px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: rgba(0,0,0,0.6);
  }
`;

// Huvudkomponent för modal med galleri
type CalendarGalleryModalProps = {
  images: { src: string; alt: string }[];
  onClose: () => void;
  initialIndex?: number;
};

export const CalendarGalleryModal: React.FC<CalendarGalleryModalProps> = ({
  images,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <ModalContainer onClick={onClose}>
      <div
        style={{ position: "relative" }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalImage
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        {images.length > 1 && (
          <>
            <NavButton left onClick={prevImage}>
              &#8249;
            </NavButton>
            <NavButton onClick={nextImage}>&#8250;</NavButton>
          </>
        )}
      </div>
    </ModalContainer>
  );
};
