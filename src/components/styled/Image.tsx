import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP, SMUTSROSA, BREAKPOINT_BIGGER_DESKTOP } from "./Variables";

export const GalleryImage = styled.img`
  width: 100%; // Måste ha samma bredd som TextWrapper! till texten
  height: 100%; 
  object-fit: cover; // Beskär bilden
  border-radius: 10px;
  cursor: pointer;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    object-fit: cover;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    object-fit: cover;
  }
`;


/* Gammal
export const GalleryImage = styled.img`
  width: 90%;        Måste ha samma bredd som TextWrapper! till texten
  border-radius: 10px;
  max-width: 80%;
  cursor: pointer;
    Centrering 
  display: block;
  margin: 0 auto;


  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    max-width: 100%;
    width: 450px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 550px;
  }

`;

*/

export const FarglaggImage = styled.img`

  width: 100px;       // Måste ha samma bredd som TextWrapper! till texten
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;

    &:hover {
        transform: scale(1.3);
      }

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 100px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 100px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 300px;
  }

`;


export const SerieImage = styled.img`
  width: 120px;
  padding-top: 5px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding-top: 10px;

    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 150px;
    padding-top: 15px;
    padding-bottom: 20px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 200px;
      padding-top: 50px;
      padding-bottom: 50px;
    }
  
`;

// ------------------ LOGO ------------------------ //

export const LogoContainer = styled.div `
  position: absolute;
  border-radius: 50%;
  background-color: ${SMUTSROSA};
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 5px;
  //top: 30px;
  //left: 6%;
  //transform: translate(-50%, 0);
  z-index: 85;
  margin-left: 5px;
  margin-top: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  visibility: hidden;
 
   @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    visibility: visible;
      width: 110px;
      height: 110px;
    }

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 140px;
      height: 140px;
      margin-left: 10px;
      margin-top: 5px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 310px;
      height: 310px;
      margin-left: 10px;
      margin-top: 5px;
    }
`;  

export const LogoImage = styled.img` //rund
  visibility: visible;
  position: absolute;
  height: 70px;
  z-index: 87;
  //margin-left: 5px;
  //margin-top: 5px;
  margin-left: 0;
  margin-top: -45px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      margin-left: 5px;
      margin-top: 5px;
      width: 100px;
      height: 100px;
    }

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 130px;
      height: 130px;
    }
    
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 300px;
      height: 300px;
    }

`;
 // LPS-Tuva Text Logo
export const LpsLogo = styled.img `
  width: 180px;
  z-index: 87;
  -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter


    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        width: 200px;
        padding-left: 10px;
      }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 250px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 400px;
    }
`;


// Dessa används ej just nu. Har dem direkt från font awesome istället.
export const SocialMediaIcons = styled.img`
  width: 32px;
  padding: 5px;
  vertical-align: middle;
  margin: 0 3px; // Avstånd mellan ikoner
`;

export const SocialMediaWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 12px; // Avstånd mellan ikoner

`;

