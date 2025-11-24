import { H4Black, StyledLink, StyledLinkHalloween } from "../../components/styled/Fonts"
import { HistoryDateHalloween, HistoryWrapperWhite, ReklamOrangeBack, TextWrapper, } from "../../components/styled/Wrappers"
import Pumpakorg from '../../assets/images/halloween/dekorationer/pumpakorg.png';
import Halloween from '../../assets/images/LPHalloween.png';
import Hosten from '../../assets/images/LPHosten.png';
import { Link } from "react-router-dom";
import HalloweenMemory from '../../assets/logos/halloween_memory_reklam.png';


import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT } from "../../components/styled/Variables";
import { styled } from "styled-components";
import { SerieImage } from "../../components/styled/Image";
import HomeImage from '../../assets/images/galleri/autumn/Hund_orange_lov.jpg';
import { PysselLink } from "./../Pysselspel";
import { HomeImg } from "./Summer25";


export const HalloweenImg = styled(HomeImg)`
width: 200px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 300px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 400px;
      margin-bottom: 20px;
  }

`;

export const LpWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    gap: 20px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      gap: 50px;
    }
`;

export const LPImage = styled.img`
  width: 100px;
  margin: 10px;
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  // @vite-ignore
  cursor: url(${new URL("/public/paw_white.png", import.meta.url).href}), auto;
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
      width: 250px;
    }
`;
export const LPLink = styled(Link)`
//display: flex;
//flex-direction: row;
gap: 5px;
text-decoration: none;
color: ${KRITVIT};
font-size: 1.2rem;
text-align: center;
cursor: pointer;
// @vite-ignore
cursor: url(${new URL("/public/paw_white.png", import.meta.url).href}), auto;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

export const Oktober25 = () => {

  
  return ( 
    <HistoryWrapperWhite>
      <HistoryDateHalloween>Oktober 2025</HistoryDateHalloween>
      <TextWrapper>
        <div>Hösten är här! Galleriet är påfyllt med härliga höstbilder på Littlest Pet Shop när de är ute på äventyr. 
          Gå in och titta. Det finns också några nya färgläggningsbilder att färglägga 
          och <StyledLink to="/../halloween/halloweenpyssel"> halloweenpyssel</StyledLink> att pyssla! Nya memoryspelet med Halloweentema är här. Kolla in det!</div>
      </TextWrapper>
        <PysselLink to="/halloweenmemory"><HalloweenImg src={HalloweenMemory} /></PysselLink>
      <TextWrapper>
        
      </TextWrapper>
      <ReklamOrangeBack>
        <H4Black>Musik till Halloweenfesten!</H4Black>
        <TextWrapper>
        Vill du ha tips till Halloweenfesten eller bra höstmusik att ha när du höst-pysslar så finns det två jättebra låtar 
        du kan lägga till i din spellista. 
        
        
          Den första är "<StyledLinkHalloween to="https://open.spotify.com/track/1Z1qc0vQaCqJCWyHpYtbWf?si=3d2ba3e69f7e46c5" target="_blank">Nu är det Halloween</StyledLinkHalloween>" som Tuva har skrivit och spelat in. 
          Den andra är "<StyledLinkHalloween to="https://open.spotify.com/track/4Gv0q5LLLznmzi6yLrtfcp?si=2f16de72a6494ada" target="_blank">Hösten är här</StyledLinkHalloween>" som Tuva har varit med och skrivit och är med och sjunger på. Tuva var fortfarande rätt liten 
          när den spelades in. Det är flera andra som sjunger där också. Bland annat hennes kompis Maja, hennes bror Albin 
          och hennes mamma Carina. 
        </TextWrapper>
        <LpWrapper>
          <LPLink to="https://open.spotify.com/track/1Z1qc0vQaCqJCWyHpYtbWf?si=3d2ba3e69f7e46c5" target="_blank"><LPImage src={Halloween} alt="Nu är det Halloween" loading="lazy"/></LPLink>
          <LPLink to="https://open.spotify.com/track/4Gv0q5LLLznmzi6yLrtfcp?si=2f16de72a6494ada" target="_blank"><LPImage src={Hosten} alt="Hösten är här" loading="lazy"/></LPLink>
        </LpWrapper>
        <p>Känner du till några bra höst eller Halloweenlåtar så tipsa gärna Tuva.
        </p>
      </ReklamOrangeBack>
      <HomeImg src={HomeImage} alt="Höstbild" loading="lazy"/>
      <SerieImage src={Pumpakorg} alt="Pumpakorg" loading="lazy"/>

    </HistoryWrapperWhite>
  )};