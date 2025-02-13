import { Link } from "react-router-dom";
import { H1WhiteSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, CenteredColTransWrapper, WrapperTransparent } from "../components/styled/Wrappers";
import Farglagg from '../assets/logos/farglagg_logo2_300.png';
import Memory from '../assets/logos/memory_logo300.png';
import Kaninspelet from '../assets/logos/Kaninspelet_logo300.png';
import Ritblock from '../assets/logos/Ritblock_logo_300b.png';
//import JulMemory from '../assets/images/link_julmemory.png';
import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT } from "../components/styled/Variables";


const PysselLink = styled(Link)`
display: flex;
flex-direction: column;
gap: 5px;
text-decoration: none;
color: ${KRITVIT};
font-size: 1.2rem;
text-align: center;
cursor: pointer;
cursor: url(${new URL("../assets/icons/paw_white.png", import.meta.url).href}), auto;


  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    font-size: 2rem;
    line-height: 50px;
  }
`;

const PysselSpelLinkImage = styled.img`
width: 100px;
height: 100px; 
//object-fit: cover; // Beskär bilden
border-radius: 10px;
cursor: pointer;
cursor: url(${new URL("../assets/icons/paw_white.png", import.meta.url).href}), auto;
transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;

&:hover {
    transform: scale(1.3);
  }

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  object-fit: cover;
  width: 150px;
  height: 150px; 
}

@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  object-fit: cover;
}
@media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
  width: 200px;
  height: 200px; 
  object-fit: cover;
}
`;

const PysselSpelWrapper = styled(CenteredColTransWrapper) `
display: grid;
grid-template-columns: repeat(2, 1fr);
padding-top: 30px;


@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  display: flex;
  flex-direction: row;
  align-items: center;
}
`;


export const PysselSpel = () => {

  return (
    <BackgroundOriginal>
      <WrapperTransparent>
        <H1WhiteSecond>Pyssel & Spel</H1WhiteSecond>
          < PysselSpelWrapper>
          <PysselLink to="/farglagg"><PysselSpelLinkImage src={Farglagg} />Färglägg</PysselLink>
          <PysselLink to="/ritblock"><PysselSpelLinkImage src={Ritblock} />Ritblock</PysselLink>
          <PysselLink to="/memory"><PysselSpelLinkImage src={Memory} />Memory</PysselLink>
          <PysselLink to="https://kaninspelet.onrender.com" target="_blank"><PysselSpelLinkImage src={Kaninspelet} />Kaninspelet</PysselLink>
          {/**<PysselLink to="/julmemory">Julmemory<PysselSpelLinkImage src={JulMemory} /></PysselLink> **/}

          {/* 
            <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Färgläggning</H4White>
            <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Memoryspel</H4White>
            <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Julmemory</H4White>*/}
            
          </ PysselSpelWrapper>
        </WrapperTransparent>
    
      </BackgroundOriginal>
      )
};