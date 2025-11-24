import { Link } from "react-router-dom";
import { H1WhiteSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, WrapperTransparent } from "../components/styled/Wrappers";
import Farglagg from '../assets/logos/farglagg_logo2_300.png';
import Memory from '../assets/logos/memory_logo300.png';
//import HalloweenMemory from '../assets/logos/memory_halloween_logo.png';
//import HalloweenPyssel from '../assets/logos/halloweenpyssel_logo.png';
//import Kaninspelet from '../assets/logos/Kaninspelet_logo300.png';
import Ritblock from '../assets/logos/Ritblock_logo_300b.png';
import JulMemory from '../assets/logos/julmemory_logo_300.png';
import JulKalender from '../assets/logos/julkalender25_logo300.png';
import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT } from "../components/styled/Variables";
import { useEffect } from "react";


export const PysselLink = styled(Link)`
display: flex;
flex-direction: column;
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

export const PysselSpelLinkImage = styled.img`
width: 110px;
height: 110px; 
//object-fit: cover; // Beskär bilden
border-radius: 10px;
cursor: pointer;
// @vite-ignore
cursor: url(${new URL("../assets/icons/paw_white.png", import.meta.url).href}), auto;
transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;

&:hover {
    transform: scale(1.3);
  }

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  object-fit: cover;
  width: 170px;
  height: 170px; 
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  object-fit: cover;
}
@media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
  width: 310px;
  height: 310px; 
  object-fit: cover;
}
`;

const PysselSpelWrapper = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 30px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    gap: 50px;
  }
    
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      gap: 110px;
      padding-top: 50px;
  }
`;


export const PysselSpel = () => {

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
      <WrapperTransparent>
        <H1WhiteSecond>Pyssel & Spel</H1WhiteSecond>
          < PysselSpelWrapper>
          <PysselLink to="/jul/kalender/julkalender"><PysselSpelLinkImage src={JulKalender} />Julkalender</PysselLink>
          <PysselLink to="/julmemory"><PysselSpelLinkImage src={JulMemory} />Julmemory</PysselLink>
          {/*<PysselLink to="/halloweenmemory"><PysselSpelLinkImage src={HalloweenMemory} />Halloween Memory</PysselLink>
          <PysselLink to="/halloween/halloweenpyssel"><PysselSpelLinkImage src={HalloweenPyssel} />Halloweenpyssel</PysselLink> */}
          <PysselLink to="/memory"><PysselSpelLinkImage src={Memory} />Memory</PysselLink>
          <PysselLink to="/farglagg"><PysselSpelLinkImage src={Farglagg} />Färglägg</PysselLink>
          <PysselLink to="/ritblock"><PysselSpelLinkImage src={Ritblock} />Ritblock</PysselLink>
 

          {/**<PysselLink to="https://kaninspelet.onrender.com" target="_blank"><PysselSpelLinkImage src={Kaninspelet} />Kaninspelet</PysselLink>**/}


          {/* 
            <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Färgläggning</H4White>
            <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Memoryspel</H4White>
            <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Julmemory</H4White>*/}
            
          </ PysselSpelWrapper>
        </WrapperTransparent>
    
      </BackgroundOriginal>
      )
};