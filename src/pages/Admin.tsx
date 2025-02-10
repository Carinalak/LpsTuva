import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminSession, removeAdminSession } from "../services/CookieServiceAdmin";
import { supabase } from "../components/supabase";
import { AdminForm, FormButton, FormButtonWrapper, FormInput, FormTextarea, InputImageBack, InputImageContainer } from "../components/login/LoginStyled";
import { AdminLogoutLink, BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers";
import styled from "styled-components";
import { H1PurpleSecond, StyledLinkPurple, } from "../components/styled/Fonts";
import { KRITVIT, SMUTSROSA, BREAKPOINT_TABLET } from "../components/styled/Variables";

const ImageOuterWrapper = styled.section<{ isFocused: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) => (props.isFocused ? "rgba(255, 255, 255, 0.5)" : "transparent")}; /* Bakgrund genomskinlig vid fokus */
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  width: 300px;
  height: 35px;
  text-align: center; 
  border: 1px solid ${KRITVIT};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #726e6e;

  
    &:focus {
        border: 1px solid ${SMUTSROSA};
        outline: none;
      }
    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        width: 500px;
      }
`;


export const XRemoveButton = styled.button `
position: absolute;
top: 10px; 
right: 10px; 
background: red; 
color: white; 
border: none;
cursor: pointer; 
border-radius: 50%; 
width: 30px; 
height: 30px;
`;

export const Admin = () => {
  const [title, setTitle] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isContentFocused, setIsContentFocused] = useState(false);
  const [isImageFocused, setIsImageFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = getAdminSession();
    if (session) {
      setIsLoggedIn(true);
    } else {
      navigate("/adminlogin");
    }
  }, [navigate]);

  const handleLogout = () => {
    removeAdminSession();
    navigate("/adminlogin");
  };

  if (!isLoggedIn) {
    return <div>Laddar...</div>;
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
    const fileInput = document.getElementById("imageInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };
  

  const handleRemoveAll = () => {
    setImage(null);
    setPreview(null);
    setTitle("");
    setContent("");
    const fileInput = document.getElementById("imageInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = async () => {
    let imageUrl = null;
  
    if (image) {
      const { error } = await supabase.storage
        .from("images")
        .upload(`public/${image.name}`, image, { upsert: true });
  
      if (error) {
        console.error("Bilduppladdningsfel:", error);
        alert("Fel vid uppladdning av bild");
        return;
      }
  
      imageUrl = supabase.storage.from("images").getPublicUrl(`public/${image.name}`).data.publicUrl;
    }
  
    const { error } = await supabase
      .from("content")
      .insert([{ title, content, image_url: imageUrl }]);
  
    if (error) {
      console.error("Database insert error:", error);
      alert("Fel vid sparande av text!");
    } else {
      alert("Inlägg uppdaterat!");
      setTitle("");
      setContent("");
      setImage(null);   // Rensar bilden
      setPreview(null); // Rensar förhandsvisningen
      const fileInput = document.getElementById("imageInput") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    }
  };
  

  const handleFocusTitle = () => setIsTitleFocused(true);
  const handleBlurTitle = () => setIsTitleFocused(false);

  const handleFocusContent = () => setIsContentFocused(true);
  const handleBlurContent = () => setIsContentFocused(false);

  const handleFocusImage = () => setIsImageFocused(true);
  const handleBlurImage = () => setIsImageFocused(false);

  return (
    <BackgroundOriginal>
    <WrapperWhite>
      <AdminLogoutLink><StyledLinkPurple to="/adminlogin" onClick={handleLogout}>Logga ut</StyledLinkPurple></AdminLogoutLink>
      <H1PurpleSecond>Lps-Tuvas sida</H1PurpleSecond>
      
      <TextWrapper>
      <AdminForm>
        {isEditingTitle ? (
          <FormInput
            type="text"
            placeholder="Skriv din titel här!"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => { setIsEditingTitle(false); handleBlurTitle(); }}
            autoFocus
            onFocus={handleFocusTitle}
            style={{ backgroundColor: isTitleFocused ? "white" : "transparent" }}
          />
        ) : (
          <TitleContainer onClick={() => setIsEditingTitle(true)}>
            {title || "Skriv din titel här!"}
          </TitleContainer>
        )}

        <FormTextarea
          placeholder="Skriv din text här!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onFocus={handleFocusContent}
          onBlur={handleBlurContent}
          style={{ backgroundColor: isContentFocused ? "white" : "transparent" }}
        />
        
        <InputImageContainer
          isFocused={isImageFocused}  // Skickar fokus-status till InputImageContainer
          onFocus={handleFocusImage}  // När fokus sätts, ändras bakgrund
          onBlur={handleBlurImage}    // När fokus tas bort, återställ bakgrund
        >
  {preview ? (
    <ImageOuterWrapper
      isFocused={isImageFocused}
      onFocus={handleFocusImage}
      onBlur={handleBlurImage}
    >
      <img src={preview} alt="Förhandsvisning av bild" style={{ width: "100%", maxWidth: "300px", borderRadius: "10px", marginTop: "10px" }} />
      <XRemoveButton onClick={handleRemoveImage} >✖</XRemoveButton>
    </ImageOuterWrapper>
  ) : (
    <div>Lägg till en bild</div>
  )}
  <InputImageBack id="imageInput" type="file" accept="image/*" onChange={handleImageChange} />
</InputImageContainer>
        <FormButtonWrapper>
          <FormButton onClick={handleRemoveAll}>Rensa</FormButton>
          <FormButton onClick={handleSubmit}>Skicka</FormButton>
        </FormButtonWrapper>
      </AdminForm>

      </TextWrapper>
    </WrapperWhite>
    </BackgroundOriginal>
  );
};

export default Admin;
