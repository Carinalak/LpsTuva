import { useRef, useState, useEffect } from "react";
import { H1WhiteSecond } from "../styled/Fonts";
import { BackgroundOriginal } from "../styled/Wrappers";
import { Board, Canvas, ControlBox, EraserBtn, RedoBtn, SaveBoardBtn, Toolbox, UndoBtn, PenBtn, ClearBoardBtn, EraserPenContainer, ColorBtn, Colors, BrushSize } from "./RitblockStyle";

export const Ritblock = ({ imageSrc }: { imageSrc?: string }) => {
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
  
      // Om en bild är vald, rita ut den på canvas
      if (imageSrc) {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
          const aspectRatio = img.width / img.height; // Bildens aspect ratio
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.height;
  
          let newWidth, newHeight;
  
          // Behåll proportionerna och anpassa storleken så att bilden passar inom canvasen
          if (canvasWidth / canvasHeight > aspectRatio) {
            newHeight = canvasHeight;
            newWidth = canvasHeight * aspectRatio;
          } else {
            newWidth = canvasWidth;
            newHeight = canvasWidth / aspectRatio;
          }
  
          // Beräkna positionen för att centrera bilden på canvasen
          const offsetX = (canvasWidth - newWidth) / 2;
          const offsetY = (canvasHeight - newHeight) / 2;
  
          // Rita ut bilden centrerad på canvasen
          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
        };
      }
    }
  }, [imageSrc]); // Kör om imageSrc ändras
  

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const prevData = canvas.toDataURL();
      const tempWidth = canvas.offsetWidth;
      const tempHeight = canvas.offsetHeight;

      canvas.width = tempWidth;
      canvas.height = tempHeight;

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

  // Förhindra scroll & pull-to-refresh på mobilen
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (e.target === canvasRef.current) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.removeEventListener("touchmove", preventScroll);
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
    document.body.style.overflow = "hidden"; // Stoppa scrollning medan man ritar

    const canvas = canvasRef.current;
    if (!canvas || !ctxRef.current) return;

    let offsetX: number, offsetY: number;

    if ("nativeEvent" in e && "offsetX" in e.nativeEvent) {
      offsetX = e.nativeEvent.offsetX;
      offsetY = e.nativeEvent.offsetY;
    } else {
      const touch = (e as React.TouchEvent<HTMLCanvasElement>).touches[0] as unknown as Touch;
      ({ offsetX, offsetY } = getTouchPos(canvas, touch));
    }

    setHistory((prev) => [...prev, canvas.toDataURL()]);
    setRedoHistory([]);
    ctxRef.current.strokeStyle = isEraser ? "#FFFFFF" : color; // Använd rätt färg beroende på om suddgummi är aktivt
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
    offsetX = e.nativeEvent.offsetX;
    offsetY = e.nativeEvent.offsetY;
  } else {
    const touch = (e as React.TouchEvent<HTMLCanvasElement>).touches[0] as unknown as Touch;
    ({ offsetX, offsetY } = getTouchPos(canvas, touch));
  }

  // Hämta pixeldata på den positionen där användaren försöker rita
  const imageData = ctxRef.current.getImageData(offsetX, offsetY, 1, 1);
  const [r, g, b, a] = imageData.data;

  // Kontrollera om pixeln är svart eller har en specifik färg (kan justeras)
  if (r === 0 && g === 0 && b === 0 && a !== 0) { // Svart pixel
    return; // Stoppa ritning om den är svart
  }

  // Om inte, fortsätt rita
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

  const handleColorChange = (newColor: string) => {
    setIsEraser(false);
    setColor(newColor);
  };

  const togglePen = () => {
    setIsEraser(false);
    setColor("#000000");  // Återställ till standardfärgen (kan ändras till den senaste färgen om så önskas)
  };

  const toggleEraser = () => {
    setIsEraser(true);
    setColor("#FFFFFF");  // Sätt färgen till vitt för suddgummit
  };

  return (
    <BackgroundOriginal>
      <H1WhiteSecond>Ritblock</H1WhiteSecond>
      <Board>
        <Toolbox>
          {/* Färgval på första raden */}
          <Colors>
            {["#000000", "#4c3030", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#560d8a", "#FF00FF"].map((c) => (
              <ColorBtn 
                key={c} 
                style={{
                  backgroundColor: c, 
                  border: color === c ? "2px solid #000000" : "none"  // Sätt border om den är vald
                }} 
                onClick={() => handleColorChange(c)} 
              />
            ))}
          </Colors>

          {/* Andra raden: Penselstorlek till vänster och verktyg till höger */}
          <div>
            {/* Penselstorlek */}
            <BrushSize>
              <input type="range" min="1" max="20" value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} />
              <span>{brushSize}px</span>
            </BrushSize>

            {/* Penna och Suddgummi till höger */}
            <EraserPenContainer>
              <PenBtn onClick={togglePen} />
              <EraserBtn onClick={toggleEraser} className={isEraser ? "bg-gray-300" : "bg-white"} />
            </EraserPenContainer>
          </div>
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
