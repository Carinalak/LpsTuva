import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, DISSAD, GAMMELROSA, KRITVIT, POOLBLA, SMUTSROSA, } from "./Variables";
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

  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 110px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 190px;
    height: 60px;
    font-weight: 700;
    font-size: 2rem;
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

export const PaginationWrapper = styled.div `
  width: 120px;
  text-align: center;

`;

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

  &:disabled {
    background-color: ${DISSAD};
    cursor: not-allowed;
    transform: none;
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

  &:disabled {
    background-color: ${DISSAD};
    cursor: not-allowed;
    transform: none;
  }
`;

