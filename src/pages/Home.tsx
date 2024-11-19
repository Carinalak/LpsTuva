import { H1PurpleSecond } from "../components/styled/Title"
import { TextWrapper, WrapperWhite } from "../components/styled/Wrappers"
import Apa from '../assets/images/apa.png';

export const Home = () => {

  return ( <>

  
  <WrapperWhite>
    <H1PurpleSecond>LpsTuvas Sida</H1PurpleSecond>
    <img src={Apa} className="gallery-img" width="150px" alt="Monkey" loading="lazy"/>
    <TextWrapper>

      <p>Välkommen till min nya sida! Här kommer jag att ha massa spännande saker. Bland annat kan du titta på foton på mina Lps i galleriet. </p>
      <p>Det finns bilder du kan skriva ut och färglägga.</p>
      <p>Om du vill skriva ett meddelande till mig kan du gå till "Kontakt" och göra det där. Jag ska svara så fort jag kan. &#128568;</p>
    </TextWrapper>
  </WrapperWhite>

  
  </>)

}