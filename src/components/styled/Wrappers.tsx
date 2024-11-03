import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KOLSVART } from "./Variables";


export const WrapperWhite = styled.section`
width: 98%;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffffd9;
/*background-color: rgba(255, 255, 255, 0.8);*/
padding-top: 40px;
padding-bottom: 40px;
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
width: 90%;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
background-color: transparent;
/*background-color: rgba(255, 255, 255, 0.8);*/
border: 1px solid black;
padding-top: 40px;
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
  width: 93%;       // Måste ha samma bredd som GalleryImage!
  background-color: transparent;
  color: ${KOLSVART};
  

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 450px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 550px;
}
`;
