import { useState, useEffect } from 'react';
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
import { BREAKPOINT_TABLET } from './styled/Variables';

const images = [
  { src: BirdDarkPurple, alt: 'Purple Bird' },
  { src: AntPurple, alt: 'Purple Ant' },
  { src: BirdPink, alt: 'Pink Bird' },
  { src: BirdPink2, alt: 'Pink Bird second' },
  { src: BirdPink3, alt: 'Purple Bird third' },
  { src: RainbowCat, alt: 'Rainbowcat' },
  { src: WhiteCat, alt: 'White cat' },
  { src: DogWhitePurpleDot, alt: 'Dog with dots' },
  { src: DragonflyBlue, alt: 'Blue dragonfly' },
  { src: IgelkottWhite, alt: 'Hedgehog' },
  { src: GreyMouse, alt: 'Grey Mouse' },
];

export const useGalleryImages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(1);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Dynamiskt hantera antalet bilder per skärmstorlek
  const updateImagesPerPage = () => {
    if (window.innerWidth >= parseInt(BREAKPOINT_TABLET, 10)) { // Tablet-läge
      setImagesPerPage(3);
    } else {
      setImagesPerPage(1); // Mobilläge
    }
  };

  useEffect(() => {
    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);

    return () => {
      window.removeEventListener('resize', updateImagesPerPage);
    };
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  return {
    currentImages,
    currentPage,
    totalPages,
    handleNext,
    handlePrevious,
  };
};