import {  H4Black, StyledLink } from "../components/styled/Fonts";
import { WhiteWrapperMini } from "../components/styled/Wrappers";

export const Webmaster = () => {

  return (<>

        <WhiteWrapperMini>
                <H4Black>Webmaster</H4Black>
            <div>
            Vad vill du se mer av på den här sidan? Är det något du vill ändra på, eller något som ser konstigt ut 
            eller inte fungerar? Maila till 
            Webmaster <StyledLink to="mailto:carina.lakosil@gmail.com" target="_blank" rel="noopener noreferrer"> Carina</StyledLink>.</div>
            
        </WhiteWrapperMini>
</>
  )};