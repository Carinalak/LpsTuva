
/*
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminSession, removeAdminSession } from "../services/CookieServiceAdmin";
import { supabase } from "../components/supabase";
import { AdminForm, FormButton, FormButtonWrapper, FormInput, FormTextarea, InputImageBack, InputImageContainer } from "../components/login/LoginStyled";
import { WrapperWhite } from "../components/styled/Wrappers";
import styled from "styled-components";

const EditableContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  min-height: 40px;
  background-color: white;
  border: 1px solid #ccc;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const EditableTextArea = styled.div`
  padding: 10px;
  min-height: 100px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: white;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ImageOuterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const ImagePreview = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Admin = () => {
  const [title, setTitle] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [content, setContent] = useState("");
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    setIsEditingImage(false); // Avsluta redigeringsläget efter att en bild valts
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
    setIsEditingImage(false);
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
      alert("Text sparad!");
      setTitle("");
      setContent("");
      setImage(null);
      setPreview(null);
    }
  };

  return (
    <WrapperWhite>
      <h2>Lägg till ny text</h2>
      <AdminForm>



        {isEditingTitle ? (
          <FormInput
            type="text"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsEditingTitle(false)}
            autoFocus
          />
        ) : (
          <EditableContainer onClick={() => setIsEditingTitle(true)}>
            {title || "Klicka för att redigera titel"}
          </EditableContainer>
        )}




        {isEditingContent ? (
          <FormTextarea
            placeholder="Text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={() => setIsEditingContent(false)}
            autoFocus
          />
        ) : (
          <EditableTextArea onClick={() => setIsEditingContent(true)}>
            {content || "Klicka för att redigera text"}
          </EditableTextArea>
        )}



        
        <InputImageContainer>
          {isEditingImage ? (
            <InputImageBack id="imageInput" type="file" accept="image/*" onChange={handleImageChange} onBlur={() => setIsEditingImage(false)} />
          ) : preview ? (
            <ImageOuterWrapper>
              <ImageWrapper onClick={() => setIsEditingImage(true)}>
                <ImagePreview src={preview} alt="Förhandsvisning av bild" />
              </ImageWrapper>
            </ImageOuterWrapper>
          ) : (
            <div onClick={() => setIsEditingImage(true)}>Klicka för att lägga till en bild</div>
          )}
        </InputImageContainer>

        <FormButtonWrapper>
          <FormButton onClick={() => { setTitle(""); setContent(""); setImage(null); setPreview(null); }}>Rensa</FormButton>
          <FormButton onClick={handleSubmit}>Spara</FormButton>
        </FormButtonWrapper>
      </AdminForm>

      <FormButton onClick={handleLogout}>Logga ut</FormButton>
    </WrapperWhite>
  );
};

export default Admin;

*/
