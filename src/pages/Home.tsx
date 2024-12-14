import { H1PurpleSecond } from "../components/styled/Title"
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers"
import Apa from '../assets/images/apa.png';
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
    <SerieImage src={Apa} width="150px" alt="Monkey" loading="lazy"/>
    <TextWrapper>

      <p>Välkommen till min nya sida! Här kommer jag att ha massa spännande saker. Bland annat kan du titta på foton på mina Lps i galleriet. </p>
      <p>Det finns bilder du kan skriva ut och färglägga, och det finns ett <StyledLink to="/memory">memoryspel</StyledLink> att spela!</p>
      <p>Om du vill skriva ett meddelande till mig kan du gå till "Kontakt" och göra det där. Jag ska svara så fort jag kan. &#128568;</p>
    </TextWrapper>
  </WrapperWhite>

  
  </BackgroundOriginal>)

}