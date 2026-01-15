import { H1PurpleSecond, H4White, StyledLinkHalloween } from "../components/styled/Fonts"
import { BackgroundOriginal, DropdownWrapper, HomeImg, PinkBackground, TextWrapperWhiteFont2, WrapperWhite } from "../components/styled/Wrappers"
//import { Link } from "react-router-dom";
//import { SerieImage } from "../components/styled/Image";
import HomeImage from '../assets/images/galleri/winter/rav_gran.jpg';
import { useEffect, useState } from "react";
import { useHistoryEntries } from "../components/styled/useHistoryEntries";
import { HistorySortDropdown } from "./history/HistorySortDropdown";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from "../components/styled/Variables";
import styled from "styled-components";
/*
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
`;*/

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

export const MediumImg = styled(HomeImg)`
width: 200px;
padding-top: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 200px;
    padding-top: 30px;
    
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 250px;
      margin-bottom: 20px;
  }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 380px;
      margin-top: 40px;
      margin-bottom: 40px;

  }
`;

export const MediumImgHover = styled(HomeImg)`
  width: 110px;
  cursor: pointer;
  // @vite-ignore
  cursor: url(${new URL("/public/paw_white.png", import.meta.url).href}), auto;
  -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter
  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  margin-bottom: 20px;

      &:hover {
      transform: scale(1.1);
    }

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 150px;
  }

    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 350px;

  }
`;

export const DoubleImage = styled.div `
padding-top: 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 30px;
width: 100%;
//border: 1px solid white;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding-top: 30px;
    gap: 70px;
  }

      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    gap: 110px;
  }


`;


/*
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
cursor: url(${new URL("/public/paw_white.png", import.meta.url).href}), auto;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    font-size: 2rem;
    line-height: 50px;
  }
`;
*/
export const Home = () => {
    const [sortBy, setSortBy] = useState("none");
    const { currentEntries } = useHistoryEntries(sortBy);

// --------------------- Koden nedan gör så att sidan hamnar högst upp när den öppnas ---------------------- // 
// Den scrollar till toppen endast vid första mount av komponenten. Ignorerar vid lokala klick.
  useEffect(() => {
  const topElement = document.getElementById("top");
  if (topElement) {
    topElement.scrollIntoView({ behavior: "auto" });
  }
}, []); // Körs EN gång när sidan laddas
// ---------------------------------------- SLUT PÅ SCROLLKOD ---------------------------------------------- //
  
  return ( 
  <BackgroundOriginal>
    <WrapperWhite>
      <H1PurpleSecond>Lps-Tuvas Sida</H1PurpleSecond>
      <PinkBackground>
          <H4White>Välkommen!</H4White>
          <TextWrapperWhiteFont2>
            <div>
              Välkommen till Lps-Tuvas sida! 
              Spela Tuvas <StyledLinkHalloween to="/memory">memoryspel</StyledLinkHalloween>, eller <StyledLinkHalloween to="/farglagg">färglägg/skriv ut</StyledLinkHalloween> hennes bilder. <StyledLinkHalloween to="/galleribilder">Bildgalleriet</StyledLinkHalloween> är påfyllt med konstnärliga bilder på Petshopar.
            </div>
          </TextWrapperWhiteFont2>
        <HomeImg src={HomeImage} alt="Frontbild" loading="lazy"/>
  
        </PinkBackground>
 
     

  <DropdownWrapper>

    Gamla inlägg:       
    
    <HistorySortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      
    </DropdownWrapper>
     {/*<Oktober25 /> */} 
      <div style={{ marginTop: 40 }}>
        {currentEntries.map((entry, i) => (
          <div key={i}>{entry.component}</div>
        ))}
      </div>
    </WrapperWhite>
  
  </BackgroundOriginal>

  )};