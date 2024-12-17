import { Link } from "react-router-dom";
import { H1WhiteSecond } from "../components/styled/Title";
import { BackgroundOriginal, CenteredColTransWrapper, WrapperTransparent } from "../components/styled/Wrappers";
import { PysselSpelLinkImage } from "../components/styled/Image";
import Farglagg from '../assets/images/link_farglagg.png';
import Memory from '../assets/images/link_memory.png';
import JulMemory from '../assets/images/link_julmemory.png';
import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, GAMMELROSA, KRITVIT } from "../components/styled/Variables";


export const PysselSpel = () => {

  const PysselLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: ${KRITVIT};
    font-size: 1.2rem;
    line-height: 40px;
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

  return (<BackgroundOriginal>
<WrapperTransparent>
    <H1WhiteSecond>Pyssel & Spel</H1WhiteSecond>
    <CenteredColTransWrapper>
    <PysselLink to="/farglagg">Färgläggning<PysselSpelLinkImage src={Farglagg} /></PysselLink>
    <PysselLink to="/memory">Memoryspel<PysselSpelLinkImage src={Memory} /></PysselLink>
    <PysselLink to="/julmemory">Julmemory<PysselSpelLinkImage src={JulMemory} /></PysselLink>

    {/* 
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Färgläggning</H4White>
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Memoryspel</H4White>
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Julmemory</H4White>*/}
      
    </CenteredColTransWrapper>
  </WrapperTransparent>


  
  </BackgroundOriginal>)
};