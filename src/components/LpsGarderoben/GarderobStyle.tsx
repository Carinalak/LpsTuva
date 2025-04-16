import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP } from "../styled/Variables";

export const Accessories = styled.div `
margin-left: 10px;

`;


export const Item = styled.img`
  padding: 0;
  border: none;
  border-radius: 10px;

  //background-size: 35px 35px;
  //background-repeat: no-repeat;
  //background-position: center;
 // background-color: transparent;
  width: 40px;
  height: 40px;
  transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: -5px;
  cursor: pointer;
  //-webkit-tap-highlight-color: transparent;

  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover {
      transform: scale(1.3);
      //cursor: url(${new URL("../../assets/icons/eraser2.png", import.meta.url).href}) 16 32, auto;
    }
    &:focus {
    cursor: url(${new URL("../../assets/icons/eraser2.png", import.meta.url).href}) 16 32, auto;
  }

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