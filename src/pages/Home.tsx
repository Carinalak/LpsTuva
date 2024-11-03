import { GalleryImage } from "../components/styled/Image"
import { SecondaryTitle } from "../components/styled/Title"
import { TextWrapper, WrapperWhite } from "../components/styled/Wrappers"
import BirdDarkPurple from '../assets/images/galleri/BirdDarkPurple.jpg';

export const Home = () => {

  return ( <>
  
  <SecondaryTitle>LpsTuvas Sida</SecondaryTitle>
  <WrapperWhite>
    <GalleryImage src={BirdDarkPurple} className="gallery-img" alt="Purple Bird"/>
    <TextWrapper>

      testar
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid laboriosam deleniti 
    sint tenetur fuga, harum minima quaerat magni. Quod reiciendis, iste minima alias nemo pariatur 
    voluptates reprehenderit inventore commodi?
    </TextWrapper>
  </WrapperWhite>

  
  </>)

}