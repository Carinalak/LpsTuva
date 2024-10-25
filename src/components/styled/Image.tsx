import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP } from "./Variables";

export const GalleryImage = styled.img`

  width: 350px;
  border-radius: 10px;


  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 450px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 550px;
  }

`;
