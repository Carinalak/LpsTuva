import styled from "styled-components";
import { BREAKPOINT_TABLET, SKUGGLILA, SMUTSROSA} from "./Variables";

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
    input::placeholder,
    textarea::placeholder {
      font-family: Arial, Helvetica, sans-serif;
      color: ${SMUTSROSA};
      font-size: 16px;
}

  .contactInput {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 5px;
    color: ${SKUGGLILA};
    border: none;
    outline: none;
    padding: 10px;
    width: 260px;
    border-radius: 10px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 350px;
    }
  }

  .contactTextArea {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    //line-height: 5px;
    resize: none;
    color: ${SKUGGLILA};
    border: none;
    outline: none;
    height: 260px;
    padding: 10px;
    padding-top: 15px;
    width: 260px;
    border-radius: 10px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 350px;
    }
  }


`;
