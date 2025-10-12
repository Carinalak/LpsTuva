import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET } from "./Variables";

export const MemoryStyle = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 100%;
  margin: 0 auto;
  justify-items: center;
  align-items: center;

@media screen and (min-width: ${BREAKPOINT_TABLET}) {
  grid-template-columns: repeat(4, 1fr);
}
@media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
  gap: 10px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    gap: 20px;
  }

  // ---------------------- HARD MODE --------------------------- //
  &.hard-mode {
      grid-template-columns: repeat(4, 1fr);
    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      grid-template-columns: repeat(7, 1fr);
    }
  }
`;

export const MemoryCard = styled.div `
  width: 100px;
  height: 100px;
  perspective: 1000px; /* För att ge 3D-effekten */
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  cursor: url(${new URL("/public/paw_white.png", import.meta.url).href}), !important;
  -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 130px;
    height: 130px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 140px;
    height: 140px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 160px;
    height: 160px;
  }
  // ---------------------- HARD MODE --------------------------- //
  &.hard-mode {
    width: 80px;
    height: 80px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 110px;
      height: 110px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 150px;
    height: 150px;
  }

  }
  
  
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
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card-back {
    transform: rotateY(0deg); /* Baksidan är rättvänd */
  }

  .card-front {
    transform: rotateY(180deg); /* Framsidan är spegelvänd */
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