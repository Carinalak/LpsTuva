import { createHashRouter } from "react-router-dom";
import { Galleri } from "./pages/Galleri";
import { HomeTest } from "./pages/HomeTest";
import { Kontakt } from "./pages/Kontakt";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import { Tack } from "./pages/Tack";
import { GalleriBilder } from "./pages/GalleriBilder";
import { GalleriBild } from "./pages/GalleriBild";
import { Farglagg } from "./pages/Farglagg";
import { PysselSpel } from "./pages/Pysselspel";
import { Memory } from "./pages/Memory";
import { Julmemory } from "./pages/Julmemory";
import { AdminHome } from "./pages/AdminHome";
import { Home } from "./pages/Home";




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
                path: "/pysselspel",
                element:<PysselSpel></PysselSpel>,
            },
            {
                path: "/farglagg",
                element:<Farglagg></Farglagg>,
            },
            {
                path: "/memory",
                element:<Memory></Memory>,
            },
            {
                path: "/julmemory",
                element:<Julmemory></Julmemory>,
            },
            {
                path: "/tack",
                element:<Tack></Tack>
            },
            {
                path: "/hometest",
                element:<HomeTest></HomeTest>,
            },
            {
                path: "/adminhome",
                element:<AdminHome></AdminHome>,
            },
        ],
    },
]);
