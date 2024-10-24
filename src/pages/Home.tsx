import { SecondaryTitle } from "../components/styled/Title"
import { TextWrapper, Wrapper } from "../components/styled/Wrappers"

export const Home = () => {

  return ( <>
  
  <SecondaryTitle>Hej!</SecondaryTitle>
  <Wrapper>
    <img src="/src/assets/galleri/BirdDarkPurple.jpg" className="gallery-img" alt="Purple Bird"/>
    <TextWrapper>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid laboriosam deleniti 
    sint tenetur fuga, harum minima quaerat magni. Quod reiciendis, iste minima alias nemo pariatur 
    voluptates reprehenderit inventore commodi?
    </TextWrapper>
  </Wrapper>

  
  </>)

}