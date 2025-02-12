import { useRef, useState, useEffect } from "react";
import { H1WhiteSecond } from "../styled/Fonts";
import { BackgroundOriginal } from "../styled/Wrappers";
import { Board, Canvas, ControlBox, EraserBtn, RedoBtn, SaveBoardBtn, Toolbox, UndoBtn, PenBtn, ClearBoardBtn, EraserPenContainer, ColorBtn, Colors, BrushSize } from "./RitblockStyle";

export const Ritblock = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const [, setIsBrush] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [redoHistory, setRedoHistory] = useState<string[]>([]);
  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      // Spara nuvarande ritning
      const prevData = canvas.toDataURL();
  
      // Uppdatera storleken utan att rensa
      const tempWidth = canvas.offsetWidth;
      const tempHeight = canvas.offsetHeight;
  
      canvas.width = tempWidth;
      canvas.height = tempHeight;
  
      // Återskapa ritningen
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctxRef.current = ctx;
  
        const img = new Image();
        img.src = prevData;
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
        };
      }
    };
  
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
  
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);
  

  const getTouchPos = (canvas: HTMLCanvasElement, touch: Touch) => {
    const rect = canvas.getBoundingClientRect();
    return {
      offsetX: touch.clientX - rect.left,
      offsetY: touch.clientY - rect.top,
    };
  };
  
  
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas || !ctxRef.current) return;
  
    let offsetX: number, offsetY: number;
  
    if ("nativeEvent" in e && "offsetX" in e.nativeEvent) {
      // MouseEvent
      offsetX = e.nativeEvent.offsetX;
      offsetY = e.nativeEvent.offsetY;
    } else {
      // TouchEvent
      const touch = (e as React.TouchEvent<HTMLCanvasElement>).touches[0] as unknown as Touch;
      ({ offsetX, offsetY } = getTouchPos(canvas, touch));
    }
  
    setHistory((prev) => [...prev, canvas.toDataURL()]);
    setRedoHistory([]);
    ctxRef.current.strokeStyle = isEraser ? "#FFFFFF" : color;
    ctxRef.current.lineWidth = brushSize;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctxRef.current) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    let offsetX: number, offsetY: number;
  
    if ("nativeEvent" in e && "offsetX" in e.nativeEvent) {
      // MouseEvent
      offsetX = e.nativeEvent.offsetX;
      offsetY = e.nativeEvent.offsetY;
    } else {
      // TouchEvent
      const touch = (e as React.TouchEvent<HTMLCanvasElement>).touches[0] as unknown as Touch;
      ({ offsetX, offsetY } = getTouchPos(canvas, touch));
    }
  
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };
  
  const stopDrawing = () => {
    if (ctxRef.current) {
      ctxRef.current.closePath();
    }
    setIsDrawing(false);
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

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    tempCtx.fillStyle = "#FFFFFF";
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    tempCtx.drawImage(canvas, 0, 0);

    const link = document.createElement("a");
    link.href = tempCanvas.toDataURL("image/png");
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

  const handleToolChange = (tool: 'pen' | 'eraser') => {
    if (tool === 'pen') {
      setIsEraser(false);
      setIsBrush(true);
    } else {
      setIsEraser(true);
      setIsBrush(false);
    }
  };

  return (
    <BackgroundOriginal>
      <H1WhiteSecond>Ritblock</H1WhiteSecond>
      <Board>
        <Toolbox>
          {/* Färgval på första raden */}
          <Colors>
            {["#000000", "#6d2323", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#560d8a", "#FF00FF"].map((c) => (
              <ColorBtn
                key={c}
                className="w-8 h-8 rounded-full border-2 transition"
                style={{ backgroundColor: c, borderColor: color === c ? "white" : "transparent" }}
                onClick={() => {
                  setColor(c);
                  setIsEraser(false);
                }}
              />
            ))}
          </Colors>
  
          {/* Andra raden: Penselstorlek  till vänster och verktyg till höger */}
          <div>
                      {/* Penselstorlek */}
          <BrushSize >
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="cursor-pointer"
            />
            <span className="text-sm">{brushSize}px</span>
            </BrushSize>
          

 
            {/* Penna och Suddgummi till höger */}
            <EraserPenContainer>
              <PenBtn
                onClick={() => handleToolChange('pen')}
              />
              <EraserBtn
                onClick={() => handleToolChange('eraser')}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                  isEraser ? "bg-gray-300" : "bg-white"
                }`}
              />
            </EraserPenContainer>
            </div>
  

        </Toolbox>
  
        {/* Canvas */}
        <Canvas
          ref={canvasRef}
          isEraser={isEraser}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
  
        {/* Kontrollknappar */}
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
