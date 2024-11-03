import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP } from "./Variables";

export const GalleryImage = styled.img`

  width: 90%;       // Måste ha samma bredd som TextWrapper! till texten
  border-radius: 10px;


  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 450px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 550px;
  }

`;

export const SocialMediaIcons = styled.img`
  width: 32px;
  padding: 5px;
`;

export const SocialMediaWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`;
