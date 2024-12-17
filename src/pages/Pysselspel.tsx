import { Link } from "react-router-dom";
import { H1WhiteSecond, H4White } from "../components/styled/Title";
import { BackgroundOriginal, CenteredColTransWrapper, WhiteFont, WrapperTransparent } from "../components/styled/Wrappers";

export const PysselSpel = () => {



  return (<BackgroundOriginal>
<WrapperTransparent>
    <H1WhiteSecond>Pyssel & Spel</H1WhiteSecond>
    <WhiteFont></WhiteFont>
    <CenteredColTransWrapper>
    <Link to="/farglagg">
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Färgläggning</H4White>
      </Link>

      <Link to="/memory">
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Memoryspel</H4White>
      </Link>
      <Link to="/julmemory">
      <H4White style={{ cursor: 'pointer', textDecoration: 'underline' }}>Julmemory</H4White>
      </Link>
    </CenteredColTransWrapper>
  </WrapperTransparent>


  
  </BackgroundOriginal>)
};