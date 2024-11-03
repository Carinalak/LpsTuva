import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"



export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; LpsTuva 2024</p>
      </footer>
    </>
  );
};