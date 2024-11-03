import styled from "styled-components";
import { SMUTSROSA } from "./styled/Variables";
import { WhiteFont } from "./styled/Wrappers";


export const Footer = () => {
  const FooterContainer = styled.footer`

background-color: ${SMUTSROSA};
padding: 1rem;
text-align: center;
margin-top: auto; /* Flyttar footern längst ner */
margin-bottom: 0 !important;
max-width: 100%;
height: 60px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

return (<>
<FooterContainer>
  <WhiteFont>&copy; LpsTuva 2024</WhiteFont>
</FooterContainer>

</>)

}