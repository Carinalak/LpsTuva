import { motion } from "framer-motion";
import styled from "styled-components";

interface DifficultyToggleProps {
  onClick: () => void;
  difficulty: "easy" | "hard";
}

export const SwitchContainer = styled.div`
  width: 60px;
  height: 30px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  background-color: ${(props) => (props.theme.darkMode ? "#555" : "#ddd")};
  position: relative;
`;

export const SwitchHandle = styled(motion.div)<{ difficulty: "easy" | "hard" }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

export const DifficultyToggle: React.FC<DifficultyToggleProps> = ({ onClick, difficulty }) => {
  return (
    <SwitchContainer onClick={onClick}>
      <SwitchHandle
        layout
        initial={false}
        difficulty={difficulty}
        animate={{ x: difficulty === "hard" ? 30 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </SwitchContainer>
  );
};

// Lägg till detta i den komponent du vill ha det: 
/** 
      <div className="difficulty-toggle">
    <span style={{ color: "white", marginRight: "10px" }}>Lätt</span>
    <DifficultyToggle
      difficulty={difficulty}
      onClick={() => setDifficulty(difficulty === "easy" ? "hard" : "easy")}
    />
    <span style={{ color: "white", marginLeft: "10px" }}>Svår</span>
  </div>

**/
