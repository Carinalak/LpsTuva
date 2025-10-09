import { H1PurpleSecond, H4Black, StyledLinkHalloween } from "../components/styled/Fonts"
import { BackgroundOriginal, ReklamOrangeBack, TextWrapper, WrapperWhite } from "../components/styled/Wrappers"
import Gris from '../assets/images/gris.png';
import Halloween from '../assets/images/LPHalloween.png';
import Hosten from '../assets/images/LPHosten.png';
import { Link } from "react-router-dom";


import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT } from "../components/styled/Variables";
import { styled } from "styled-components";
import { SerieImage } from "../components/styled/Image";
import HomeImage from '../assets/images/galleri/autumn/BunnyRedLeaf.jpg';

export const HomeImg = styled.img `
  width: 300px;
  margin-bottom: 40px;
  border-radius: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 400px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 500px;
      margin-bottom: 20px;
  }
`;

export const LPImage = styled.img`
  width: 100px;
  margin: 10px;
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  // @vite-ignore
  cursor: url(${new URL("../assets/icons/paw_white.png", import.meta.url).href}), auto;
  -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter
  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {

    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 150px;

    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 200px;

    }
`;
const LPLink = styled(Link)`
//display: flex;
//flex-direction: row;
gap: 5px;
text-decoration: none;
color: ${KRITVIT};
font-size: 1.2rem;
text-align: center;
cursor: pointer;
// @vite-ignore
cursor: url(${new URL("../assets/icons/paw_white.png", import.meta.url).href}), auto;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

export const Home = () => {

  return ( 
  <BackgroundOriginal>
    <WrapperWhite>
      <H1PurpleSecond>Lps-Tuvas Sida</H1PurpleSecond>
      <TextWrapper>
      <div>Hösten är här! Galleriet är påfyllt med härliga höstbilder på Littlest Pet Shop när de är ute på äventyr. Gå in och titta. Det finns också några nya färgläggningsbilder att färglägga.</div>
      </TextWrapper>
      <ReklamOrangeBack>
        <H4Black>Musik till Halloweenfesten!</H4Black>
        Vill du ha tips till Halloweenfesten eller bra höstmusik att ha när du höst-pysslar så finns det två jättebra låtar 
        du kan lägga till i din spellista. 
        
        <p>Den första är "<StyledLinkHalloween to="https://open.spotify.com/track/1Z1qc0vQaCqJCWyHpYtbWf?si=3d2ba3e69f7e46c5" target="_blank">Nu är det Halloween</StyledLinkHalloween>" som Tuva har skrivit och spelat in. 
          Den andra är "<StyledLinkHalloween to="https://open.spotify.com/track/4Gv0q5LLLznmzi6yLrtfcp?si=2f16de72a6494ada" target="_blank">Hösten är här</StyledLinkHalloween>" som Tuva har varit med och skrivit och är med och sjunger på. Tuva var fortfarande rätt liten 
          när den spelades in. Det är flera andra som sjunger där också. Bland annat hennes kompis Maja, hennes bror Albin 
          och hennes mamma Carina. 
        </p>
        <div>
        <LPLink to="https://open.spotify.com/track/1Z1qc0vQaCqJCWyHpYtbWf?si=3d2ba3e69f7e46c5" target="_blank"><LPImage src={Halloween} alt="Nu är det Halloween" loading="lazy"/></LPLink>
        <LPLink to="https://open.spotify.com/track/4Gv0q5LLLznmzi6yLrtfcp?si=2f16de72a6494ada" target="_blank"><LPImage src={Hosten} alt="Hösten är här" loading="lazy"/></LPLink>
      </div>
        <p>Känner du till några bra höst eller Halloweenlåtar så tipsa gärna Tuva.
        </p>
      </ReklamOrangeBack>
      <HomeImg src={HomeImage} alt="Höstbild på en kanin med ett rött löv." loading="lazy"/>

      <SerieImage src={Gris} alt="Gris" loading="lazy"/>
    </WrapperWhite>
  
  </BackgroundOriginal>

  )};