import { H1PurpleSecond } from "../components/styled/Title"
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers"
import Gris from '../assets/images/gris.png';
import { Link } from "react-router-dom";
import { POOLBLA, SKUGGLILA } from "../components/styled/Variables";
import { styled } from "styled-components";
import { SerieImage } from "../components/styled/Image";

export const Home = () => {

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
    
    <TextWrapper>
      <p>God Jul och välkommen till min nya sida! Här kommer jag att ha massa spännande saker. Bland annat kan du titta på foton på mina Lps i galleriet. </p>
      <p>Det finns bilder du kan skriva ut och färglägga, och det finns två olika <StyledLink to="/pysselspel">memoryspel</StyledLink> att spela!</p>
      <p>Om du vill skriva ett meddelande till mig kan du gå till <StyledLink to="/kontakt">Kontakt</StyledLink> och göra det där. Jag ska svara så fort jag kan.</p>
    </TextWrapper>
    <SerieImage src={Gris} alt="Gris" loading="lazy"/>
  </WrapperWhite>

  
  </BackgroundOriginal>)

}