import { H1PurpleSecond, H4White, StyledLinkHalloween } from "../components/styled/Fonts"
import { BackgroundOriginal, ChristmasBackground, DropdownWrapper, TextWrapperBred, WrapperWhite } from "../components/styled/Wrappers"
//import { Link } from "react-router-dom";
import GodJulTomte from '../jul/img/godjul_tomte_animation.gif';
import TarnaHast from '../jul/img/tarna_hast.png';
import JulMemory from '../assets/logos/julmemory_logo_300.png';
import JulKalender from '../assets/logos/julkalender25_logo300text.png';

import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from "../components/styled/Variables";
import { styled } from "styled-components";
import { SerieImage } from "../components/styled/Image";
import { useEffect, useState } from "react";
import { useHistoryEntries } from "../components/styled/useHistoryEntries";
import { HistorySortDropdown } from "./history/HistorySortDropdown";

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
padding-top: 30px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 200px;
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
  width: 200px;
  padding-top: 30px;
  cursor: pointer;
  // @vite-ignore
  cursor: url(${new URL("/public/paw_white.png", import.meta.url).href}), auto;
  -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter
  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;

      &:hover {
      transform: scale(1.1);
    }

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 200px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 250px;
      margin-bottom: 20px;
  }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 350px;

  }
`;

export const DoubleImage = styled.div `
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: center;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    padding-top: 30px;
    flex-direction: row;
    gap: 30px;
  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    gap: 3
    0px;
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
      <ChristmasBackground>
          <H4White>God Jul önskar Tuva!</H4White>
          <TextWrapperBred>
            <div>
            Snart är julen här och vi har laddat upp med ett roligt <StyledLinkHalloween to="/julmemory"> Julmemory</StyledLinkHalloween>. 
            Men bäst av allt - <StyledLinkHalloween to="/jul/kalender/julkalender"> Tuvas Julkalender</StyledLinkHalloween>! 
            Öppna en lucka per dag till och med julafton!!
          </div>
          </TextWrapperBred>
          <DoubleImage>
          <StyledLinkHalloween to="/julmemory"><MediumImgHover src={JulMemory} /></StyledLinkHalloween>
          <StyledLinkHalloween to="/jul/kalender/julkalender"><MediumImgHover src={JulKalender} /></StyledLinkHalloween>
          </DoubleImage>
          <SerieImage src={TarnaHast} />
  
        </ChristmasBackground>
        <MediumImg src={GodJulTomte} />
     

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