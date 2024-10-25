import { NavLink, Outlet } from "react-router-dom"
import { Title } from "../components/styled/Title"
import styled from "styled-components";
import { HamburgerMenu } from "../components/HamburgerMenu";
import { BREAKPOINT_TABLET } from "../components/styled/Variables";


const NavigationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  
`;

const DesktopNav = styled.nav`
  display: none;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: block;
  }
/*
  ul {
    display: flex;
    list-style-type: none;

    li {
      margin: 0 15px;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }*/
`;
export const Layout = () => {
  return (
    <>
      <header>
        <NavigationContainer>
          <Title>LpsTuva</Title>
          <HamburgerMenu /> 
          <DesktopNav>
            <ul>
              <li>
                <NavLink to="/">Hem</NavLink>
              </li>
              <li>
                <NavLink to="/galleri">Galleri</NavLink>
              </li>
              <li>
                <NavLink to="/kontakt">Kontakt</NavLink>
              </li>
            </ul>
          </DesktopNav>
        </NavigationContainer>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; LpsTuva 2024</p>
      </footer>
    </>
  );
};