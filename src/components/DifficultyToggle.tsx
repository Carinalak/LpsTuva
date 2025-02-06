import { motion } from "framer-motion";
import styled from "styled-components";
import { FONT_PLAYPEN, KRITVIT, SKUGGLILA, SMUTSROSA } from "./styled/Variables";

interface DifficultyToggleProps {
  onClick: () => void;
  difficulty: "easy" | "hard";
}

export const SwitchContainer = styled.div`
  width: 53px;
  height: 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  position: relative;
  background-color: ${SMUTSROSA};
  border: 1px solid ${KRITVIT};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export const SwitchHandle = styled(motion.div)<{ difficulty: "easy" | "hard" }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${SKUGGLILA};
  position: absolute;
  border: 1px solid ${KRITVIT};
`;

export const FontToggleLeft = styled.span `

font-family: ${FONT_PLAYPEN};
font-size: 12px;
font-weight: 600;
color: ${KRITVIT};
padding-left: 6px;
`;
export const FontToggleRight = styled.span `

font-family: ${FONT_PLAYPEN};
font-size: 12px;
font-weight: 600;
color: ${KRITVIT};
padding-right: 6px;
`;

export const DifficultyToggle: React.FC<DifficultyToggleProps> = ({ onClick, difficulty }) => {
  return (
    <SwitchContainer onClick={onClick}>
      <FontToggleLeft>20</FontToggleLeft>
      <SwitchHandle
        layout
        initial={false}
        difficulty={difficulty}
        animate={{ x: difficulty === "hard" ? 30 : 3 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <FontToggleRight>12</FontToggleRight>
    </SwitchContainer>
  );
};