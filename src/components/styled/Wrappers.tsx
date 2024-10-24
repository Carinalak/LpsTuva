import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from "./Variables";


export const Wrapper = styled.section`
width: 400px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #ffffffd9;
/*background-color: rgba(255, 255, 255, 0.8);*/
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  width: 600px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  width: 800px;
}
`;



export const TextWrapper = styled(Wrapper)`
  width: 300px;
  background-color: none ;

`;