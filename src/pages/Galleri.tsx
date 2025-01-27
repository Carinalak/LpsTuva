import { Link } from "react-router-dom"
import { H1WhiteSecond, H4White } from "../components/styled/Fonts"
import { BackgroundOriginal, CenteredColTransWrapper, WhiteFont, WrapperTransparent } from "../components/styled/Wrappers"



export const Galleri = () => {

  return ( <BackgroundOriginal>
  <WrapperTransparent>
    <H1WhiteSecond>Galleri</H1WhiteSecond>
    <WhiteFont>Här kan du hitta konstnärliga foton på mina LPS.</WhiteFont>
    <CenteredColTransWrapper>
    <Link to="/galleribilder">
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Mitt Galleri</H4White>
      </Link>
      {/*<Link to="/minalps"><H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Mina LPS</H4White></Link>*/}
    </CenteredColTransWrapper>
  </WrapperTransparent>
  
  
  
  </BackgroundOriginal>)

}