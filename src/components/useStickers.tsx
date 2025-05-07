import Star from '../assets/stickers/stjarna.png';
import HeartPink from '../assets/stickers/hjarta-rosa.png';
import Eye from '../assets/stickers//oga.png';
import Paw from '../assets/stickers/tass.png';
import Carrot from '../assets/stickers/morot.png';

export const useStickers = () => {

  return [
    {src: Star, alt: "stjärna" },
    {src: HeartPink, alt: "Rosa hjärta" },
    {src: Eye, alt: "Öga" },
    {src: Paw, alt: "Tass" },
    {src: Carrot, alt: "Morot" },
  ];
};