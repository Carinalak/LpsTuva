import { useState, useEffect, useCallback } from "react";
import { BREAKPOINT_TABLET } from "./styled/Variables";



import AntPurple from "../assets/images/galleri/spring/AntPurple.jpg";
import BrunKattKorsbar from "../assets/images/galleri/spring/brun_katt_korsbarsblommor.jpg";
import FagelHyacinth from "../assets/images/galleri/spring/fagel_hyacinth.jpg";
import GraHund from "../assets/images/galleri/spring/gra_hund_blomma.jpg";
import KaninStubbe from "../assets/images/galleri/spring/kanin_stubbe.jpg";
import LammGulKrokus from "../assets/images/galleri/spring/lamm_gul_krokus.jpg";
import LilaKoKrokus from "../assets/images/galleri/spring/lila_ko_krokus.jpg";
import VitKaninKrokus from "../assets/images/galleri/spring/vit_kanin_krokus.jpg";
import RainbowCat from "../assets/images/galleri/spring/CatPinkRainbow.jpg";

import BirdPink from "../assets/images/galleri/summer/BirdPink.jpg";
import BirdPink2 from "../assets/images/galleri/summer/BirdPink2.jpg";
import BirdPink3 from "../assets/images/galleri/summer/BirdPink3.jpg";
import DogWhitePurpleDot from "../assets/images/galleri/summer/DogWhitePurpleDot.jpg";
import DragonflyBlue from "../assets/images/galleri/summer/DragonflyBlue.jpg";

import BunnyRedLeaf from "../assets/images/galleri/autumn/BunnyRedLeaf.jpg";
import HundOrangeLov from "../assets/images/galleri/autumn/hund_orange_lov.jpg";
import Gungar from "../assets/images/galleri/autumn/gungar.jpg";
import SpindelOrangeLov1 from "../assets/images/galleri/autumn/spindel_orangelov1.jpg";
import SpindelOrangeLov2 from "../assets/images/galleri/autumn/spindel_orangelov2.jpg";
import WhiteCat from "../assets/images/galleri/autumn/CatWhite.jpg";
import BirdDarkPurple from "../assets/images/galleri/autumn/BirdDarkPurple.jpg";
import IgelkottWhite from "../assets/images/galleri/autumn/IgelkottBrown.jpg";
import GreyMouse from "../assets/images/galleri/autumn/MouseGrey.jpg";
import ZebraWhitePurple from "../assets/images/galleri/autumn/ZebraWhitePurple.jpg";

import WinterPinkBear from "../assets/images/galleri/winter/WinterPinkBear.jpg";
import SealOnIce from "../assets/images/galleri/winter/SealOnIce.jpg";
import NalleLilaMossa from "../assets/images/galleri/winter/NalleLilaMossa.jpg";
import CrystalBear from "../assets/images/galleri/winter/IceBearSnowCrystals.jpg";
import HundKalkeSnow1 from "../assets/images/galleri/winter/hundar_kalke_snow.jpg";
import HundKalkeSnow2 from "../assets/images/galleri/winter/hundar_kalke_snow2.jpg";
import LilaKaninSnow from "../assets/images/galleri/winter/lila_kanin_snow.jpg";
import RosaKatt from "../assets/images/galleri/winter/rosa_katt.jpg";
import SnowKana from "../assets/images/galleri/winter/Snow_kana.jpg";
import RavMossaSnow from "../assets/images/galleri/winter/Rav_mossa_snow.jpg";
import ValrossIs from "../assets/images/galleri/winter/valross_is.jpg";
import KaninPulka1 from "../assets/images/galleri/winter/kanin_pulka.jpg";
import KaninPulka2 from "../assets/images/galleri/winter/kanin_pulka2.jpg";


const images = [

    // AUTUMN
  { src: BunnyRedLeaf, alt: "Kanin med ett rött löv", season: "autumn" },
  { src: HundOrangeLov, alt: "Hund bland orange löv", season: "autumn" },
  { src: Gungar, alt: "Petshoparna gungar på en gul gunga", season: "autumn" },
  { src: SpindelOrangeLov1, alt: "Spindel sitter på en gren uppifrån", season: "autumn" },
  { src: SpindelOrangeLov2, alt: "Spindel sitter på en gren från sidan", season: "autumn" },
  { src: WhiteCat, alt: "Vit katt", season: "autumn" },
  { src: BirdDarkPurple, alt: "Lila fågel", season: "autumn" },
  { src: IgelkottWhite, alt: "En igelkotte", season: "autumn" },
  { src: GreyMouse, alt: "en grå mus", season: "autumn" },
  { src: DogWhitePurpleDot, alt: "Dog with dots", season: "autumn" },
  { src: ZebraWhitePurple, alt: "Zebra", season: "autumn" },


  // WINTER
  { src: CrystalBear, alt: "Björn med iskristaller", season: "winter" },
  { src: RosaKatt, alt: "Rosa katt", season: "winter" },
  { src: HundKalkeSnow1, alt: "Hundar på kälke", season: "winter" },
  { src: HundKalkeSnow2, alt: "Hundar på kälke", season: "winter" },
  { src: SealOnIce, alt: "En säl på isen", season: "winter" },
  { src: NalleLilaMossa, alt: "Nalle med lila mössa", season: "winter" },
  { src: LilaKaninSnow, alt: "Lila kanin i snö", season: "winter" },
  { src: SnowKana, alt: "Snökana", season: "winter" },
  { src: RavMossaSnow, alt: "Räv i mossa", season: "winter" },
  { src: ValrossIs, alt: "Valross i is", season: "winter" },
  { src: KaninPulka1, alt: "Kanin på pulka", season: "winter" },
  { src: KaninPulka2, alt: "Kanin på pulka", season: "winter" },
  { src: WinterPinkBear, alt: "Rosa nalle", season: "winter" },

  // SPRING
  { src: LilaKoKrokus, alt: "Lila ko bredvid lila krokus", season: "spring" },
  { src: RainbowCat, alt: "Rainbowcat", season: "spring" },
  { src: LammGulKrokus, alt: "Gulligt lamm bredvid en vit krokus", season: "spring" },
  { src: FagelHyacinth, alt: "En fågel bredvid en hyacint", season: "spring" },
  { src: AntPurple, alt: "Purple Ant", season: "spring" },
  { src: BrunKattKorsbar, alt: "En brun katt bredvid körsbärsblommor", season: "spring" },
  { src: GraHund, alt: "Grå hund", season: "spring" },
  { src: KaninStubbe, alt: "En kanin som sitter på en stubbe", season: "spring" },
  { src: VitKaninKrokus, alt: "En vit kanin bredvid en krokus", season: "spring" },

  // SUMMER
  { src: BirdPink, alt: "Pink Bird", season: "summer" },
  { src: BirdPink2, alt: "Pink Bird second", season: "summer" },
  { src: BirdPink3, alt: "Purple Bird third", season: "summer" },
  { src: DragonflyBlue, alt: "Blue dragonfly", season: "summer" },

  

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