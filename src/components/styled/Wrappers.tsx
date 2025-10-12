import styled from "styled-components";
import { BLEKPUMPA, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, JULGRON_MORK, KOLSVART, KRITVIT, PUMPAORANGE } from "./Variables";


export const WrapperWhite = styled.section`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffffd9;
/*background-color: rgba(255, 255, 255, 0.8);*/
padding-bottom: 10px;
border-radius: 10px;
margin-bottom: 0;
margin-top: 10px;
font-family: "Playpen Sans", serif;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
   // width: 600px;
   width: 80%;
    padding-bottom: 20px;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 800px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 1500px;
    height: 89%;
    padding-bottom: 70px;
  }

`;

export const WrapperTransparent = styled(WrapperWhite)`
  background-color: transparent;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
  width: 1000px;
}
`;


export const TextWrapper = styled(WrapperWhite)`
  width: 90%;       // Måste ha samma bredd som GalleryImage!
  background-color: transparent;
  color: ${KOLSVART};
  text-align: left; /* Justerar texten horisontellt */
  align-items: flex-start; /* Justerar innehåll i Flexbox */
  margin-top: 0;
  

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 450px;
  padding-bottom: 10px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 550px;
}
`;

export const ReklamOrangeBack = styled(WrapperWhite)`
  width: 80%;       
  background-color: ${BLEKPUMPA};
  color: ${KOLSVART};
  text-align: left; /* Justerar texten horisontellt */
  margin-top: 0;
  margin-bottom: 40px;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 400px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 550px;
}
`;


export const WhiteFont = styled.p `
  background-color: transparent;
  display: block;
  width: 100%;
  margin-top: 5px;
  color: ${KRITVIT};
  font-family: "Playpen Sans", serif;
  text-align: center;
`;

export const BlackFont = styled(WhiteFont) `
  color: ${KOLSVART};
`;


// Text ovanför kontaktformuläret:
export const WhiteFontSmallerBox = styled(WhiteFont) `
  width: 320px;
  text-align: left;
  
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 420px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 470px;
  }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 480px;
  }
`;

// Text under kontaktformulär med vit bakgrund:
export const WhiteWrapperMini = styled(WhiteFont) `
  width: 320px;
  text-align: left;
  align-items: center;
  color: ${KOLSVART};
  background-color: ${KRITVIT};
  border-radius: 10px;
  padding: 30px;
  padding-bottom: 100px;
  
  
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 420px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 470px;
  }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 480px;
  }
`;



export const CenteredWrapperTransparent = styled.div `

  padding-top: 100px;
  text-align: center;
  color: ${KRITVIT};

`;

export const CenteredColTransWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;


  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    gap: 80px;
}
`;


// ----------------------------------- Farglagg (Coloring) page ----------------------------------- //

export const ColoringWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 98%;
  align-items: center;
  background-color: transparent;
  padding-top: 5px;
  padding-bottom: 60px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 85%;
    row-gap: 10px;
    gap: 16px;
}
@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
}
`;

export const ColoringWrapperInner = styled.div `
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


// bakgrundsbild
export const SpilledPaintWrapper = styled.div`
  position: relative; 
  display: inline-block;
  padding: 20px;
  background-image: url('/assets/images/farglagg/SpilledPaint.png'); 
  background-size: cover; // Gör att bakgrunden täcker hela wrappern
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: auto;
  overflow: hidden; // Döljer det som går utanför om bilden är för stor 
  display: flex;
  justify-content: center;
  align-items: center;
  //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// ----------------------------------- End Coloring page ----------------------------------- //

// ----------------------------------- Gallery page ----------------------------------- //
// Innehåller bilder och knappar
export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;
  height: 100%;
  align-items: center;
  background-color: transparent;
  padding-top: 1px;
  padding-bottom: 60px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding-left: 20px;
    padding-right: 20px;
    width: 90%;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  }

`;

// Innehåller boxen bilderna är i.
export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding-bottom: 30px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    gap: 60px;
    padding-bottom: 60px;
  }
`;

// Box där bilderna är i:
export const GalleryWrapperInner = styled.div`
  box-sizing: border-box;
  height: 300px;
  aspect-ratio: 1 / 1; // Gör det fyrkantigt
  background-color: ${KRITVIT};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden; // Beskär innehållet om det är större 
  padding: 8px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    height: 200px;

  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    height: 300px;
  }

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    height: 500px;
    padding: 20px;

  }
`;

export const PaginationWrapper = styled.div `
  width: 120px;
  text-align: center;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){
    width: 300px;
  }
`;

export const BackgroundOriginal = styled.div `
  min-height: 100%; /* Täck hela höjden på skärmen */
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-top: 0;
  padding-bottom: 60px;
  
`;

export const JulBackground = styled.div `
  background-color: ${JULGRON_MORK}; 
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px;
  padding-bottom: 100px;
  margin-bottom: 0;

  //position: relative; /* Viktigt för att positionera barn relativt */
  /*width: 100%;
  height: 100vh;*/ /* Täcker hela viewporten */
  overflow: hidden;
  overflow-y: hidden;
`;
export const HalloweenBackground = styled.div `
  background-color: ${KOLSVART}; 
  color:${PUMPAORANGE} ;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  //padding: 100px;
  padding-bottom: 100px;
  margin-bottom: 0;

  //position: relative; /* Viktigt för att positionera barn relativt */
  /*width: 100%;
  height: 100vh;*/ /* Täcker hela viewporten */
  overflow: hidden;
  overflow-y: hidden;
`;

// --------------------------- TITLE - DROPDOWN, TOGGLE AND ADMIN WRAPPERS ------------------------------ //


export const TitleDropdownWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px; 
  margin-bottom: 5px;


    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      display: grid;
      grid-template-columns: 0.5fr 1.5fr 1fr;
      align-items: center;
      gap: 4rem; 
      margin-bottom: 5px;
  }
`;

export const TitleToggleWrapper = styled(TitleDropdownWrapper)`
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      grid-template-columns: 1fr 1fr 1fr;

      & > *:first-child {
        justify-self: right;
      }
      & > *:nth-child(n+2) {
        justify-self: center;
      }
  }
`;


export const AdminLogoutLink = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 0;


`;
// ----------------------------------- Puzzle ----------------------------------- //


export const PuzzleWrapper = styled.section`
//width: 95%;
//display: flex;
//flex-direction: column;
align-items: center;
margin-top: 200px;
padding-bottom: 10px;
//margin-bottom: 0;
//font-family: "Playpen Sans", serif;
/*
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 600px;
    padding-bottom: 20px;
  }
*/
`;

