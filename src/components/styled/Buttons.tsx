import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, GAMMELROSA, KRITVIT, POOLBLA, SMUTSROSA } from "./Variables";

export const Button = styled.button `
  padding: 0.5rem;
  margin: 0.5rem; 
  border: none;
  border-radius: 15px;
  background-color: ${GAMMELROSA};
  color: ${KRITVIT};
  font-weight: 600;
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
    width: 125px;

    }
`;

export const ButtonWrapper = styled.div `
  padding-bottom: 50px;
  padding-left: 0;
  padding-top: 20px;
`;
