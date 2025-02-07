import { useState } from "react";
import { H1PurpleSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers";
import { styled } from "styled-components";
import { supabase } from "../components/supabase";

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

export const AdminHome = () => {
  const [updatedContent, setUpdatedContent] = useState(""); // Texten som ska sparas
  const [updatedTitle, setUpdatedTitle] = useState(""); // Titeln som ska sparas
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // Fil för vald bild

  // Funktion för att hantera bildval
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]); // Spara vald fil
    }
  };

  // Funktion för att ladda upp bild till Supabase
  const uploadImage = async (file: File) => {
    const fileName = `${Date.now()}-${file.name}`;
    console.log("Försöker ladda upp fil:", fileName);
  
    const { data, error } = await supabase.storage
    .from("images") // Se till att detta är rätt bucket
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type, // Se till att rätt contentType skickas
    });
  
  if (error) {
    console.error("Uppladdningsfel:", error.message); // Logga felet
  } else {
    console.log("Fil uppladdad:", data);
  }
  
    console.log("Uppladdning lyckades!", data);
  
    // Hämta och returnera bildens offentliga URL
    const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(fileName);
    console.log("Bildens URL:", publicUrlData.publicUrl);
  
    return publicUrlData.publicUrl;
  };
  
  

  // Spara uppdaterad text och bild till Supabase
  const saveContent = async () => {
    const currentDate = new Date().toISOString(); // Sätt aktuellt datum
    let imageUrl = null;

    // Om en bild är vald, ladda upp den
    if (selectedImage) {
      imageUrl = await uploadImage(selectedImage);
    }

    // Spara text, titel och ev. bild-URL i Supabase
    const { error } = await supabase
      .from("content")
      .insert([{ content: updatedContent, title: updatedTitle, date: currentDate, image_url: imageUrl }]);

    if (error) {
      console.error("Fel vid uppdatering av text:", error.message);
    } else {
      alert("Text och bild uppdaterad!");
      setUpdatedContent(""); // Rensa textfältet
      setUpdatedTitle(""); // Rensa titeln
      setSelectedImage(null); // Rensa vald bild
    }
  };

  return (
    <BackgroundOriginal>
      <WrapperWhite>
        <H1PurpleSecond>Lps-Tuvas sida</H1PurpleSecond>
        
        <input 
          type="text" 
          value={updatedTitle}
          placeholder="Titel" 
          onChange={(e) => setUpdatedTitle(e.target.value)} 
        />
        
        <TextWrapper>
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            rows={5}
            style={{ width: "100%" }}
            placeholder="Skriv din text här"
          />
        </TextWrapper>

        {/* Bilduppladdning */}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedImage && <p>Vald bild: {selectedImage.name}</p>}

        <EditButton onClick={saveContent}>Spara</EditButton>
      </WrapperWhite>
    </BackgroundOriginal>
  );
};
