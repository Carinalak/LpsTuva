import React from 'react';
import styled from 'styled-components';
import { BREAKPOINT_TABLET, BREAKPOINT_BIGGER_DESKTOP, KRITVIT, TRANSSVART } from './styled/Variables';

type FarglaggImageModalProps = {
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
};

export const ModalImage = styled.img `
  max-width: 300px;
  border-radius: 10px;
  
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    max-width: 400px;
    }

    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      max-width: 550px;
    }
`;

export const ModalContainer = styled.div `
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
  overflow: auto; // Gör att modalen blir scrollbar
`;

export const CloseButton = styled.button `
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: ${KRITVIT};
  font-size: 20px;
  cursor: pointer;
`;


export const FarglaggImageModal: React.FC<FarglaggImageModalProps> = ({ imageSrc, imageAlt, onClose }) => {
  return (
    <ModalContainer onClick={onClose}>
      <div
        style={{
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()} // Gör så att bilden inte stängs om man klickar på den
      >
        <ModalImage src={imageSrc} alt={imageAlt} />
        <CloseButton
          onClick={onClose}>
          &times;
        </CloseButton>
      </div>
    </ModalContainer>
  );
};