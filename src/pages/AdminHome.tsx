import { useEffect, useState } from "react";
import { H1PurpleSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers";
import { Link } from "react-router-dom";
import { BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, POOLBLA, SKUGGLILA } from "../components/styled/Variables";
import { styled } from "styled-components";
import { SerieImage } from "../components/styled/Image";
import { supabase } from "../components/supabase";
import Gris from '../assets/images/gris.png';

const HomeImg = styled.img`
  width: 300px;
  margin-bottom: 60px;
  border-radius: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 400px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 500px;
    margin-bottom: 80px;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${SKUGGLILA};
  transition: color 0.3s ease;

  &:hover {
    color: ${POOLBLA};
    text-decoration: underline;
  }
`;

export const AdminHome = () => {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");

  // Hämta titel, text och bild-URL från Supabase
  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from("content")
        .select("title, content, image_url")
        .eq("title", "homepage")
        .single();

      if (error) {
        console.error("Fel vid hämtning av text:", error);
      } else {
        setTitle(data.title);
        setContent(data.content);
        setImageUrl(data.image_url || "");
      }
    };

    fetchContent();
  }, []);

  return (
    <BackgroundOriginal>
      <WrapperWhite>
        <H1PurpleSecond>{title}</H1PurpleSecond>
        <TextWrapper>
          <p>{content}</p>
          <p>
            Här hittar du <StyledLink to="/farglagg">färgläggning</StyledLink>, <StyledLink to="/pysselspel">memoryspel</StyledLink> och
            ett <StyledLink to="/galleribilder">fotogalleri</StyledLink>.
            Om du vill skriva till Tuva kan du gå till <StyledLink to="/kontakt">Kontakt</StyledLink> och göra det där.
          </p>
        </TextWrapper>

        {imageUrl && <HomeImg src={imageUrl} alt="Hemsidans bild" />}
        <SerieImage src={Gris} alt="Gris" loading="lazy" />
      </WrapperWhite>
    </BackgroundOriginal>
  );
};
