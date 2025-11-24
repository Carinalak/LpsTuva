import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KOLSVART, KRITVIT, POOLBLA, PUMPAORANGE, SKUGGLILA } from "./Variables";
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
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      font-size: 3.2rem;
      padding-top: 10px;
      padding-bottom: 10px;
    }
`;

export const H1PurpleSecond = styled(H1White) `           // Titel på varje sida - lila
  color: ${SKUGGLILA};
  line-height: 1.1;
  text-shadow: none;
  
`;

export const H1WhiteSecond = styled(H1White) `      // Titel på varje sida - vit
  color: ${KRITVIT};
  line-height: 1.1;
  text-shadow: none;
  padding-bottom: 5px;
`;
export const H1HalloweenSecond = styled(H1White) `      // Titel Halloween
  color: ${PUMPAORANGE};
  line-height: 1.1;
  text-shadow: none;
  padding-bottom: 20px;
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
        font-size: 2rem;
      }
`;

export const H4Black = styled.h4 `
    padding: 0;
    font-family: "Playpen Sans", serif;
    color: ${KOLSVART};
    font-size: 1rem;
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 1.3rem;
    }

    @media (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 1.4rem;
      }
      @media (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 2rem;
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
export const StyledLinkPurple = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding: 0; 
  display: flex;
  color: ${SKUGGLILA};
  margin-right: 20px;

    &:hover {
      color: ${POOLBLA};
      text-decoration: none;
    }
`;

export const StyledTextWhite = styled.div `
  text-decoration: none;

  margin: 0;
  padding: 0; 
  display: flex;
  color: ${KRITVIT};
  margin-right: 20px;
  font-size: 0.8rem;
  cursor: pointer;

    &:hover {
      color: ${POOLBLA};
    }
`;

export const StyledTextWrapper = styled.div `
display: flex;
flex-direction: column;
align-items: left;
justify-content: left;
padding-top: 10px;
width: 100px ;     // Måste vara samma width som FarglaggImage

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 300px;
  }
`;

export const StyledTextWhiteCenter = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: ${KRITVIT};
font-size: 0.8rem;
padding-top: 10px;
//width: 90% ;
padding-top: 30px;
padding-bottom: 10px;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {

  }

`;
export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${SKUGGLILA};
  transition: color 0.3s ease;

  &:hover {
    color: ${POOLBLA};
    text-decoration: underline;
  }
`;


export const StyledLinkHalloween = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
  color: ${KRITVIT};
  transition: color 0.3s ease;

  &:hover {
    color: ${KOLSVART};
    text-decoration: underline;
  }
`;