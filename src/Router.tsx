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
import { AdminLogin } from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import { Ritblock } from "./components/ritblock/Ritblock";
import { FarglaggNu } from "./components/ritblock/FarglaggNu";
import { LpsGarderoben } from "./components/LpsGarderoben/LpsGarderoben";
import { Om } from "./pages/Om";





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
                path: "/om",
                element: <Om></Om>,
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
            {
                path: "/adminlogin",
                element: <AdminLogin />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                path: "/ritblock",
                element: <Ritblock />,
            },
            {
                path: "/FarglaggNu",
                element: <FarglaggNu />,
            },
            {
                path: "/lpsgarderoben",
                element: <LpsGarderoben />,
            },
        ],
    },
]);
