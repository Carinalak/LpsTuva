import styled from "styled-components";
import { BLEKASTPUMPA, BLEKPUMPA, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_TABLET, CHRISTMAS_RED, DISSAD, GAMMELROSA, JULGULD, KOLSVART, KRITVIT, POOLBLA, PUMPAORANGE, SMUTSROSA, } from "./Variables";
import arrowWhiteLeft from "../../assets/icons/arrow_white_left.png";
import arrowWhiteRight from "../../assets/icons/arrow_white_right.png";


export const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 12px;
  background-color: ${GAMMELROSA};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 0; /* Matchar knappens höjd */
  text-align: center; /* Säkerställer horisontell centrering */
  color: ${KRITVIT};
  width: 100px;
  height: 35px;
  cursor: pointer;
  cursor: url(${new URL("../../assets/icons/paw_white.png", import.meta.url).href}), auto;

  &:hover {
    background-color: ${SMUTSROSA};
    color: ${KRITVIT};
  }
  &:active {
    background-color: ${POOLBLA};
    color: ${KRITVIT};
  }
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 110px;
    }
`;

export const ButtonWrapper = styled.div `
  padding-bottom: 5px;
  padding-left: 0;
  padding-top: 20px;

    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      display: flex;
      flex-direction: row;
      gap: 25px;
    }
`;

export const FarglaggButton = styled(Button) `

background-color: transparent;
width: 100px;
padding: 0;
font-size: 0.9rem;
font-weight: 400;

  &:hover {
    background-color: transparent;
    color: ${SMUTSROSA};
  }
  &:active {
    background-color:transparent;
    color: ${POOLBLA};
  }

`;

// ---------------------- Arrow buttons ------------------------------- //

export const ButtonArrowLeft = styled(Button)`
  padding: 0;
  border: none;
  border-radius: 10px;
  background-image: url(${arrowWhiteLeft});
  background-size: 22px 22px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${GAMMELROSA};
  width: 40px;
  height: 40px;
  transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: -5px;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    background-color: ${DISSAD};
    cursor: not-allowed;
    transform: none;
  }

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){
    width: 80px;
    height: 80px;
    background-size: 62px 62px;
  }
`;

export const ButtonArrowRight = styled(Button)`
  padding: 0;
  border: none;
  border-radius: 10px;
  background-image: url(${arrowWhiteRight});
  background-size: 22px 22px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${GAMMELROSA};
  width: 40px;
  height: 40px;
  transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: -5px;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    background-color: ${DISSAD};
    cursor: not-allowed;
    transform: none;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){
    width: 80px;
    height: 80px;
    background-size: 62px 62px;
  }
`;

// ------------- Christmas Button ------------------------------- //

export const JulButton = styled(Button) `
  background-color: ${CHRISTMAS_RED}; 

  background-color: #C91212;
  border: 1px solid ${JULGULD}; 

  &:hover {
    background-color: #e85050;
    color: ${KRITVIT};
  }
  &:active {
    background-color: #f1d85c;
    color: ${KRITVIT};
  }
`;
// ---------------  Christmas arrow buttons modal not in use right now ---------------- //
export const ButtonArrowRedLeft = styled(ButtonArrowLeft)`
  background-color: ${CHRISTMAS_RED};
`;

export const ButtonArrowRedRight = styled(ButtonArrowRight)`

  background-color: ${CHRISTMAS_RED};
`;

// ------------- Halloween Button ------------------------------- //

export const HalloweenButton = styled(Button) `
  background-color: ${PUMPAORANGE}; 
  color: ${KRITVIT};
  background-color: ${KOLSVART};
  border: 1px solid ${KRITVIT}; 

  &:hover {
    background-color: ${BLEKPUMPA};
    color: ${KOLSVART};
  }
  &:active {
    background-color: ${BLEKASTPUMPA};
    color: ${KRITVIT};
    border: 1px solid ${BLEKPUMPA}; 
  }
`;



