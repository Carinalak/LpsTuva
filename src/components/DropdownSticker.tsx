import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { SKUGGLILA, SMUTSROSA } from "./styled/Variables";
import { useStickers } from "./useStickers";


interface DropdownStickerProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setActiveStickerSrc: React.Dispatch<React.SetStateAction<string | null>>;
  //onStickerClick: (stickerId: string) => void;
}

const DropdownButton = styled.div<{ isOpen: boolean }>`
  background-color: ${SMUTSROSA};
  padding: 5px;
  border-radius: ${({ isOpen }) => (isOpen ? "5px 5px 0 0" : "5px")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px; /* 2x32px + padding/gap */

  img {
    width: 32px;
    height: 32px;
  }
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${SKUGGLILA};
  width: 74px; /* matchar knappens bredd */
  list-style: none;
  padding: 5px;
  margin: 0;
  border-radius: ${({ isOpen }) => (isOpen ? "0 0 5px 5px" : "0")};
  max-height: 355px; /* 10 rader * 32px + gap */
  overflow-y: auto;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    transition: transform 0.1s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
export const DropdownSticker: React.FC<DropdownStickerProps> = ({ sortBy, setSortBy, setActiveStickerSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const stickers = useStickers();

  // Om ingen sortering är satt, välj första automatiskt
  useEffect(() => {
    if (!sortBy && stickers.length > 0) {
      setSortBy(stickers[0].alt);
    }
  }, [stickers, sortBy, setSortBy]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (alt: string) => {
    setSortBy(alt);
    const sticker = stickers.find(s => s.alt === alt);
    if (sticker) {
      setActiveStickerSrc(sticker.src); 
    }
    setIsOpen(false);
  };

  const selectedSticker = stickers.find(s => s.alt === sortBy);



    return (
    <div style={{ position: "relative", width: "74px" }}>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        {selectedSticker && (
          <img src={selectedSticker.src} alt={selectedSticker.alt}  />
        )}
      </DropdownButton>
      {isOpen && (
        <DropdownList isOpen={isOpen}>
          {stickers.map((sticker, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(sticker.alt)}>
              <img src={sticker.src} />
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </div>
  );
};
