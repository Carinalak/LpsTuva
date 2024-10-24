import { NavLink, Outlet } from "react-router-dom"
import { Title } from "../components/styled/Title"

export const Layout = () => {
    return <>
        <header>
            <section className="navigation-container">
            <Title>LpsTuva</Title>
                <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Hem</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/galleri"}>Galleri</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/kontakt"}>Kontakt</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <p>&copy; LpsTuva 2024</p>
        </footer>
    </>
}