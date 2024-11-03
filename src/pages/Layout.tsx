import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";
import styled from "styled-components";

const MainContainer = styled.main`
  padding-top: 120px; // Höjd på main för att när header är fixed tar den upp den plats över main som dens egen höjd.
`;

export const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />

    </>
  );
};