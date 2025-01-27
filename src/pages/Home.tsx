import { H1PurpleSecond } from "../components/styled/Fonts"
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers"
import Gris from '../assets/images/gris.png';
import { Link } from "react-router-dom";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, POOLBLA, SKUGGLILA } from "../components/styled/Variables";
import { styled } from "styled-components";
import { SerieImage } from "../components/styled/Image";
import HomeImage from '../assets/images/galleri/BirdDarkPurple.jpg';

export const Home = () => {

const HomeImg = styled.img `
  width: 300px;
  padding-bottom: 60px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 400px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 500px;
      padding-bottom: 80px;
  }

`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${SKUGGLILA}; /* Ursprunglig färg */
  transition: color 0.3s ease; /* Mjuk övergång för färgändring */

  &:hover {
    color: ${POOLBLA}; /* Färg på hover */
    text-decoration: underline; /* Ta bort understrykning på hover (kan justeras) */
  }
`;

  return ( <BackgroundOriginal>
  <WrapperWhite>
    <H1PurpleSecond>Lps-Tuvas Sida</H1PurpleSecond>
    <SerieImage src={Gris} alt="Gris" loading="lazy"/>
    <TextWrapper>
      <p>Välkommen till Lps-Tuvas sida!</p>
      <p>Här hittar du <StyledLink to="/farglagg">färgläggning</StyledLink>, <StyledLink to="/pysselspel">memoryspel</StyledLink> och 
      ett <StyledLink to="/galleribilder">fotogalleri</StyledLink>.
      Om du vill skriva till Tuva kan du gå till <StyledLink to="/kontakt">Kontakt</StyledLink> och göra det där.</p>
    </TextWrapper>
    <HomeImg src={HomeImage} />
  </WrapperWhite>

  
  </BackgroundOriginal>)

}