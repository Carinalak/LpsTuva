import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KOLSVART, KRITVIT, TRANSVIT } from "./Variables";


export const WrapperWhite = styled.section`
width: 95%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffffd9;
/*background-color: rgba(255, 255, 255, 0.8);*/
padding-top: 5px;
padding-bottom: 10px;
border-radius: 10px;
margin-bottom: 0;
font-family: "Playpen Sans", serif;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 600px;
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
    font-size: 3rem;
  }
`;

export const WrapperTransparent = styled(WrapperWhite)`
  background-color: transparent;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
  width: 1000px;
}
`;


// OLD WRAPPER TRANSPARENT //
/*
export const WrapperTransparent = styled(WrapperWhite)`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
background-color: transparent;
//border: 1px solid black;
padding-top: 5px;
padding-bottom: 40px;
margin-bottom: 10px;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 600px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 800px;
}
`;
*/


export const TextWrapper = styled(WrapperWhite)`
  width: 90%;       // Måste ha samma bredd som GalleryImage!
  background-color: transparent;
  color: ${KOLSVART};
  text-align: left; /* Justerar texten horisontellt */
  align-items: flex-start; /* Justerar innehåll i Flexbox */
  margin-top: 20px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 450px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 550px;
}
@media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
  width: 1000px;
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

export const WhiteFontSmallerBox = styled(WhiteFont) `
  width: 290px;
  text-align: left;
  
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 370px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  }

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
  width: 850px;
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
`;



// ----------------------------------- Coloring page ----------------------------------- //

export const ColoringWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;
  align-items: center;
  background-color: transparent;
  padding-top: 5px;
  padding-bottom: 60px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 85%;
    flex-direction: row;
    flex-wrap: wrap;
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
export const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;
  align-items: center;
  background-color: ${TRANSVIT};
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

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

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
`;


