import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KOLSVART, KRITVIT, SMUTSROSA } from "./Variables";


export const WrapperWhite = styled.section`
width: 95%;
//height: 500px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffffd9;
/*background-color: rgba(255, 255, 255, 0.8);*/
padding-top: 15px;
padding-bottom: 60px;
border-radius: 10px;
//margin-bottom: 10px;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 600px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 800px;
}
`;

export const WrapperTransparent = styled(WrapperWhite)`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
background-color: transparent;
/*background-color: rgba(255, 255, 255, 0.8);*/
//border: 1px solid black;
padding-top: 10px;
padding-bottom: 40px;
margin-bottom: 10px;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 600px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 800px;
}
`;

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
`;

export const WhiteFont = styled.p `
   background-color: transparent;
   display: block;
   width: 100%;
   text-align: center;
   margin-top: 5px;
   color: ${KRITVIT};
`;

export const BlackFont = styled(WhiteFont) `
  color: ${KOLSVART};
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
  //border: 1px solid purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;
  align-items: center;
  background-color: transparent;
  //background-color: #ffffffd9;
  /*background-color: rgba(255, 255, 255, 0.8);*/
  padding-top: 15px;
  padding-bottom: 60px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 85%;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 10px;
    gap: 16px;
    //justify-content: flex-start;
}
@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {

}
`;

export const ColoringWrapperInner = styled.div `
  //border: 1px solid ${SMUTSROSA};
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
  background-size: cover; /* Gör att bakgrunden täcker hela wrappern */
  background-position: center;
  background-repeat: no-repeat;
  width: 250px;
  height: auto;
  overflow: hidden; /* Döljer det som går utanför om bilden är för stor */
  display: flex;
  justify-content: center;
  align-items: center;
  //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// ----------------------------------- End Coloring page ----------------------------------- //

// ----------------------------------- Gallery page ----------------------------------- //
export const GalleryContainer = styled.section`
  /*width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffffd9;
  padding-top: 15px;
  padding-bottom: 60px;
  border-radius: 10px;
  margin-bottom: 10px;*/


  //border: 1px solid purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 98%;
  align-items: center;
  background-color: #ffffffd9;
  /*background-color: rgba(255, 255, 255, 0.8);*/
  padding-top: 1px;

  padding-bottom: 60px;
  border-radius: 10px;
  margin-bottom: 10px;


@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  padding-left: 20px;
  padding-right: 20px;
  width: 85%;

}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
}
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 40px;


  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 100%;
    justify-content: space-evenly;
  }

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 800px;
    justify-content: center;
  }
`;

export const GalleryWrapperInner = styled.div`
  flex: 1 1 calc(33.333% - 16px); /* Tar upp en tredjedel av utrymmet på större skärmar */
  max-width: 250px; /* Sätter en maxbredd på varje bild */
  box-sizing: border-box;
  
  img {
    width: 100%; /* Bilden fyller hela sin container */
    height: auto; /* Bevarar proportionerna */
    border-radius: 8px; /* Rundade hörn */
  }

  @media screen and (max-width: ${BREAKPOINT_TABLET}) {
    flex: 1 1 calc(50% - 16px); /* Halva bredden på mindre skärmar */
  }

  @media screen and (max-width: 480px) {
    flex: 1 1 100%; /* Full bredd på väldigt små skärmar */
  }
`;
