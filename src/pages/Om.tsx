import { H1PurpleSecond, StyledLink } from "../components/styled/Fonts"
import { BackgroundOriginal, HomeImg, TextWrapper, WrapperWhite } from "../components/styled/Wrappers"
import Gris from '../assets/images/gris.png';
import { SerieImage } from "../components/styled/Image";
import HomeImage from '../assets/images/galleri/autumn/Gungar.jpg';



export const Om = () => {

  // --------------------- Koden nedan gör så att sidan hamnar högst upp när den öppnas ---------------------- // 
  setTimeout(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, 0);
  // ---------------------------------------- SLUT PÅ SCROLLKOD ---------------------------------------------- //
  
  return ( 
  <BackgroundOriginal>
    <WrapperWhite>
      <H1PurpleSecond>Om Lps-Tuva</H1PurpleSecond>
      <TextWrapper>
        <p>Lps-Tuva är mest känd för sina Littlest Pet Shop filmer. Hon är även väldigt bra på teckning och musikkomposition.
          Hon sjunger och spelar både piano och gitarr. På Lps-Tuvas sida kan du <StyledLink to="/farglagg">färglägga </StyledLink>  
          hennes bilder, spela <StyledLink to="/memory">memoryspel</StyledLink> och titta på hennes 
          <StyledLink to="/galleribilder"> fotogalleri</StyledLink>.
       <br /> <br /> 
        Om du vill skriva till Tuva kan du gå till <StyledLink to="/kontakt">Kontakt</StyledLink> och göra det där.</p>
      </TextWrapper>
      <HomeImg src={HomeImage} alt="Petshoparna gungar på en gul gunga." loading="lazy"/>

      <SerieImage src={Gris} alt="Gris" loading="lazy"/>
    </WrapperWhite>
  
  </BackgroundOriginal>

  )};