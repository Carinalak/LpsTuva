import { createBrowserRouter } from "react-router-dom";
import { Galleri } from "./pages/Galleri";
import { Home } from "./pages/Home";
import { Kontakt } from "./pages/Kontakt";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/galleri",
                element: <Galleri></Galleri>,
            },
            {
                path: "/kontakt",
                element:<Kontakt></Kontakt>,
            },
        ],
    },
]);
