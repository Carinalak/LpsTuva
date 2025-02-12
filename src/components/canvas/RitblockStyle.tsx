import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, DISSAD } from "../styled/Variables";
import UndoButton from "../../assets/icons/undo.png";
import RedoButton from "../../assets/icons/redo.png";
import SaveBoard from "../../assets/icons/data-storage.png";
import ClearBoard from "../../assets/icons/dust.png";
import EraserButton from "../../assets/icons/eraser.png";


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

  // cursor: crosshair;
  cursor: ${({ isEraser }) =>
    isEraser ? "url(/eraser.png) 10 10, auto" : "crosshair"};


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
  grid-template-columns: auto 1fr; /* Färgval + Penselstorlek på första raden */
  grid-template-rows: auto auto;
  gap: 10px;
  column-gap: 70px;
  align-items: center;
  border-radius: 5px 5px 0 0;

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

export const UndoBtn = styled.button`
  padding: 0;
  border: none;
  border-radius: 10px;
  background-image: url(${UndoButton});
  background-size: 22px 22px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  width: 40px;
  height: 40px;
  transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: -5px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    background-color: ${DISSAD};
    cursor: not-allowed;
    transform: none;
  }
  `;

export const RedoBtn = styled.button`
padding: 0;
border: none;
border-radius: 10px;
background-image: url(${RedoButton});
background-size: 22px 22px;
background-repeat: no-repeat;
background-position: center;
background-color: transparent;
width: 40px;
height: 40px;
transition: background-color 0.2s ease, transform 0.2s ease;
margin-top: -5px;
cursor: pointer;
-webkit-tap-highlight-color: transparent;

&:disabled {
  background-color: ${DISSAD};
  cursor: not-allowed;
  transform: none;
}
`;

export const ClearBoardBtn = styled(UndoBtn) `
background-image: url(${ClearBoard});

`;

export const SaveBoardBtn = styled(UndoBtn) `
background-image: url(${SaveBoard});

`;
export const EraserBtn = styled(UndoBtn) `
background-image: url(${EraserButton});

`;