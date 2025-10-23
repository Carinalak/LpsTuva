import { H1WhiteSecond, StyledTextWhite } from "../../components/styled/Fonts";
import { BackgroundOriginal, ColoringWrapper, HalloweenPysselImage, HalloweenPysselTextWrapper, HalloweenWrapperInner, WhiteFont } from "../../components/styled/Wrappers";
import { useHalloweenPysselImages } from "../halloween/useHalloweenPysselImages";
import { useState } from "react";
import { FarglaggImageModal } from "../../components/FarglaggImageModal";
import { useNavigate } from "react-router-dom";


export const Halloweenpyssel = () => {
  const images = useHalloweenPysselImages();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });
  const navigate = useNavigate();

  const handleFarglagg = (imageSrc: string) => {

  navigate(`/ritblock?image=${encodeURIComponent(imageSrc)}`);
};

  
    const openModal = (src: string, alt: string) => {
      setSelectedImage({ src, alt });
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

const handlePrint = (pdfSrc: string) => {
  window.open(pdfSrc, '_blank');
};

  const handleDownload = (imageSrc: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop() || 'image';
    link.click();
  };

  // --------------------- Koden nedan gör så att sidan hamnar högst upp när den öppnas ---------------------- // 
  setTimeout(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, 0);
  // ---------------------------------------- SLUT PÅ SCROLLKOD ---------------------------------------------- //
  
  return (
    <BackgroundOriginal>

      <ColoringWrapper>
        <H1WhiteSecond>Halloweenpyssel</H1WhiteSecond>
        <WhiteFont>Pyssla med Tuvas Pysselbilder.</WhiteFont>

        {images.map((image, i) => (
          <HalloweenWrapperInner key={i}>
            <HalloweenPysselImage
              src={image.web}
              alt={image.alt}
              onClick={() => openModal(image.web, image.alt)}
            />
            <HalloweenPysselTextWrapper>
              <StyledTextWhite onClick={() => handleFarglagg(image.web)}>Öppna i ritblock</StyledTextWhite>
              <StyledTextWhite onClick={() => handlePrint(image.pdf)}>Skriv ut</StyledTextWhite>
              <StyledTextWhite onClick={() => handleDownload(image.pdf)}>Ladda ned</StyledTextWhite>
            </HalloweenPysselTextWrapper>
          </HalloweenWrapperInner>
        ))}
      </ColoringWrapper>

            {isModalOpen && (
              <FarglaggImageModal
                imageSrc={selectedImage.src}
                imageAlt={selectedImage.alt}
                onClose={closeModal}
              />
            )}
    </BackgroundOriginal>
  );
};
