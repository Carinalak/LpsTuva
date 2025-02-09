import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminSession, removeAdminSession } from "../services/CookieServiceAdmin";
import { supabase } from "../components/supabase";
import { AdminForm, FormButton, FormButtonWrapper, FormInput, FormTextarea, InputImageBack, InputImageContainer } from "../components/login/LoginStyled";
import { WrapperWhite } from "../components/styled/Wrappers";
import styled from "styled-components";

const ImageOuterWrapper = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// Wrapper för bilden och krysset
const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

// Stil för förhandsvisning av bild
const ImagePreview = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin-top: 10px;
`;

// Stil för ta bort-knappen (krysset)
const RemoveButton = styled.button`
  position: absolute;
  top: 14px;
  right: 5px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  color: red;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
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

  // Hantera bildval och skapa en förhandsvisning
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Ta bort bild och rensa filinput
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
        <FormInput type="text" placeholder="Titel" value={title} onChange={(e) => setTitle(e.target.value)} />
        <FormTextarea placeholder="Text" value={content} onChange={(e) => setContent(e.target.value)} />
        
        <InputImageContainer>
          {preview ? (
            <ImageOuterWrapper>
            <ImageWrapper>
              <ImagePreview src={preview} alt="Förhandsvisning av bild" />
              <RemoveButton onClick={handleRemoveImage}>✖</RemoveButton>
            </ImageWrapper>
            </ImageOuterWrapper>
          ) : (
            <div>Lägg till en bild</div>
          )}
          <InputImageBack id="imageInput" type="file" accept="image/*" onChange={handleImageChange} />
        </InputImageContainer>

        <FormButtonWrapper>
          <FormButton onClick={handleRemoveAll}>Rensa</FormButton>
          <FormButton onClick={handleSubmit}>Spara</FormButton>
        </FormButtonWrapper>
      </AdminForm>

      <FormButton onClick={handleLogout}>Logga ut</FormButton>
    </WrapperWhite>
  );
};

export default Admin;
