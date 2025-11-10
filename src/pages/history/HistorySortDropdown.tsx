import React, { useState } from "react";
import { styled } from "styled-components";
import { SMUTSROSA, KRITVIT, FONT_PLAYPEN, SKUGGLILA } from "../../components/styled/Variables";

interface HistorySortDropdownProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const CustomDropdown = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownButton = styled.div<{ isOpen: boolean }>`
  background-color: ${SMUTSROSA};
  color: ${KRITVIT};
  font-family: ${FONT_PLAYPEN};
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: ${({ isOpen }) => (isOpen ? "5px 5px 0 0" : "5px")};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  //position: absolute;           // Tog bort denna när jag ville att listan ska putta ner botten när den öppnas.
  top: 100%;
  left: 0;
  background-color: ${SKUGGLILA};
  width: 100%;
  color: ${KRITVIT};
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 0 0 5px 5px;
  z-index: 100;
  max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};    // Lade till denna när jag ville att listan ska putta ner botten när den öppnas.
  overflow: hidden;                                    // Lade till denna när jag ville att listan ska putta ner botten när den öppnas.
  transition: max-height 0.3s ease;                   // Lade till denna när jag ville att listan ska putta ner botten när den öppnas.
  box-shadow: ${({ isOpen }) =>                       // Lade till denna när jag ville att listan ska putta ner botten när den öppnas.
  isOpen ? "0px 4px 10px rgba(0,0,0,0.3)" : "none"}; // Lade till denna när jag ville att listan ska putta ner botten när den öppnas.
`;

const DropdownItem = styled.li`
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${SMUTSROSA};
  }
`;

const Arrow = styled.span`
  -webkit-tap-highlight-color: transparent;
`;


export const HistorySortDropdown: React.FC<HistorySortDropdownProps> = ({
  sortBy,
  setSortBy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (val: string) => {
    setSortBy(val);
    setIsOpen(false);
  };

  // Grundalternativen
  const baseOptions = [
    { label: "Visa alla", value: "all" },
    { label: "Oktober 2025", value: "Oktober25" },
    { label: "Sommar 2025", value: "Summer25" },
  ];

  // Om något är valt (inte “none”), lägg till “Dölj” högst upp i listan
  const options =
    sortBy !== "none" && sortBy !== ""
      ? [
          { label: "Dölj", value: "none" },
          ...baseOptions.filter((o) => o.value !== sortBy), // ta bort det redan valda ur listan
        ]
      : baseOptions;


  const currentLabel =
    sortBy === "none" || sortBy === ""
      ? "Välj inlägg"
      : baseOptions.find((o) => o.value === sortBy)?.label || "Välj inlägg";
      

  return (
    <CustomDropdown>
      <DropdownButton isOpen={isOpen} onClick={toggleDropdown}>
        {currentLabel}
        <Arrow>▼</Arrow>
      </DropdownButton>

      {isOpen && (
        <DropdownList isOpen={isOpen}>
          {options.map((o) => (
            <DropdownItem key={o.value} onClick={() => handleSelect(o.value)}>
              {o.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </CustomDropdown>
  );
};