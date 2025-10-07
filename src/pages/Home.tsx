import { H1PurpleSecond } from "../components/styled/Fonts"
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers"
import Gris from '../assets/images/gris.png';

import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from "../components/styled/Variables";
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


export const Home = () => {

  return ( 
  <BackgroundOriginal>
    <WrapperWhite>
      <H1PurpleSecond>Lps-Tuvas Sida</H1PurpleSecond>
      <TextWrapper>
      <p>Hösten är här! Galleriet är påfyllt med härliga höstbilder på Littlest Pet Shop när de är ute på äventyr. Gå in och titta. Det finns också några nya färgläggningsbilder att färglägga.</p>
      </TextWrapper>
      <HomeImg src={HomeImage} alt="Höstbild på en kanin med ett rött löv." loading="lazy"/>

      <SerieImage src={Gris} alt="Gris" loading="lazy"/>
    </WrapperWhite>
  
  </BackgroundOriginal>

  )};