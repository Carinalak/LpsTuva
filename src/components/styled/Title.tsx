import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT, SKUGGLILA } from "./Variables";

export const Title = styled.h1 `
    padding: 0;
    color: ${KRITVIT};
    font-size: 2.4rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    //line-height: 0.3;
    padding-left: 7%;
`;

export const LogoTitle = styled(Title) `
margin-left: 80px; // Beroende av loggans position
z-index: 87;
`;

export const SecondaryTitle = styled(Title) `
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

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 1.3rem;
    }

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {

    }
`;