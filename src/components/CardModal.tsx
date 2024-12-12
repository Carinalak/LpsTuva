import styled from "styled-components";
import { BREAKPOINT_TABLET, KRITVIT } from "./styled/Variables";

export const CardModal = styled.div `
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

  
  @media screen and ( min-width: ${BREAKPOINT_TABLET}) {

  }

`;