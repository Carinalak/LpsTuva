
/*
import { useRef, useState, useEffect } from "react";
import { H1WhiteSecond } from "../styled/Fonts";
import { BackgroundOriginal } from "../styled/Wrappers";
import {
  Board,
  Canvas,
  ControlBox,
  EraserBtn,
  RedoBtn,
  SaveBoardBtn,
  Toolbox,
  UndoBtn,
  PenBtn,
  ClearBoardBtn,
  EraserPenContainer,
  ColorBtn,
  Colors,
  BrushSize,
} from "./RitblockStyle";

interface RitblockFarglaggProps {
  selectedImage: string | null;
}

export const RitblockFarglagg = ({ selectedImage }: RitblockFarglaggProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [redoHistory, setRedoHistory] = useState<string[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineCap = "round";
      ctxRef.current = ctx;
    }

    if (selectedImage) {
      const img = new Image();
      img.src = selectedImage;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [selectedImage]);

  const getTouchPos = (canvas: HTMLCanvasElement, touch: Touch) => {
    const rect = canvas.getBoundingClientRect();
    return {
      offsetX: touch.clientX - rect.left,
      offsetY: touch.clientY - rect.top,
    };
  };

  const startDrawing = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";

    const canvas = canvasRef.current;
    if (!canvas || !ctxRef.current) return;

    let offsetX: number, offsetY: number;

    if ("touches" in e) {
      const touch = e.touches[0];
      ({ offsetX, offsetY } = getTouchPos(canvas, touch));
    } else {
      offsetX = (e as React.MouseEvent<HTMLCanvasElement>).nativeEvent.offsetX;
      offsetY = (e as React.MouseEvent<HTMLCanvasElement>).nativeEvent.offsetY;
    }

    setHistory((prev) => [...prev, canvas.toDataURL()]);
    setRedoHistory([]);

    ctxRef.current.strokeStyle = isEraser ? "#FFFFFF" : color;
    ctxRef.current.lineWidth = brushSize;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!isDrawing || !ctxRef.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    let offsetX: number, offsetY: number;

    if ("touches" in e) {
      const touch = e.touches[0];
      ({ offsetX, offsetY } = getTouchPos(canvas, touch));
    } else {
      offsetX = (e as React.MouseEvent<HTMLCanvasElement>).nativeEvent.offsetX;
      offsetY = (e as React.MouseEvent<HTMLCanvasElement>).nativeEvent.offsetY;
    }

    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    if (ctxRef.current) {
      ctxRef.current.closePath();
    }
    setIsDrawing(false);
    document.body.style.overflow = "";
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && ctxRef.current) {
      setHistory((prev) => [...prev, canvas.toDataURL()]);
      setRedoHistory([]);
      ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "my_drawing.png";
    link.click();
  };

  const undoLast = () => {
    if (history.length === 0 || !canvasRef.current || !ctxRef.current) return;
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    const previousState = history.pop();
    if (!previousState) return;
    setRedoHistory((prev) => [...prev, canvas.toDataURL()]);

    const img = new Image();
    img.src = previousState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  };

  const redoLast = () => {
    if (redoHistory.length === 0 || !canvasRef.current || !ctxRef.current) return;
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    const nextState = redoHistory.pop();
    if (!nextState) return;
    setHistory((prev) => [...prev, canvas.toDataURL()]);

    const img = new Image();
    img.src = nextState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  };

  return (
    <BackgroundOriginal>
      <H1WhiteSecond>Färgläggningsritblock</H1WhiteSecond>
      <Board>
        <Toolbox>
          <Colors>
            {["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#560d8a", "#FF00FF"].map((c) => (
              <ColorBtn key={c} style={{ backgroundColor: c }} onClick={() => setColor(c)} />
            ))}
          </Colors>
          <BrushSize>
            <input type="range" min="1" max="20" value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} />
            <span>{brushSize}px</span>
          </BrushSize>
          <EraserPenContainer>
            <PenBtn onClick={() => setIsEraser(false)} />
            <EraserBtn onClick={() => setIsEraser(true)} className={isEraser ? "bg-gray-300" : "bg-white"} />
          </EraserPenContainer>
        </Toolbox>

        <Canvas
          ref={canvasRef}
          isEraser={isEraser}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />

        <ControlBox>
          <ClearBoardBtn onClick={clearCanvas} />
          <SaveBoardBtn onClick={saveCanvas} />
          <UndoBtn onClick={undoLast} />
          <RedoBtn onClick={redoLast} />
        </ControlBox>
      </Board>
    </BackgroundOriginal>
  );
};
*/