import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT, POOLBLA, SKUGGLILA } from "./Variables";
import { Link } from "react-router-dom";

export const H1White = styled.h1 `
    padding: 0;
    color: ${KRITVIT};
    font-size: 2rem;
    font-family: "Playpen Sans", serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 0.3;
    text-align: center;
    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 2.2rem;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      font-size: 2.4rem;
    }
`;

export const H1PurpleSecond = styled(H1White) `           // Titel på varje sida - lila
  color: ${SKUGGLILA};
  line-height: 1.1;
  text-shadow: none;
`;

export const H1WhiteSecond = styled(H1White) `      // Titel på varje sida - vit
  color: ${KRITVIT};
  line-height: 1.6;
    text-shadow: none;
`;

export const H2White = styled.h2 `
    padding: 0;
    color: ${KRITVIT};
    font-family: "Playpen Sans", serif;
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    padding-bottom: 15px;
    padding-top: 10px;

`;

export const H4White = styled.h4 `
    padding: 0;
    font-family: "Playpen Sans", serif;
    color: ${KRITVIT};
    font-size: 1rem;
    text-align: center;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 1.3rem;
    }

    @media (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 1.4rem;
      }
`;

export const FooterTextWhite = styled.p `
    padding: 0;
    font-family: "Playpen Sans", serif;
    color: ${KRITVIT};
    font-size: 1rem;
    text-align: center;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 1.1rem;
    }

`;

export const LogoTitle = styled(H1White) `
margin-left: 80px; // Beroende av loggans position
z-index: 87;
position: relative;
left: 7%;
`;

export const H1Title = styled.h1 `
    padding: 0;
    color: ${KRITVIT};
    font-size: 2rem;
    font-family: "Playpen Sans", serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 0.3;
    text-align: center;
    padding-bottom: 12px;
    
    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 2.4rem;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      font-size: 2.6rem;
    }

`;
export const H1Title404 = styled(H1Title) `
    padding-bottom: 0;
    line-height: 0;
`;

export const StyledLinkWhite = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0; 
  display: flex;
  color: ${KRITVIT};
    &:hover {
      color: ${POOLBLA};
      text-decoration: none;
    }
`;