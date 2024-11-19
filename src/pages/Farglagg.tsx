import { Button, ButtonWrapper } from "../components/styled/Buttons"
import { FarglaggImage } from "../components/styled/Image"
import { H1PurpleSecond } from "../components/styled/Title"
import { BlackFont, ColoringWrapper, ColoringWrapperInner } from "../components/styled/Wrappers"
import Seal from '../assets/images/farglagg/sal.jpg';
import Kanin from '../assets/images/farglagg/kanin.jpg';
import Apflicka from '../assets/images/farglagg/apflicka.jpg';
import Hund from '../assets/images/farglagg/hund.jpg';
import Nalle from '../assets/images/farglagg/nalle.jpg';

export const Farglagg = () => {


return (<>



      <ColoringWrapper>
      <H1PurpleSecond>Färgläggning</H1PurpleSecond>
      <BlackFont>Här kan du skriva ut, eller ladda ner bilder att färglägga.</BlackFont>

        <ColoringWrapperInner><FarglaggImage src={Seal} className="gallery-img" alt="Säl" loading="lazy"/><ButtonWrapper><Button>Skriv ut</Button> <Button>Ladda ned</Button></ButtonWrapper></ColoringWrapperInner>
        <ColoringWrapperInner><FarglaggImage src={Kanin} className="gallery-img" alt="Kanin och hund" loading="lazy"/><ButtonWrapper><Button>Skriv ut</Button> <Button>Ladda ned</Button></ButtonWrapper></ColoringWrapperInner>
        <ColoringWrapperInner><FarglaggImage src={Hund} className="gallery-img" alt="Apa och nalle" loading="lazy"/><ButtonWrapper><Button>Skriv ut</Button> <Button>Ladda ned</Button></ButtonWrapper></ColoringWrapperInner>
        <ColoringWrapperInner><FarglaggImage src={Nalle} className="gallery-img" alt="Apa och nalle" loading="lazy"/><ButtonWrapper><Button>Skriv ut</Button> <Button>Ladda ned</Button></ButtonWrapper></ColoringWrapperInner>
        <ColoringWrapperInner><FarglaggImage src={Apflicka} className="gallery-img" alt="Apa och nalle" loading="lazy"/><ButtonWrapper><Button>Skriv ut</Button> <Button>Ladda ned</Button></ButtonWrapper></ColoringWrapperInner>
        <ColoringWrapperInner></ColoringWrapperInner>
      </ColoringWrapper>




</>)

}