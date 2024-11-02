import { createBrowserRouter } from "react-router-dom";
import { Galleri } from "./pages/Galleri";
import { Home } from "./pages/Home";
import { Kontakt } from "./pages/Kontakt";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { GalleriBilder } from "./pages/GalleriBilder";
import { MinaLps } from "./pages/MinaLps";


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
            {
                path: "/galleribilder",
                element:<GalleriBilder></GalleriBilder>,
            },
            {
                path: "/minalps",
                element:<MinaLps></MinaLps>,
            },
        ],
    },
]);
