import styled from "styled-components";
import { NavigationContainer, DesktopMenu } from "./Menu/DesktopMenu"
import { HamburgerMenu } from "./Menu/HamburgerMenu"
import { LogoTitle } from "./styled/Title"
import { KRITVIT, SMUTSROSA } from "./styled/Variables";
import { LogoContainer, LogoImage } from "./styled/Image";
import LogoRund from '../assets/images/logoRund.png';

export const Header = () => {

  const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: ${SMUTSROSA};
  color: ${KRITVIT};
  margin: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

  // Måste ha denna så att bilden håller sig på plats
  const LogoLink = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    cursor: url(${new URL("../assets/icons/paw_white.png", import.meta.url).href}), auto;
  `;

return (<>

  <HeaderContainer>

  <LogoContainer>
    <LogoLink href="/">
    <LogoImage src={LogoRund} alt="Logo" loading="lazy"/>
    </LogoLink>
    </LogoContainer>
    
    <NavigationContainer>
      <LogoTitle>Lps-Tuva</LogoTitle>
      <HamburgerMenu /> 
      <DesktopMenu />
    </NavigationContainer>
  </HeaderContainer>
</>)
}