import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from "../styled/Variables";

export const Canvas = styled.canvas `

width: 350px;
height: 400px;
background-color: white;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 600px;
    height: 400px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 800px;
    height: 400px;
    }
  
`;