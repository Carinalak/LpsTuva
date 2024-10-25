import { Outlet } from "react-router-dom"
import { Title } from "../components/styled/Title"
import { HamburgerMenu } from "../components/Menu/HamburgerMenu";
import { NavigationContainer, DesktopMenu } from "../components/Menu/DesktopMenu";


export const Layout = () => {
  return (
    <>
      <header>
        <NavigationContainer>
          <Title>LpsTuva</Title>
          <HamburgerMenu /> 
          <DesktopMenu />
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