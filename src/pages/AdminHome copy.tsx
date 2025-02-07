import { useEffect, useState } from "react";
import { H1PurpleSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers";
import { styled } from "styled-components";
import { supabase } from "../components/supabase";


// gammal men med bildhantering
const EditButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  &:hover {
    background: #0056b3;
  }
`;

const ImageInput = styled.input`
  margin-top: 20px;
`;

export const AdminHome = () => {
  const [updatedContent, setUpdatedContent] = useState(""); // Texten som ska sparas
  const [imageUrl, setImageUrl] = useState(""); // Bildens URL
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // Bilden som användaren väljer
  const [isLoading, setIsLoading] = useState(true);

  // Hämta text och bild-URL från Supabase
  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from("content")
        .select("content, image_url")
        .eq("title", "homepage")
        .single();

      if (error) {
        console.error("Fel vid hämtning av text:", error);
      } else {
        setUpdatedContent(data.content); // Sätt texten
        setImageUrl(data.image_url || ""); // Sätt bild-URL om den finns
      }
      setIsLoading(false);
    };

    fetchContent();
  }, []);

  // Spara uppdaterad text och bild-URL till Supabase
  const saveContent = async () => {
    if (selectedImage) {
      // Om användaren har valt en bild, ladda upp den
      const { data, error: uploadError } = await supabase.storage
        .from("images") // Ersätt med din bucket-namn
        .upload(`homepage/${selectedImage.name}`, selectedImage);
  
      if (uploadError) {
        console.error("Fel vid bilduppladdning:", uploadError.message);
        return;
      }
  
      // Hämta den offentliga URL:en för bilden
      const { data: urlData } = supabase.storage
        .from("images")
        .getPublicUrl(data.path);
  
      const publicUrl = urlData.publicUrl;
  
      // Uppdatera Supabase med text och bild-URL
      const { error } = await supabase
        .from("content")
        .update({ content: updatedContent, image_url: publicUrl })
        .eq("title", "homepage");
  
      if (error) {
        console.error("Fel vid uppdatering av text och bild:", error.message);
      } else {
        setImageUrl(publicUrl);
        alert("Text och bild uppdaterade!");
      }
    } else {
      // Om ingen bild laddas upp, bara uppdatera texten
      const { error } = await supabase
        .from("content")
        .update({ content: updatedContent })
        .eq("title", "homepage");
  
      if (error) {
        console.error("Fel vid uppdatering av text:", error.message);
      } else {
        alert("Text uppdaterad!");
      }
    }
  };

  // Hantera bildval
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setSelectedImage(file);

      // Skapa en URL för att visa bilden direkt
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);  // Uppdatera bildens URL för visning
    }
  };

  if (isLoading) return <p>Laddar...</p>;

  return (
    <BackgroundOriginal>
      <WrapperWhite>
        <H1PurpleSecond>Lps-Tuvas sida</H1PurpleSecond>

        <TextWrapper>
          <input 
            type="text" 
            placeholder="Titel" 
            //onChange={(e) => setUpdatedTitle(e.target.value)} 
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            rows={5}
            style={{ width: "100%" }}
            placeholder="Skriv din text här"
          />
        </TextWrapper>

        <div>
          <h3>Nuvarande bild:</h3>
          {imageUrl ? (
            <img src={imageUrl} alt="Hemsidans bild" style={{ maxWidth: "300px", marginBottom: "20px" }} />
          ) : (
            <p>Ingen bild uppladdad.</p>
          )}

          <h3>Ladda upp en ny bild:</h3>
          <ImageInput type="file" onChange={handleImageChange} />

          <EditButton onClick={saveContent}>Spara</EditButton>
        </div>
      </WrapperWhite>
    </BackgroundOriginal>
  );
};
