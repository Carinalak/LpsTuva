import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT, SKUGGLILA } from "./Variables";

export const H1White = styled.h1 `
    padding: 0;
    color: ${KRITVIT};
    font-size: 2.4rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 0.3;
    text-align: center;
`;

export const LogoTitle = styled(H1White) `
margin-left: 80px; // Beroende av loggans position
z-index: 87;
position: relative;
left: 7%;
`;

export const H1Purple = styled(H1White) `
  color: ${SKUGGLILA};
  line-height: 1.9;
  text-shadow: none;
`;

export const H2White = styled.h2 `
    padding: 0;
    color: ${KRITVIT};
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    padding-bottom: 15px;
    padding-top: 10px;

`;

export const H4White = styled.h4 `
    padding: 0;
    color: ${KRITVIT};
    font-size: 1rem;
    text-align: center;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 1.3rem;
    }

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {

    }
`;