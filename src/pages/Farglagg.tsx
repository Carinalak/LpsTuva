import { Button, ButtonWrapper } from "../components/styled/Buttons";
import { FarglaggImage } from "../components/styled/Image";
import { H1WhiteSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, ColoringWrapper, ColoringWrapperInner, WhiteFont } from "../components/styled/Wrappers";
import { useFarglaggImages } from "../components/useFarglaggImages";



export const Farglagg = () => {
  const images = useFarglaggImages();

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
      <ColoringWrapper>
        <H1WhiteSecond>Färgläggning</H1WhiteSecond>
        <WhiteFont>Här kan du skriva ut, eller ladda ner bilder att färglägga.</WhiteFont>

        {images.map((image, index) => (
          <ColoringWrapperInner key={index}>
            <FarglaggImage src={image.src} alt={image.alt} loading="lazy" />
            <ButtonWrapper>
              <Button onClick={() => handlePrint(image.src)}>Skriv ut</Button>
              <Button onClick={() => handleDownload(image.src)}>Ladda ned</Button>
            </ButtonWrapper>
          </ColoringWrapperInner>
        ))}
      </ColoringWrapper>
    </BackgroundOriginal>
  );
};
