import styled from "styled-components";
import { KRITVIT, SKUGGLILA } from "./Variables";

export const Title = styled.h1 `
    padding: 0;
    color: ${KRITVIT};
    font-size: 2.4rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 0.5;
    padding-left: 7%;


`;

export const SecondaryTitle = styled(Title) `
  color: ${SKUGGLILA};
  line-height: 1.9;
  text-shadow: none;
`;