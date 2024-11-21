import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, GAMMELROSA, KRITVIT, POOLBLA, SMUTSROSA } from "./Variables";

export const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: 12px;
  background-color: ${GAMMELROSA};
  font-family: "Playpen Sans", serif;
  font-size: 1.3rem;
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
`;

export const ButtonWrapper = styled.div `
  padding-bottom: 5px;
  padding-left: 0;
  padding-top: 20px;
`;
