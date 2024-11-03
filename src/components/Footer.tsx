import styled from "styled-components";
import { SMUTSROSA } from "./styled/Variables";

export const Footer = () => {
  const FooterContainer = styled.footer`

background-color: ${SMUTSROSA};
  padding: 1rem;
  text-align: center;
  margin-top: auto; /* Flyttar footern längst ner */
  margin-bottom: 0 !important;
  width: 100%;
`;

return (<>
<FooterContainer>
  <p>&copy; LpsTuva 2024</p>
</FooterContainer>

</>)

}