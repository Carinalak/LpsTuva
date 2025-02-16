import { FarglaggImage } from "../components/styled/Image";
import { H1WhiteSecond, StyledTextWhite, StyledTextWrapper } from "../components/styled/Fonts";
import { BackgroundOriginal, ColoringWrapper, ColoringWrapperInner, WhiteFont } from "../components/styled/Wrappers";
import { useFarglaggImages } from "../components/useFarglaggImages";
import { useState } from "react";
import { FarglaggImageModal } from "../components/FarglaggImageModal";
import { Ritblock } from "../components/ritblock/Ritblock";





export const Farglagg = () => {
  const images = useFarglaggImages();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });
  const [selectedImageForDrawing, setSelectedImageForDrawing] = useState<string | null>(null);

  const handleFarglagg = (imageSrc: string) => {
  setSelectedImageForDrawing(imageSrc);
};

  
    const openModal = (src: string, alt: string) => {
      setSelectedImage({ src, alt });
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  const handlePrint = (imageSrc: string) => {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print Image</title>');
      printWindow.document.write(`
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #fff;
          }
          img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
        </style>
      `);
      printWindow.document.write('</head><body>');
      printWindow.document.write(`<img src="${imageSrc}" />`);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    } else {
      console.error("Kunde inte öppna utskriftsfönstret.");
    }
  };

  const handleDownload = (imageSrc: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop() || 'image';
    link.click();
  };

  return (
    <BackgroundOriginal>
          {selectedImageForDrawing ? (
      <Ritblock imageSrc={selectedImageForDrawing} />
    ) : (
      <ColoringWrapper>
        <H1WhiteSecond>Färgläggning</H1WhiteSecond>
        <WhiteFont>Här kan du färglägga, skriva ut eller ladda ner bilder.</WhiteFont>

        {images.map((image, index) => (
          <ColoringWrapperInner key={index}>
            <FarglaggImage src={image.src} alt={image.alt} loading="lazy" onClick={() => openModal(image.src, image.alt)}/>
              <StyledTextWrapper>
                <StyledTextWhite onClick={() => handleFarglagg(image.src)}>Färglägg</StyledTextWhite>
                <StyledTextWhite onClick={() => handlePrint(image.src)}>Skriv ut</StyledTextWhite>
                <StyledTextWhite onClick={() => handleDownload(image.src)}>Ladda ned</StyledTextWhite>
              </StyledTextWrapper>
          </ColoringWrapperInner>
        ))}
      </ColoringWrapper>
    )}
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
