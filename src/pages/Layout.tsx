import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";
import styled from "styled-components";

const MainContainer = styled.main`
  padding-top: 130px; // Höjd på main för att när header är fixed tar den upp den plats över main som dens egen höjd.
  //width: 100%;
  overflow-x: hidden;
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