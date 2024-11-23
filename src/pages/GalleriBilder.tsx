//import axios from 'axios';
//import { useState, useEffect } from 'react';
import { H1PurpleSecond } from '../components/styled/Title';
import { GalleryContainer, GalleryWrapper, GalleryWrapperInner } from '../components/styled/Wrappers';
//import { Image } from '../models/Image';
import { GalleryImage } from '../components/styled/Image';
import BirdDarkPurple from '../assets/images/galleri/BirdDarkPurple.jpg';
import AntPurple from '../assets/images/galleri/AntPurple.jpg';
import BirdPink from '../assets/images/galleri/BirdPink.jpg';
import BirdPink2 from '../assets/images/galleri/BirdPink2.jpg';
import BirdPink3 from '../assets/images/galleri/BirdPink3.jpg';
import RainbowCat from '../assets/images/galleri/CatPinkRainbow.jpg';
import WhiteCat from '../assets/images/galleri/CatWhite.jpg';
import DogWhitePurpleDot from '../assets/images/galleri/DogWhitePurpleDot.jpg';
import DragonflyBlue from '../assets/images/galleri/DragonflyBlue.jpg';
import IgelkottWhite from '../assets/images/galleri/IgelkottBrown.jpg';
import GreyMouse from '../assets/images/galleri/MouseGrey.jpg';

export const GalleriBilder = () => {
  // const [images, setImages] = useState<Image[]>([]);

  // Hämtar bilder från backend
  /*
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
  }, []);
*/
  return (
    <>
      <GalleryContainer>
        <H1PurpleSecond>Mitt Galleri</H1PurpleSecond>
        <GalleryWrapper>
          <GalleryWrapperInner><GalleryImage src={BirdDarkPurple} alt="Purple Bird" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={AntPurple} alt="Pruple Ant" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={BirdPink} alt="Pink Bird" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={BirdPink2} alt="Pink Bird second" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={BirdPink3} alt="Purple Bird third" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={RainbowCat} alt="Rainbowcat" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={WhiteCat} alt="White cat" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={DogWhitePurpleDot} alt="Dog with dots" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={DragonflyBlue} alt="Blue dragonfly" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={IgelkottWhite} alt="Hedgehog" loading="lazy" /></GalleryWrapperInner>
          <GalleryWrapperInner><GalleryImage src={GreyMouse} alt="Grey Mouse" loading="lazy" /></GalleryWrapperInner>

        </GalleryWrapper>
    {/* 
       <div className="gallery">
        {images.map((image) => (
          <div key={image._id} className="image-item">
            <h3>{image.title}</h3>
            <img src={image.url} alt={image.title} />
          </div>
        ))}
      </div>
    */}
</GalleryContainer>
</> );
};