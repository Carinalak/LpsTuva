import { Link } from "react-router-dom";
import { H1WhiteSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, CenteredColTransWrapper, WrapperTransparent } from "../components/styled/Wrappers";
import Farglagg from '../assets/images/link_farglagg.png';
import Memory from '../assets/images/link_memory.png';
//import JulMemory from '../assets/images/link_julmemory.png';
import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, GAMMELROSA, KRITVIT } from "../components/styled/Variables";


export const PysselSpel = () => {

  const PysselLink = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-decoration: none;
    color: ${KRITVIT};
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: ${GAMMELROSA};
      text-decoration: underline;
    }

      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
        font-size: 2rem;
        line-height: 50px;
      }
`;


const PysselSpelLinkImage = styled.img`
  width: 100px;
  height: 100px; 
  object-fit: cover; // Beskär bilden
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${KRITVIT};
    &:hover {
        border: 2px solid ${GAMMELROSA};
      }

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      object-fit: cover;
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

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
  }
`;



  return (<BackgroundOriginal>
<WrapperTransparent>
    <H1WhiteSecond>Pyssel & Spel</H1WhiteSecond>
    < PysselSpelWrapper>
    <PysselLink to="/farglagg">Färgläggning<PysselSpelLinkImage src={Farglagg} /></PysselLink>
    <PysselLink to="/memory">Memoryspel<PysselSpelLinkImage src={Memory} /></PysselLink>
    {/**<PysselLink to="/julmemory">Julmemory<PysselSpelLinkImage src={JulMemory} /></PysselLink> **/}

    {/* 
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Färgläggning</H4White>
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Memoryspel</H4White>
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Julmemory</H4White>*/}
      
    </ PysselSpelWrapper>
  </WrapperTransparent>


  
  </BackgroundOriginal>)
};