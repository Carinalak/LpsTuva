import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, DISSAD, KOLSVART, SMUTSROSA } from "../styled/Variables";
import UndoButton from "../../assets/icons/undo.png";
import RedoButton from "../../assets/icons/redo.png";
import SaveBoard from "../../assets/icons/data-storage.png";
import ClearBoard from "../../assets/icons/dust.png";
import EraserButton from "../../assets/icons/eraser.png";
import PaintBrush from "../../assets/icons/paint-brush.png";
import SprayPaint from "../../assets/icons/spray-paint-tilt.png"
import PaintBucket from "../../assets/icons/paint-bucket.png"


export const Board = styled.div `
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const Canvas = styled.canvas.withConfig({
  shouldForwardProp: (prop) => prop !== "isEraser",
})<{ isEraser: boolean }>`
  width: 350px;
  height: 400px;
  background-color: white;
  padding: 10px;
  margin-bottom: 0;

  /*
  cursor: ${({ isEraser }) =>
    isEraser
      ? "url(/eraser2.png) 16 32, auto"
      : "crosshair"};*/

    cursor: ${({ isEraser }) => 
      isEraser 
        ? "url(/eraser2.png) 16 32, auto"
        : "url(/paint-brush3.png) 0 0, auto"
    };


  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 600px;
    height: 400px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 800px;
    height: 400px;
  }
`;


export const Toolbox = styled.div `
  width: 350px;
  background-color: #4c4849;
  padding: 10px;
  color: #FFFFFF;
  display: grid;
 // grid-template-columns: auto 1fr; /* Färgval + Penselstorlek på första raden */
  //grid-template-rows: auto auto;
  grid-template-columns: 1fr; /* Första raden för färger */
  grid-template-rows: auto auto;
  gap: 5px;
  column-gap: 70px;
  align-items: center;
  border-radius: 5px 5px 0 0;


  /* Färgvalen på första raden */
  > div:first-child {
    display: flex;
    gap: 10px;
    justify-content: left;
  }

  /* Andra raden med verktyg */
  > div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Delar upp i två kolumner: Färgval till vänster, Penna och suddgummi till höger */
    gap: 10px;
    align-items: center;
  }
    /* Penselstorlek på andra raden */
    > div:nth-child(3) {
    display: flex;
    justify-content: left;
    gap: 10px;
  }

      @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        width: 600px;
          }
      @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
        width: 800px;
      }
`;

export const ControlBox = styled.div `
  width: 350px;
  background-color: #4c4849;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  margin-top: 0;
  border-radius: 0 0 5px 5px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        width: 600px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 800px;
    }
`;

export const UndoBtn = styled.button` // Är mall för de andra knapparna i Controlbox
  padding: 0;
  border: none;
  border-radius: 10px;
  background-image: url(${UndoButton});
  background-size: 35px 35px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  width: 40px;
  height: 40px;
  transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: -5px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover {
      transform: scale(1.3);
    }

  &:disabled {
    background-color: ${DISSAD};
    cursor: not-allowed;
    transform: none;
  }
  `;

export const RedoBtn = styled(UndoBtn)`
background-image: url(${RedoButton});
`;

export const ClearBoardBtn = styled(UndoBtn) `
background-image: url(${ClearBoard});
`;

export const SaveBoardBtn = styled(UndoBtn) `
background-image: url(${SaveBoard});
`;

export const EraserBtn = styled(UndoBtn) `
  background-image: url(${EraserButton});

  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover {
      transform: scale(1.3);
    }

  &:focus {
    cursor: url(${new URL("../../assets/icons/eraser2.png", import.meta.url).href}) 16 32, auto;
  }
`;

export const PenBtn = styled(UndoBtn)`
  background-image: url(${PaintBrush});

  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover {
      transform: scale(1.3);
    }

  &:focus {
    cursor: url(${new URL("../../assets/icons/paint-brush2.png", import.meta.url).href}) 16 32, auto;
  }
`;

export const SprayBtn = styled(UndoBtn)`
  background-image: url(${SprayPaint});
  
  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover {
      transform: scale(1.3);
    }

  &:focus {
    cursor: url(${new URL("../../assets/icons/spray-paint-tilt.png", import.meta.url).href}) 16 32, auto;
  }
`;

export const PaintBucketBtn = styled(UndoBtn)`
  background-image: url(${PaintBucket});
  
  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover {
      transform: scale(1.3);
    }

  &:focus {
    cursor: url(${new URL("../../assets/icons/paint-bucket.png", import.meta.url).href}) 16 32, auto;
  }
`;

export const EraserPenContainer = styled.div `
  display: flex;
  align-self: center;
  justify-self: right;
  gap: 10px;
  margin-right: 10px;
`;


export const Colors = styled.div `
  margin-left: 10px;
`;

export const ColorBtn = styled.button `
  width: 20px;
  height: 20px;
  cursor: pointer;

  transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
  &:hover {
      transform: scale(1.3);
    }


`;

export const BrushSize = styled.div `
  display: flex;
  align-self: center;
  justify-self: left;
  gap: 5px;
  align-items: center;
  margin-left: 10px;

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    padding-left: 2px;
    background: #ddd; /* Bakgrundsfärg på reglaget */
    border-radius: 5px;
  }
/*
  input[type="range"]::-webkit-slider-runnable-track {
    background:${SMUTSROSA}; // Lila färg på den aktiva delen
    height: 8px;
    border-radius: 5px;
  }*/
/*
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${SMUTSROSA}; // Lila färg på thumb 
    border-radius: 50%;
    cursor: pointer;
  }*/

  input[type="range"]::-moz-range-progress { // Långa pinnen - inre
    background: ${KOLSVART};
    padding: 1px;
    border-radius: 5px;
  }

  input[type="range"]::-moz-range-thumb { // Handtaget - inre med border
    width: 20px;
    height: 20px;
    background: ${SMUTSROSA};
    border-radius: 50%;
    border-color: ${KOLSVART};
  }
`;
