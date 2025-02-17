import { useRef, useState, useEffect } from "react";
import { H1WhiteSecond, StyledLinkWhite, StyledTextWhiteCenter } from "../styled/Fonts";
import { BackgroundOriginal } from "../styled/Wrappers";
import { useLocation } from "react-router-dom";
import { Board, Toolbox, ControlBox, ClearBoardBtn, SaveBoardBtn, UndoBtn, RedoBtn } from "../ritblock/RitblockStyle";
import { Accessories, AnimalContainer, Animals, Canvas  } from "./GarderobStyle";
import { useAccessories, useAnimals } from "../useGarderobImages";



export const LpsGarderoben = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  //const [color, setColor] = useState("#000000");
  //const [isEraser, setIsEraser] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [redoHistory, setRedoHistory] = useState<string[]>([]);
  const location = useLocation();
  const items = useAccessories();
  const animals = useAnimals();
  const [selectedAnimal, setSelectedAnimal ] = useState<string | null>(null);
 

  const imageSrc = new URLSearchParams(location.search).get("image");
  useEffect(() => {
    if (!selectedAnimal || !canvasRef.current) return;
  
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    // Anpassa för högre upplösning
    const scaleFactor = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
  
    canvas.width = width * scaleFactor;
    canvas.height = height * scaleFactor;
    ctx.scale(scaleFactor, scaleFactor);
  
    const img = new Image();
    img.src = selectedAnimal;
  
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      let newWidth, newHeight;
  
      if (width / height > aspectRatio) {
        newHeight = height;
        newWidth = height * aspectRatio;
      } else {
        newWidth = width;
        newHeight = width / aspectRatio;
      }
  
      const offsetX = (width - newWidth) / 2;
      const offsetY = (height - newHeight) / 2;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
    };
  }, [selectedAnimal]);
  




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
  
      const tempWidth = canvas.offsetWidth;
      const tempHeight = canvas.offsetHeight;
  
      canvas.width = tempWidth;
      canvas.height = tempHeight;
  
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctxRef.current = ctx;
  
        // Om det finns en bild, rita om den
        if (selectedAnimal) {
          const img = new Image();
          img.src = selectedAnimal;
          img.onload = () => {
            const aspectRatio = img.width / img.height;
            let newWidth, newHeight;
  
            if (tempWidth / tempHeight > aspectRatio) {
              newHeight = tempHeight;
              newWidth = tempHeight * aspectRatio;
            } else {
              newWidth = tempWidth;
              newHeight = tempWidth / aspectRatio;
            }
  
            const offsetX = (tempWidth - newWidth) / 2;
            const offsetY = (tempHeight - newHeight) / 2;
  
            ctx.clearRect(0, 0, tempWidth, tempHeight);
            ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
          };
        }
      }
    };
  
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
  
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [selectedAnimal]); // Lägg till beroende så att den alltid omritas
  
/*
  const getTouchPos = (canvas: HTMLCanvasElement, touch: Touch) => {
    const rect = canvas.getBoundingClientRect();
    return {
      offsetX: touch.clientX - rect.left,
      offsetY: touch.clientY - rect.top,
    };
  };*/
/*
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
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };
*/

/*
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
*/
const saveCanvas = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "my_drawing.png";
  link.click();
};

const clearCanvas = () => {
  const canvas = canvasRef.current;
  if (!canvas || !ctxRef.current) return;


  const currentState = canvas.toDataURL();
  setHistory((prev) => [...prev, currentState]);
  setRedoHistory([]);


  ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
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


  return ( <>
    <BackgroundOriginal>
      <H1WhiteSecond>Lps Garderoben</H1WhiteSecond>
      <Board>
        <Toolbox>
          {/* Accessories på första raden */}
          <Accessories>
            {items.map((item, index) => (
              <img key={index} src={item.src} alt={item.alt} loading="lazy" width={item.width} height={item.height}/>
            ))}
          </Accessories>

          {/* Andra raden: inget till vänster och djur till höger */}
          <div>
            {/* Empry on this side */}
            <div></div>

            {/* Penna och Suddgummi till höger */}
            <AnimalContainer>
                          {/* Djur */}
            <Animals>
                {animals.map((animal, index) => (
                  <img key={index} src={animal.src} width={animal.width} onClick={() => setSelectedAnimal(animal.src + "?t=" + new Date().getTime())} />
                ))}
            </Animals>
            </AnimalContainer>
          </div>
        </Toolbox>

        <Canvas
          ref={canvasRef}
        />
        <ControlBox>
          <ClearBoardBtn onClick={clearCanvas} />
          <SaveBoardBtn onClick={saveCanvas} />
          <UndoBtn onClick={undoLast} />
          <RedoBtn onClick={redoLast} />
        </ControlBox>
      </Board>

    </BackgroundOriginal>
    <StyledTextWhiteCenter>
      <StyledLinkWhite to="https://www.flaticon.com/free-icons/paint-brush" title="paint brush icons">Paint brush icons created by Freepik - Flaticon</StyledLinkWhite>
    </StyledTextWhiteCenter>
 </>);
};
