import { useState } from "react";
import { Ritblock } from "./Ritblock";
import { useFarglaggImages } from "../useFarglaggImages";


export const FarglaggNu = () => {
  const images = useFarglaggImages();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      {!selectedImage ? (
        <div>
          <h2>Välj en bild att färglägga:</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                style={{ width: "100px", cursor: "pointer", border: "1px solid black" }}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </div>
        </div>
      ) : (
        <Ritblock/>
      )}
    </div>
  );
};
