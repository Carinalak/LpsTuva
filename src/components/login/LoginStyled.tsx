import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_BIGGER_DESKTOP, GAMMELROSA, KRITVIT, SMUTSROSA, POOLBLA, KOLSVART, HJARTROD } from "../styled/Variables";

// ----------------------- ADMIN FORM ------------------------- //

export const AdminForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 12px;
padding-top: 10px;
padding-bottom: 30px;
width: 600px;

@media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
  row-gap: 20px;
  padding-top: 30px;
}
`;

export const FormInput = styled.input`
font-family: "Playpen Sans", serif;
font-size: 1rem;
color: ${KOLSVART};
border: none;
outline: none;
width: 300px;
height: 35px;
border-radius: 5px;
text-align: left;
padding: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 500px;
    }
`;

export const InputImageContainer = styled.div ` // Det vita runt där man laddar upp bilden
  padding: 10px;
  background-color: ${KRITVIT};
  width: 300px;
  border-radius: 5px;
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 500px;
    }
`;

export const InputImageBack = styled.input ` // Inputen där Bläddra - knappen finns
padding: 10px;
background-color: ${KRITVIT};
width: 260px;
padding: 10px;
border-radius: 5px;
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 460px;
    }
`;

export const FormTextarea = styled.textarea`
font-family: "Playpen Sans", serif;
font-size: 1rem;
color: ${KOLSVART};
border: none;
outline: none;
width: 300px;
height: 400px;
border-radius: 5px;
border: none;
text-align: left;
padding: 10px;
border: 1px solid white;
resize: none;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 500px;
  }
`;



// ----------------------- LOGIN FORM ------------------------- //
export const LoginForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 12px;
padding-top: 10px;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
}
@media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
  row-gap: 20px;
  padding-top: 30px;
}
`;

// ----------------------- BUTTONS ------------------------- //
export const LoginButton = styled.button`
width: 180px;
height: 35px;
border: none;
border-radius: 5px;
background-color: ${GAMMELROSA};
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
font-size: 15px;
text-align: center;
color: ${KRITVIT};
cursor: pointer;

  &:hover {
    background-color: ${SMUTSROSA};
    color: ${KRITVIT};
  }
  &:active {
    background-color: ${POOLBLA};
    color: ${KRITVIT};
  }
`;

export const FormButton = styled.button`
width: 100px;
height: 35px;
border: none;
border-radius: 5px;
background-color: ${GAMMELROSA};
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
font-size: 15px;
text-align: center;
color: ${KRITVIT};
cursor: pointer;

  &:hover {
    background-color: ${SMUTSROSA};
    color: ${KRITVIT};
  }
  &:active {
    background-color: ${POOLBLA};
    color: ${KRITVIT};
  }
`;

export const FormButtonWrapper = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  padding-left: 0;
  padding-top: 20px;
  width: 300px;
  gap: 25px;
`;

// ----------------------- FONT ------------------------- //

export const TextStyle = styled.div `
font-size: 1rem;
color: ${KOLSVART};
font-weight: 500;
padding-top: 5px;
padding-right: 15px;
padding-left: 20px;
`;

export const ErrorText = styled(TextStyle) `
  color: ${HJARTROD};
  font-size: 0.8rem;
`;

export const LogoutMessage = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
padding-top: 50px;
`;



