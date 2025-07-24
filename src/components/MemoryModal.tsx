import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, CHRISTMAS_GREEN, JULGRON_LJUS, JULGULD_MORK, KRITVIT, SKUGGLILA } from "./styled/Variables";

export const MemoryModal = styled.div `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: ${KRITVIT};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border: solid black 1px;

  
  @media screen and ( min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 380px;
    height: 220px;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${SKUGGLILA};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const JulMemoryModal = styled(MemoryModal) `
  background-color: ${CHRISTMAS_GREEN};
  background-color: ${JULGRON_LJUS};
  border: 1px solid ${JULGULD_MORK}; 
  color: ${KRITVIT};

`;