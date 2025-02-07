import { useState } from "react";
import { H1PurpleSecond } from "../components/styled/Fonts";
import { BackgroundOriginal, TextWrapper, WrapperWhite } from "../components/styled/Wrappers";
import { styled } from "styled-components";
import { supabase } from "../components/supabase";

// Textuppdateringen fungerar i denna komponent

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
  const [updatedTitle, setUpdatedTitle] = useState("");

  // Spara uppdaterad text till Supabase
  const saveContent = async () => {
    const currentDate = new Date().toISOString();

    // Spara texten i Supabase (lägg till datum och titel)
    const { error } = await supabase
      .from("content")
      .insert([{ content: updatedContent, title: updatedTitle, date: currentDate }]);

    if (error) {
      console.error("Fel vid uppdatering av text:", error.message);
    } else {
      alert("Text uppdaterad!");
      setUpdatedContent("");
      setUpdatedTitle("");
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

        <EditButton onClick={saveContent}>Spara</EditButton>
      </WrapperWhite>
    </BackgroundOriginal>
  );
};
