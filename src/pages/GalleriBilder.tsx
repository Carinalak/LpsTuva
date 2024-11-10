import BirdDarkPurple from '../assets/images/galleri/BirdDarkPurple.jpg';
import { GalleryImage } from '../components/styled/Image';
import { H2White } from '../components/styled/Title';
import { WrapperWhite, TextWrapper } from '../components/styled/Wrappers';

export const GalleriBilder = () => {

  return (<>
  
    
  <WrapperWhite>
    <H2White>Mitt Galleri</H2White>
    <GalleryImage src={BirdDarkPurple} className="gallery-img" alt="Purple Bird" loading="lazy"/>
    <TextWrapper>

      testar
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid laboriosam deleniti 
    sint tenetur fuga, harum minima quaerat magni. Quod reiciendis, iste minima alias nemo pariatur 
    voluptates reprehenderit inventore commodi?
    </TextWrapper>
  </WrapperWhite>

  
  </>)
}