import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../styled/Variables";
import { NavLink } from "react-router-dom";
import { MenuLinks } from "./MenuLinks";

export const NavigationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  
`;

export const DesktopNav = styled.nav`
  display: none;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: block;
  }
`;

export const DesktopMenu = () => {

  return (<>
              <DesktopNav>
            <ul>
              {MenuLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </DesktopNav>
  </>)
}