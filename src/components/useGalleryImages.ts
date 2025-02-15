import { useState, useEffect, useCallback } from "react";
import BirdDarkPurple from "../assets/images/galleri/BirdDarkPurple.jpg";
import AntPurple from "../assets/images/galleri/AntPurple.jpg";
import BirdPink from "../assets/images/galleri/BirdPink.jpg";
import BirdPink2 from "../assets/images/galleri/BirdPink2.jpg";
import BirdPink3 from "../assets/images/galleri/BirdPink3.jpg";
import RainbowCat from "../assets/images/galleri/CatPinkRainbow.jpg";
import WhiteCat from "../assets/images/galleri/CatWhite.jpg";
import DogWhitePurpleDot from "../assets/images/galleri/DogWhitePurpleDot.jpg";
import DragonflyBlue from "../assets/images/galleri/DragonflyBlue.jpg";
import IgelkottWhite from "../assets/images/galleri/IgelkottBrown.jpg";
import GreyMouse from "../assets/images/galleri/MouseGrey.jpg";
import WinterPinkBear from "../assets/images/galleri/winter/WinterPinkBear.jpg";
import SnowKana from "../assets/images/galleri/winter/Snow_kana.jpg";
import SealOnIce from "../assets/images/galleri/winter/SealOnIce.jpg";
import NalleLilaMossa from "../assets/images/galleri/winter/NalleLilaMossa.jpg";
import CrystalBear from "../assets/images/galleri/winter/IceBearSnowCrystals.jpg";
import { BREAKPOINT_TABLET } from "./styled/Variables";

const images = [
  { src: BirdDarkPurple, alt: "Purple Bird", season: "autumn" },
  { src: AntPurple, alt: "Purple Ant", season: "spring" },
  { src: BirdPink, alt: "Pink Bird", season: "summer" },
  { src: BirdPink2, alt: "Pink Bird second", season: "summer" },
  { src: BirdPink3, alt: "Purple Bird third", season: "summer" },
  { src: RainbowCat, alt: "Rainbowcat", season: "spring" },
  { src: WhiteCat, alt: "White cat", season: "autumn" },
  { src: DogWhitePurpleDot, alt: "Dog with dots", season: "autumn" },
  { src: DragonflyBlue, alt: "Blue dragonfly", season: "summer" },
  { src: IgelkottWhite, alt: "Hedgehog", season: "autumn" },
  { src: GreyMouse, alt: "Grey Mouse", season: "autumn" },
  { src: SnowKana, alt: "Snökana", season: "winter" },
  { src: WinterPinkBear, alt: "Rosa nalle", season: "winter" },
  { src: SealOnIce, alt: "En säl på isen", season: "winter" },
  { src: NalleLilaMossa, alt: "Nalle med lila mössa", season: "winter" },
  { src: CrystalBear, alt: "Björn med iskristaller", season: "winter" },
  
];

export const useGalleryImages = (sortBy: string) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(1);

  const filteredImages = sortBy === "all" ? images : images.filter(img => img.season === sortBy);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const updateImagesPerPage = useCallback(() => {
    if (window.innerWidth >= parseInt(BREAKPOINT_TABLET, 10)) {
      setImagesPerPage(3);
    } else {
      setImagesPerPage(1);
    }
  }, []);

  const validateCurrentPage = useCallback(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    updateImagesPerPage();
    validateCurrentPage();
    window.addEventListener('resize', () => {
      updateImagesPerPage();
      validateCurrentPage();
    });

    return () => {
      window.removeEventListener('resize', () => {
        updateImagesPerPage();
        validateCurrentPage();
      });
    };
  }, [updateImagesPerPage, validateCurrentPage]);

  // Återställ sidan till 1 när sorteringsalternativet ändras
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

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
  const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);

  return {
    currentImages,
    currentPage,
    totalPages,
    handleNext,
    handlePrevious,
  };
};