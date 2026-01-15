import { H4White, StyledLinkHalloween } from "../../components/styled/Fonts"
import { ChristmasBackground, HistoryDateJul, HistoryWrapperWhite, TextWrapperWhiteFont2, } from "../../components/styled/Wrappers"

import GodJulTomte from '../../jul/img/godjul_tomte_animation.gif';
import TarnaHast from '../../jul/img/tarna_hast.png';
import JulMemory from '../../assets/logos/julmemory_logo_300.png';
import JulKalender from '../../assets/logos/julkalender25_logo300.png';


//import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT } from "../../components/styled/Variables";
//import { styled } from "styled-components";
import { SerieImage } from "../../components/styled/Image";


import { DoubleImage, MediumImgHover, MediumImg } from "../Home";


export const December25 = () => {

  
  return ( 
    <HistoryWrapperWhite>
      <HistoryDateJul>December 2025</HistoryDateJul>
      <ChristmasBackground>
          <H4White>God Jul önskar Tuva!</H4White>
          <TextWrapperWhiteFont2>
            <div>
            Snart är julen här och vi har laddat upp med ett roligt <StyledLinkHalloween to="/julmemory"> Julmemory</StyledLinkHalloween>. 
            Men bäst av allt - <StyledLinkHalloween to="/jul/kalender/julkalender"> Tuvas Julkalender</StyledLinkHalloween>! 
            Öppna en lucka per dag till och med julafton!!
          </div>
          </TextWrapperWhiteFont2>
          <DoubleImage>
          <div><StyledLinkHalloween to="/julmemory"><MediumImgHover src={JulMemory} /></StyledLinkHalloween></div>
          <div><StyledLinkHalloween to="/jul/kalender/julkalender"><MediumImgHover src={JulKalender} /></StyledLinkHalloween></div>
          </DoubleImage>
          <SerieImage src={TarnaHast} />
  
        </ChristmasBackground>
        <MediumImg src={GodJulTomte} />

    </HistoryWrapperWhite>
  )};