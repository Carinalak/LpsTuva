import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP } from "../styled/Variables";

export const Accessories = styled.div `
margin-left: 10px;
`;




export const Animals = styled.div `
  display: flex;
  align-self: center;
  justify-self: left;
  gap: 5px;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;

`;
export const AnimalContainer = styled.div `
  display: flex;
  align-self: center;
  justify-self: right;
  gap: 10px;
  margin-right: 10px;
`;

export const Canvas = styled.canvas `
  width: 350px;
  height: 400px;
  background-color: white;
  padding: 10px;
  margin-bottom: 0;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 600px;
    height: 400px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 800px;
    height: 400px;
  }
  
    `;


export const GarderobStyle = () => {


  

}