import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, SKUGGLILA, SMUTSROSA} from "./Variables";

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
    input::placeholder,
    textarea::placeholder {
      font-family: "Playpen Sans", serif;
      color: ${SMUTSROSA};
      font-size: 16px;

        @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
        font-size: 40px;
      }
}

  .contactInput {
    font-family: "Playpen Sans", serif;
    font-size: 16px;
    line-height: 5px;
    color: ${SKUGGLILA};
    border: none;
    outline: none;
    padding: 10px;
    width: 280px;
    border-radius: 10px;

      @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        width: 350px;

      }
      @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
        width: 400px;
      }
      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 800px;
      height: 30px;
      font-size: 40px;
      padding: 50px;
      margin-bottom: 50px;
    }
  }

  .contactTextArea {
    font-family: "Playpen Sans", serif;
    font-size: 16px;
    //line-height: 5px;
    resize: none;
    color: ${SKUGGLILA};
    border: none;
    outline: none;
    height: 260px;
    padding: 10px;
    padding-top: 15px;
    width: 280px;
    border-radius: 10px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 350px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 400px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 800px;
      height: 600px;
      font-size: 40px;
      padding: 50px;
    }


  }


`;
