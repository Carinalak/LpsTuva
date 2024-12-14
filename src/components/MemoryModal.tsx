import styled from "styled-components";
import { BREAKPOINT_TABLET, CHRISTMAS_GREEN, JULGRON_LJUS, JULGULD_MORK, KRITVIT, SKUGGLILA } from "./styled/Variables";

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

  
  @media screen and ( min-width: ${BREAKPOINT_TABLET}) {
    width: 400px;
    height: 300px;
    font-size: 1.6rem;
    font-weight: bold;
    color: ${SKUGGLILA};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MemoryJulModal = styled(MemoryModal) `
  background-color: ${CHRISTMAS_GREEN};
  background-color: ${JULGRON_LJUS};
  border: 1px solid ${JULGULD_MORK}; 
  color: ${KRITVIT};

`;