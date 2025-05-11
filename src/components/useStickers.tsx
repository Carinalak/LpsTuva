import Star from '../assets/stickers/stjarna.png';
import HeartPink from '../assets/stickers/hjarta-rosa.png';
import Eye from '../assets/stickers//oga.png';
import Paw from '../assets/stickers/tass.png';
import Carrot from '../assets/stickers/morot.png';
import RedDot from '../assets/stickers/red_dot.png';

export const useStickers = () => {

  return [
    {src: Star, alt: "stjärna" },
    {src: HeartPink, alt: "Rosa hjärta" },
    {src: Eye, alt: "Öga" },
    {src: Paw, alt: "Tass" },
    {src: RedDot, alt: "Röd prick" },
    {src: Carrot, alt: "Morot" },
  ];
};