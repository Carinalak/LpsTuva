import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";

/*
const MainContainer = styled.main`
  padding-top: 130px; // Höjd på main för att när header är fixed tar den upp den plats över main som dens egen höjd.
  //width: 100%;
  overflow-x: hidden;
  padding-bottom: 10px;
`;*/

export const Layout = () => {
  return (
    <>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />

    </>
  );
};