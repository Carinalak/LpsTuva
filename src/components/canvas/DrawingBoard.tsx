import { useRef, useState, useEffect } from "react";
import { H1WhiteSecond } from "../styled/Fonts";
import { BackgroundOriginal } from "../styled/Wrappers";
import { Canvas } from "./DrawingStyle";

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
        // Sätt storleken baserat på den faktiska storleken i DOM
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
  
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.lineCap = "round";
          ctxRef.current = ctx;
        }
      }
    };
  
    // Kör vid mount
    updateCanvasSize();
  
    // Lyssna på fönsterstorleksändringar
    window.addEventListener("resize", updateCanvasSize);
  
    // Cleanup eventlistener vid unmount
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);
  

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    if (ctxRef.current && canvasRef.current) {
      // Spara nuvarande bild i historiken innan användaren börjar rita
      setHistory((prev) => [...prev, canvasRef.current!.toDataURL()]);
      setRedoHistory([]); // Töm redo-historiken när vi ritar nytt
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
      setHistory((prev) => [...prev, canvas.toDataURL()]); // Spara innan rensning
      setRedoHistory([]); // Töm redo-historiken vid rensning
      ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "my_drawing.png";
      link.click();
    }
  };

  const undoLast = () => {
    if (history.length === 0 || !canvasRef.current || !ctxRef.current) return;
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    const previousState = history.pop(); // Ta bort senaste sparade steget
    if (!previousState) return;
    setRedoHistory((prev) => [...prev, canvas.toDataURL()]); // Spara nuvarande i redo-historiken

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
    const nextState = redoHistory.pop(); // Ta senaste från redo-historiken
    if (!nextState) return;
    setHistory((prev) => [...prev, canvas.toDataURL()]); // Spara nuvarande i undo-historiken

    const img = new Image();
    img.src = nextState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  };

  return (    
  <BackgroundOriginal>

    <div className="flex flex-col items-center mt-5">
    <H1WhiteSecond>Ritblock</H1WhiteSecond>
      {/* Färgpalett */}
      <div className="flex gap-2 mb-3">
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
        {/* Suddgummi-knapp */}
        <button
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
            isEraser ? "bg-gray-300" : "bg-white"
          }`}
          onClick={() => setIsEraser(true)}
        >
          🧽
        </button>
      </div>

      {/* Penselstorlek */}
      <div className="mb-3 flex items-center gap-2">
        <label className="text-sm font-semibold">🖌️ Penselstorlek:</label>
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

      {/* Ritcanvas */}
      <Canvas
        ref={canvasRef}
        className="border border-gray-400 bg-white shadow-lg cursor-crosshair"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></Canvas>

      {/* Kontroller */}
      <div className="mt-4 flex gap-3">
        <button onClick={clearCanvas} className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600">
          🧹 Rensa
        </button>
        <button onClick={saveCanvas} className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
          💾 Spara
        </button>
        <button onClick={undoLast} className="px-4 py-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600">
          ⬅️ Ångra
        </button>
        <button onClick={redoLast} className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
          ➡️ Gör om
        </button>
      </div>
    </div>

    </BackgroundOriginal>
  );
};

export default DrawingBoard;
