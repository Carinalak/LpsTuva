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

return (<>

  <HeaderContainer>

  <LogoContainer><LogoImage src={LogoRund} alt="Logo" loading="lazy"/></LogoContainer>
    <NavigationContainer>
      <LogoTitle>LpsTuva</LogoTitle>
      <HamburgerMenu /> 
      <DesktopMenu />
    </NavigationContainer>
  </HeaderContainer>
</>)
}