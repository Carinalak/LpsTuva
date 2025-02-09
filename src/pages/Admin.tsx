import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminSession, removeAdminSession } from "../services/CookieServiceAdmin";
import { supabase } from "../components/supabase";
import { AdminForm, FormButton, FormButtonWrapper, FormInput, FormTextarea, InputImageBack, InputImageContainer } from "../components/login/LoginStyled";
import { WrapperWhite } from "../components/styled/Wrappers";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
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
    }
  };

  return (
    <WrapperWhite>
        
      <h2>Lägg till ny text</h2>
        <AdminForm>
            <FormInput type="text" placeholder="Titel" onChange={(e) => setTitle(e.target.value)} />
            <FormTextarea placeholder="Text" onChange={(e) => setContent(e.target.value)} />
            <InputImageContainer>
                <div>Lägg till en bild: </div>
                <InputImageBack type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
            </InputImageContainer>
            <FormButtonWrapper>
                <FormButton onClick={handleSubmit}>Rensa</FormButton>
                <FormButton onClick={handleSubmit}>Spara</FormButton>
            </FormButtonWrapper>
        </AdminForm>
      <FormButton onClick={handleLogout}>Logga ut</FormButton>

    </WrapperWhite>
  );
};

export default Admin;
