import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../styled/Variables";
import { NavLink } from "react-router-dom";
import { MenuLinks } from "./MenuLinks";

export const NavigationContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%; 
`;

export const DesktopNav = styled.nav`
  display: none;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: block;
    ul {
      margin: 0px;
      margin-right: 30px;
      padding: 0px;
      list-style: none;
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    li a {
      font-weight: 700;
      font-size: 1.4rem;
      color: #FFFFFF;
      text-decoration: inherit;
    }

    li a:hover {
      color: #AB3DA7; 
    }

    li a:active {
      color: #80D7EA;

    }

    li a:hover:active {
      color: #80D7EA;
    }
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