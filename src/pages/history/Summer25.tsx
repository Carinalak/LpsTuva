import { HistoryDatePink, HistoryWrapperWhite, TextWrapper } from "../../components/styled/Wrappers"
import Gris from '../../assets/images/gris.png';
import { Link } from "react-router-dom";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, POOLBLA, SKUGGLILA } from "../../components/styled/Variables";
import { styled } from "styled-components";
import { SerieImage } from "../../components/styled/Image";
import HomeImage from '../../assets/images/galleri/spring/lila_ko_krokus.jpg';

export const HomeImg = styled.img `
  width: 300px;
  margin-bottom: 60px;
  border-radius: 10px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 400px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 500px;
      margin-bottom: 80px;
  }
      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 700px;
      margin-bottom: 20px;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${SKUGGLILA};
  transition: color 0.3s ease;

  &:hover {
    color: ${POOLBLA};
    text-decoration: underline;
  }
`;

export const Summer25 = () => {

  return ( 

    <HistoryWrapperWhite>
      <HistoryDatePink> Sommar 2025 </HistoryDatePink>
      <TextWrapper>
        <p>Välkommen till Lps-Tuvas sida!</p>
        <p>Här hittar du <StyledLink to="/farglagg">färgläggning</StyledLink>, <StyledLink to="/pysselspel">memoryspel</StyledLink> och 
        ett <StyledLink to="/galleribilder">fotogalleri</StyledLink>.
        Om du vill skriva till Tuva kan du gå till <StyledLink to="/kontakt">Kontakt</StyledLink> och göra det där.</p>
      </TextWrapper>
      <HomeImg src={HomeImage} alt="" loading="lazy"/>
      <SerieImage src={Gris} alt="Gris" loading="lazy"/>
    </HistoryWrapperWhite>

  )};