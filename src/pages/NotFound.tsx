import { H1Title404, H4White, StyledLinkWhite } from "../components/styled/Fonts"
import NotFoundImage from '../assets/images/LpsTuvaOgg.png';
import { styled } from "styled-components";

export const NotFoundImg = styled.img `
width: 300px;
margin-bottom: 50px;
`;


export const WrapperTransparent2 = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding-top: 10px;
  //padding-bottom: 10px;
  //border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 0;
  font-family: "Playpen Sans", serif;
  margin: 0 auto;
  gap: 20px;
  margin-bottom: 100px;
  //border: 1px solid black;
`;

export const NotFound = () => {
  return (
      <>
      <WrapperTransparent2>
      <H1Title404>404 Not Found</H1Title404>
          <H4White>Ooops, nu har du kommit fel!</H4White>
          <NotFoundImg src={NotFoundImage}/>
          <StyledLinkWhite to={"/"} >Gå tillbaka till sidan. </StyledLinkWhite>
      </WrapperTransparent2>
      </>
  )
}