import { createHashRouter } from "react-router-dom";
import { Galleri } from "./pages/Galleri";
import { Home } from "./pages/Home";
import { Kontakt } from "./pages/Kontakt";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { MinaLps } from "./pages/MinaLps";
import { Tack } from "./pages/Tack";
import { GalleriBilder } from "./pages/GalleriBilder";
import { GalleriBild } from "./pages/GalleriBild";
import { Farglagg } from "./pages/Farglagg";
import { Pyssel } from "./pages/Pyssel";


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
                path: "/galleriBilder",
                element:<GalleriBilder></GalleriBilder>,
            },
            {
                path: "/galleribild/:id",
                element:<GalleriBild></GalleriBild>,
            },
            {
                path: "/minalps",
                element:<MinaLps></MinaLps>,
            },
            {
                path: "/pyssel",
                element:<Pyssel></Pyssel>,
            },
            {
                path: "/farglagg",
                element:<Farglagg></Farglagg>,
            },
            {
                path: "/tack",
                element:<Tack></Tack>,
            },
        ],
    },
]);
