import styled from "styled-components";
import { SMUTSROSA } from "./styled/Variables";
import YoutubeIcon from '../assets/icons/youtube.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import SpotifyIcon from '../assets/icons/spotify.svg';
import { SocialMediaIcons, SocialMediaWrapper } from "./styled/Image";
import { H4White } from "./styled/Title";


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
gap: 40px;
`;

return (<>
<FooterContainer>
<H4White>&copy; LpsTuva 2024 </H4White>
  <SocialMediaWrapper>
    <SocialMediaIcons src={YoutubeIcon} alt="YouTube länk till LPS-Tuva" />
    <SocialMediaIcons src={InstagramIcon} alt="Instagramlänk till LPS-Tuva" />
    <SocialMediaIcons src={SpotifyIcon} alt="Spotifylänk till Tuva Sundgren" />
  </SocialMediaWrapper>
</FooterContainer>

</>)

}