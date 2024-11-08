import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KOLSVART, KRITVIT } from "./Variables";


export const WrapperWhite = styled.section`
width: 98%;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffffd9;
/*background-color: rgba(255, 255, 255, 0.8);*/
padding-top: 15px;
padding-bottom: 60px;
border-radius: 10px;
margin-bottom: 10px;

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
  

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 450px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 550px;
}
`;

export const WhiteFont = styled.div `
   background-color: transparent;
   color: ${KRITVIT};
`;

export const BlackFont = styled(WhiteFont) `
  color: ${KOLSVART};

`;

export const CenteredWrapperTransparent = styled.div `

  padding-top: 100px;
  text-align: center;

`;
