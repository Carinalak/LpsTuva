import { createHashRouter } from "react-router-dom";
import { Galleri } from "./pages/Galleri";
import { Home } from "./pages/Home";
import { Kontakt } from "./pages/Kontakt";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { GalleriBilder } from "./pages/GalleriBilder";
import { MinaLps } from "./pages/MinaLps";
import { Tack } from "./pages/Tack";


export const router = createHashRouter([
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
            {
                path: "/tack",
                element:<Tack></Tack>,
            },
        ],
    },
]);
