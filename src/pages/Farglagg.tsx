import { Button, ButtonWrapper } from "../components/styled/Buttons";
import { FarglaggImage } from "../components/styled/Image";
import { H1WhiteSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, ColoringWrapper, ColoringWrapperInner, WhiteFont } from "../components/styled/Wrappers";
import Seal from '../assets/images/farglagg/sal.jpg';
import Kanin from '../assets/images/farglagg/kanin.jpg';
import Apflicka from '../assets/images/farglagg/apflicka.jpg';
import Hund from '../assets/images/farglagg/hund.jpg';
import Nalle from '../assets/images/farglagg/nalle.jpg';

export const Farglagg = () => {

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
    link.download = imageSrc.split('/').pop() || 'image'; // Sätt samma namn som bildens namn
    link.click();
  };

  return (
    <BackgroundOriginal>
      <ColoringWrapper>
        <H1WhiteSecond>Färgläggning</H1WhiteSecond>
        <WhiteFont>Här kan du skriva ut, eller ladda ner bilder att färglägga.</WhiteFont>
        
        <ColoringWrapperInner>
          <FarglaggImage src={Seal} className="gallery-img" alt="Säl" loading="lazy" />
          <ButtonWrapper>
            <Button onClick={() => handlePrint(Seal)}>Skriv ut</Button>
            <Button onClick={() => handleDownload(Seal)}>Ladda ned</Button>
          </ButtonWrapper>
        </ColoringWrapperInner>

        <ColoringWrapperInner>
          <FarglaggImage src={Kanin} className="gallery-img" alt="Kanin och hund" loading="lazy" />
          <ButtonWrapper>
            <Button onClick={() => handlePrint(Kanin)}>Skriv ut</Button>
            <Button onClick={() => handleDownload(Kanin)}>Ladda ned</Button>
          </ButtonWrapper>
        </ColoringWrapperInner>

        <ColoringWrapperInner>
          <FarglaggImage src={Hund} className="gallery-img" alt="Hund" loading="lazy" />
          <ButtonWrapper>
            <Button onClick={() => handlePrint(Hund)}>Skriv ut</Button>
            <Button onClick={() => handleDownload(Hund)}>Ladda ned</Button>
          </ButtonWrapper>
        </ColoringWrapperInner>

        <ColoringWrapperInner>
          <FarglaggImage src={Nalle} className="gallery-img" alt="Nalle" loading="lazy" />
          <ButtonWrapper>
            <Button onClick={() => handlePrint(Nalle)}>Skriv ut</Button>
            <Button onClick={() => handleDownload(Nalle)}>Ladda ned</Button>
          </ButtonWrapper>
        </ColoringWrapperInner>

        <ColoringWrapperInner>
          <FarglaggImage src={Apflicka} className="gallery-img" alt="Apflicka" loading="lazy" />
          <ButtonWrapper>
            <Button onClick={() => handlePrint(Apflicka)}>Skriv ut</Button>
            <Button onClick={() => handleDownload(Apflicka)}>Ladda ned</Button>
          </ButtonWrapper>
        </ColoringWrapperInner>

      </ColoringWrapper>
    </BackgroundOriginal>
  );
};