import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP, SMUTSROSA } from "./Variables";

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
// ------------------ LOGO ------------------------ //

export const LogoContainer = styled.div `
  position: fixed;
  border-radius: 50%;
  background-color: ${SMUTSROSA};
  display: flex;
  align-items: center;
  width: 90px;
  height: 90px;
  padding: 5px;
  //top: 30px;
  //left: 6%;
  //transform: translate(-50%, 0);
  z-index: 101;
  margin-left: 5px;
  margin-top: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


export const LogoImage = styled.img`
 position: fixed;
  height: 80px;
  z-index: 110;
  margin-left: 5px;
  margin-top: 5px;

`;

export const SocialMediaIcons = styled.img`
  width: 32px;
  padding: 5px;
  vertical-align: middle; // centrera vertikalt
  margin: 0 3px; // Avstånd mellan ikoner
`;

export const SocialMediaWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 2px; // Avstånd mellan ikoner

`;

