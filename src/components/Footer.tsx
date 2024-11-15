import styled from "styled-components";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, KRITVIT, SMUTSROSA } from "./styled/Variables";
import { SocialMediaWrapper } from "./styled/Image";
import { H4White } from "./styled/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

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
gap: 40px;
`;

const ResponsiveIcon = styled(FontAwesomeIcon)`
  color: ${KRITVIT};
  font-size: 32px;

  /* Öka storleken på större skärmar */
  @media (min-width: ${BREAKPOINT_TABLET}) {
    font-size: 35px;
  }

  @media (min-width: ${BREAKPOINT_DESKTOP}) {
    font-size: 35px;
  }
`;

export const Footer = () => {

return (
  <FooterContainer>
    <H4White>&copy; LpsTuva 2024 </H4White>
    <SocialMediaWrapper>
      <a href="https://www.youtube.com/c/LPSTuwa" target="_blank" rel="noopener noreferrer">
        <ResponsiveIcon icon={faSquareYoutube} />
      </a>

      <a href="https://www.instagram.com/tuvasundgren/" target="_blank" rel="noopener noreferrer">
        <ResponsiveIcon icon={faSquareInstagram} />
      </a>

      <a href="https://open.spotify.com/artist/2zdnWVvx5WeaD3vctR5DnO" target="_blank" rel="noopener noreferrer">
        <ResponsiveIcon icon={faSpotify} />
      </a>
    </SocialMediaWrapper>
  </FooterContainer>
);
}