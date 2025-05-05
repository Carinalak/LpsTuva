import { useRef, useState, useEffect } from "react";
import { H1WhiteSecond, StyledLinkWhite, StyledTextWhiteCenter } from "../styled/Fonts";
import { BackgroundOriginal } from "../styled/Wrappers";
import { Board, Canvas, ControlBox, EraserBtn, RedoBtn, SaveBoardBtn, Toolbox, UndoBtn, PenBtn, ClearBoardBtn, EraserPenContainer, Colors, BrushSize, NewBtn, FarglaggBtn } from "./RitblockStyle";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Ritblock = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backgroundCanvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#C985E5");
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [redoHistory, setRedoHistory] = useState<string[]>([]);
  const location = useLocation();
  const [selectedColor, setSelectedColor] = useState("#C985E5");
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const imageSrc = new URLSearchParams(location.search).get("image");

  /*
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const savedDrawing = localStorage.getItem("savedDrawing");
    const savedImageSrc = localStorage.getItem("savedImageSrc");
  
    // Om det finns sparad ritning och ingen imageSrc i URL
    if (canvas && ctx && savedDrawing && (!imageSrc || imageSrc === savedImageSrc)) {
      const img = new Image();
      img.src = savedDrawing;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
    }
  }, [imageSrc]);
  */

  /*
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineCap = "round";
      ctxRef.current = ctx;

      if (imageSrc) {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
          const aspectRatio = img.width / img.height;
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.height;

          let newWidth, newHeight;

          if (canvasWidth / canvasHeight > aspectRatio) {
            newHeight = canvasHeight;
            newWidth = canvasHeight * aspectRatio;
          } else {
            newWidth = canvasWidth;
            newHeight = canvasWidth / aspectRatio;
          }

          const offsetX = (canvasWidth - newWidth) / 2;
          const offsetY = (canvasHeight - newHeight) / 2;

          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

          setBackgroundImage(canvas.toDataURL("image/png")); // Spara bakgrunden

          const bgCanvas = backgroundCanvasRef.current;
          if (bgCanvas) {
            const bgCtx = bgCanvas.getContext("2d");
            if (bgCtx) {
              bgCanvas.width = canvas.width;
              bgCanvas.height = canvas.height;
              bgCtx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
            }
          }
        };
      }
    }
}, [imageSrc]);
*/

useEffect(() => {
  const canvas = canvasRef.current;
  const bgCanvas = backgroundCanvasRef.current;
  if (!canvas || !bgCanvas) return;

  const ctx = canvas.getContext("2d");
  const bgCtx = bgCanvas.getContext("2d");
  if (!ctx || !bgCtx) return;

  ctx.lineCap = "round";
  ctxRef.current = ctx;

  const savedDrawing = localStorage.getItem("savedDrawing");
  const savedImageSrc = localStorage.getItem("savedImageSrc");

  // Ladda och rita färgläggningsbild
  if (imageSrc) {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      let newWidth, newHeight;
      if (canvasWidth / canvasHeight > aspectRatio) {
        newHeight = canvasHeight;
        newWidth = canvasHeight * aspectRatio;
      } else {
        newWidth = canvasWidth;
        newHeight = canvasWidth / aspectRatio;
      }

      const offsetX = (canvasWidth - newWidth) / 2;
      const offsetY = (canvasHeight - newHeight) / 2;

      // Rita till båda canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

      bgCanvas.width = canvas.width;
      bgCanvas.height = canvas.height;
      bgCtx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

      setBackgroundImage(canvas.toDataURL("image/png"));

      // Efter att bakgrunden är ritad: rita savedDrawing om det är samma bild
      if (savedDrawing && imageSrc === savedImageSrc) {
        const savedImg = new Image();
        savedImg.src = savedDrawing;
        savedImg.onload = () => {
          ctx.drawImage(savedImg, 0, 0);
        };
      }
    };
  } else if (savedDrawing && (!imageSrc || imageSrc === savedImageSrc)) {
    // Om ingen färgläggningsbild finns men sparad ritning finns
    const savedImg = new Image();
    savedImg.src = savedDrawing;
    savedImg.onload = () => {
      ctx.drawImage(savedImg, 0, 0);
    };
  }
}, [imageSrc]);


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
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, []);

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
      offsetY: touch.clientY - rect.top
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

    if ("nativeEvent" in e && "offsetX" in e.nativeEvent) {
      offsetX = e.nativeEvent.offsetX;
      offsetY = e.nativeEvent.offsetY;
    } else {
      const touch = (e as React.TouchEvent<HTMLCanvasElement>).touches[0] as unknown as Touch;
      ({ offsetX, offsetY } = getTouchPos(canvas, touch));
    }

    setHistory((prev) => [
      ...prev,
      canvasRef.current!.toDataURL("image/png")
    ]);
    
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
  
    const canvas = canvasRef.current!;
    const bgCanvas = backgroundCanvasRef.current!;
    const bgCtx = bgCanvas.getContext("2d");
    if (!bgCtx) return;
  
    // Räkna ut skalning från canvas till skärm
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
  
    // Hämta rätt koordinater beroende på om det är touch eller mus
    let clientX: number;
    let clientY: number;
  
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
  
    // Omräkna skärmens koordinater till canvasens koordinater
    const offsetX = (clientX - rect.left) * scaleX;
    const offsetY = (clientY - rect.top) * scaleY;
  
    // Här kollar vi ett 3x3 område runt ritpositionen (fokuserad på området där användaren ritar)
    const areaSize = 3; // pixlar runt ritpunkten
    let isBlocked = false;
  
    for (let dx = -areaSize; dx <= areaSize; dx++) {
      for (let dy = -areaSize; dy <= areaSize; dy++) {
        const pixelX = offsetX + dx;
        const pixelY = offsetY + dy;
  
        // Kolla om pixeln ligger inom canvasens gränser
        if (pixelX >= 0 && pixelY >= 0 && pixelX < canvas.width && pixelY < canvas.height) {
          const pixel = bgCtx.getImageData(pixelX, pixelY, 1, 1).data;
          const [r, g, b, a] = pixel;
  
          // Kolla om pixeln är svart eller nästan svart
          if (r < 10 && g < 10 && b < 10 && a > 0) {
            isBlocked = true;
            break; // Om vi hittar en svart pixel, blockera ritningen
          }
        }
      }
      if (isBlocked) break;
    }
  
    // Om ritpunkten inte är blockerat, fortsätt rita
    if (!isBlocked) {
      // Här justerar vi penselns kvalitet
      ctxRef.current.lineWidth = brushSize;
      ctxRef.current.lineCap = "round";  // Gör att ändarna blir rundade
      ctxRef.current.lineJoin = "round"; // Gör att hörn blir rundade
  
      // För att få en mjukare övergång använder vi globalCompositeOperation
      // Vi använder "source-over" så att vi ritar på det befintliga innehållet.
      ctxRef.current.globalCompositeOperation = "source-over";
  
      // Lägg till en suddig effekt genom att använda en mjukare pensel, här kan vi leka med alpha och penselstorlek

      ctxRef.current.shadowBlur = 1;
      ctxRef.current.shadowColor = color;
      ctxRef.current.globalAlpha = 0.3;
      ctxRef.current.strokeStyle = isEraser ? "#FFFFFF" : color;
      
      // Här ritar vi linjen
      ctxRef.current.lineTo(offsetX, offsetY);
      ctxRef.current.stroke();
    }
  };
  const stopDrawing = () => {
    if (ctxRef.current) ctxRef.current.closePath();
    setIsDrawing(false);
    document.body.style.overflow = "";
  
    const canvas = canvasRef.current;
    if (canvas) {
      localStorage.setItem("savedDrawing", canvas.toDataURL("image/png"));
      localStorage.setItem("savedImageSrc", imageSrc ?? ""); // <--- Spara aktuell bakgrundsbild (även tom)
    }
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
      // Återställ kontextinställningar
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";
      ctx.globalCompositeOperation = "source-over";

      // Rensa ritlagret
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Rita om bakgrunden från backgroundImage
      if (backgroundImage) {
        const bgImg = new Image();
        bgImg.src = backgroundImage;
        bgImg.onload = () => {
          ctx.drawImage(bgImg, 0, 0);
                    // Rita tillbaka endast penseldragen
                    ctx.drawImage(img, 0, 0);

        };
}
        // Rita tillbaka endast penseldragen
        ctx.drawImage(img, 0, 0);
    };
};

const createNewCanvas = () => {
  const canvas = canvasRef.current;
  const bgCanvas = backgroundCanvasRef.current;

  if (canvas && ctxRef.current && bgCanvas) {
    setHistory([]);
    setRedoHistory([]);

    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);

    const bgCtx = bgCanvas.getContext("2d");
    if (bgCtx) {
      bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    }

    setBackgroundImage(null);
    localStorage.removeItem("savedDrawing");
    localStorage.removeItem("savedImageSrc");

    // 🧼 Ta bort image från URL
    navigate("/ritblock", { replace: true });
  }
};


  
  const redoLast = () => {
    if (redoHistory.length === 0 || !canvasRef.current || !ctxRef.current) return;
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    const nextState = redoHistory.pop();
    if (!nextState) return;
    

    const img = new Image();
    img.src = nextState;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  };

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor); // nyckeln
    setColor(newColor);
    setIsEraser(false);
  };
  

  const togglePen = () => {
    setIsEraser(false);
    setColor(selectedColor); // återställ senaste färgen
  };
  

  const toggleEraser = () => {
    setIsEraser(true);
    setColor("#FFFFFF");
  };

  return (
    <>
      <BackgroundOriginal>
        <H1WhiteSecond>Ritblock</H1WhiteSecond>
        <Board>
          <Toolbox>
          <Colors>
            <label style={{ color: "#fff", fontSize: "14px" }}>Välj färg:</label>
            <input
              type="color"
              value={selectedColor}
              onInput={(e) => handleColorChange((e.target as HTMLInputElement).value)}
              onClick={() => setIsEraser(false)} // Lägg till denna rad
              style={{
                width: "40px",
                height: "40px",
                padding: "0",
                border: "none",
                cursor: "pointer"
              }}
            />
          </Colors>

            <div>
              <BrushSize>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                />
                <span>{brushSize}px</span>
              </BrushSize>
              <EraserPenContainer>
                <PenBtn onClick={togglePen} aria-label="Penna"/>
                <EraserBtn
                  onClick={toggleEraser}
                  className={isEraser ? "bg-gray-300" : "bg-white"}
                  aria-label="Suddgummi"
                />
              </EraserPenContainer>
            </div>
          </Toolbox>

          {/* Osynligt bakgrundslager */}
          <canvas
            ref={backgroundCanvasRef}
            style={{ display: "none" }}
          />

          {/* Ritlager */}
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
            <NewBtn onClick={createNewCanvas} aria-label="Nytt dokument"/>
            <FarglaggBtn onClick={() => navigate("/farglagg")} />
            <SaveBoardBtn onClick={saveCanvas} aria-label="Spara" />
            <ClearBoardBtn onClick={clearCanvas} aria-label="Rensa"/>
            <UndoBtn onClick={undoLast} aria-label="Ångra"/>
            <RedoBtn onClick={redoLast} aria-label="Gör om"/>
          </ControlBox>
        </Board>
      </BackgroundOriginal>
      <StyledTextWhiteCenter>
        <StyledLinkWhite
          to="https://www.flaticon.com/free-icons/paint-brush"
          title="paint brush and icons"
        >
          Paint brush and icons created by Freepik - Flaticon
        </StyledLinkWhite>
      </StyledTextWhiteCenter>
    </>
  );
};
