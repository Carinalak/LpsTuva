import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from "./Variables";


export const Wrapper = styled.section`
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
background-color: blue;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  background-color: red;
  width: 500px;
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  background-color: yellow;
  width: 600px;
}
`;