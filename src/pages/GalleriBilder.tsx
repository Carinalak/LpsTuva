import axios from 'axios';
import { useState, useEffect } from 'react';
import { H1PurpleSecond } from '../components/styled/Title';
import { WrapperWhite } from '../components/styled/Wrappers';
import { Image } from '../models/Image';

export const GalleriBilder = () => {
  const [images, setImages] = useState<Image[]>([]);

  // Hämtar bilder från backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/images'); // API-anrop till din server
        setImages(response.data); // Sätt bilderna i state
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []); // Hämtar bilder när komponenten laddas första gången

  return (
    <WrapperWhite>
      <H1PurpleSecond>Mitt Galleri</H1PurpleSecond>
      <div className="gallery">
        {images.map((image) => (
          <div key={image._id} className="image-item">
            <h3>{image.title}</h3>
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    </WrapperWhite>
  );
};