import { useRef, useState, useEffect } from "react";
import { H1WhiteSecond } from "../styled/Fonts";
import { BackgroundOriginal } from "../styled/Wrappers";
import { AngraBtn, Board, Canvas, ControlBox, RedoBtn, Toolbox } from "./DrawingStyle";


const DrawingBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [redoHistory, setRedoHistory] = useState<string[]>([]);

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (canvas) {

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
  
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.lineCap = "round";
          ctxRef.current = ctx;
        }
      }
    };
  
    updateCanvasSize();
  
    window.addEventListener("resize", updateCanvasSize);
  
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);
  

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (ctxRef.current && canvasRef.current) {
      // Spara nuvarande bild i historiken innan användaren börjar rita
      setHistory((prev) => [...prev, canvasRef.current!.toDataURL()]);
      setRedoHistory([]);
      ctxRef.current.strokeStyle = isEraser ? "#FFFFFF" : color;
      ctxRef.current.lineWidth = brushSize;
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctxRef.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
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

  return (    
  <BackgroundOriginal>
    <H1WhiteSecond>Ritblock</H1WhiteSecond>
    <Board>
      <Toolbox>
        {/* Rad 1: Färgval + "Penselstorlek" text */}
        <div className="flex gap-2">
          {["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"].map((c) => (
            <button
              key={c}
              className="w-8 h-8 rounded-full border-2 transition"
              style={{ backgroundColor: c, borderColor: color === c ? "gray" : "transparent" }}
              onClick={() => {
                setColor(c);
                setIsEraser(false);
              }}
            ></button>
          ))}
        </div>
        <label className="text-sm font-semibold">🖌️ Penselstorlek:</label>

        {/* Rad 2: Suddgummi + Skala */}
        <button
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
            isEraser ? "bg-gray-300" : "bg-white"
          }`}
          onClick={() => setIsEraser(true)}
        >
          🧽
        </button>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="cursor-pointer"
          />
          <span className="text-sm">{brushSize}px</span>
        </div>
        </Toolbox>

        {/* Ritcanvas */}
        <Canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        ></Canvas>

        {/* Kontroller */}
        <ControlBox>
            <button onClick={clearCanvas}>
              🧹 Rensa
            </button>
            <button onClick={saveCanvas}>
              💾 Spara
            </button>
            <AngraBtn onClick={undoLast}/>
            <RedoBtn onClick={redoLast} />

      </ControlBox>
      </Board>
    </BackgroundOriginal>
  );
};

export default DrawingBoard;
