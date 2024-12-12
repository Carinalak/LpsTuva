import styled from "styled-components";
import { BREAKPOINT_TABLET } from "./Variables";

export const MemoryStyle = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;

  
@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  grid-template-columns: repeat(4, 1fr);
}
`;

export const MemoryCard = styled.div `
  width: 100px;
  height: 100px;
  perspective: 1000px; /* För att ge 3D-effekten */
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s ease-in-out;
  }

  &.flipped .card-inner {
    transform: rotateY(180deg); /* Vänder kortet till framsidan */
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hindrar den dolda sidan från att synas */
    border-radius: 5px;
  }

  .card-back {
    transform: rotateY(0deg); /* Baksidan är rättvänd */
  }

  .card-front {
    transform: rotateY(180deg); /* Framsidan är spegelvänd */
    background-color: white;
  }
`;


export const CardImage = styled.img `
    width: 100%;
    height: 100%;
    border-radius: 5px;

`;

export const CardMatched = styled.img `
    opacity: 0.6;
    pointer-events: none;

`;