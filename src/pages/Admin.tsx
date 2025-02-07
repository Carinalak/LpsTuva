/*import { useState } from "react";
import { supabase } from "./supabase";

const Admin = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async () => {
        let imageUrl = null;

        // Om en bild laddas upp, spara den i Supabase Storage
        if (image) {
            const { data, error } = await supabase.storage
                .from("images")
                .upload(`public/${image.name}`, image, { upsert: true });

            if (error) {
                alert("Fel vid uppladdning av bild");
                return;
            }
            imageUrl = `${supabase.storage.from("images").getPublicUrl("public/" + image.name).data.publicUrl}`;
        }

        // Spara text + bild-URL i databasen
        const { error } = await supabase
            .from("content")
            .insert([{ title, content, image_url: imageUrl }]);

        if (error) {
            alert("Fel vid sparande av text!");
        } else {
            alert("Text sparad!");
        }
    };

    return (
        <div>
            <h2>Lägg till ny text</h2>
            <input type="text" placeholder="Titel" onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder="Text" onChange={(e) => setContent(e.target.value)} />
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
            <button onClick={handleSubmit}>Spara</button>
        </div>
    );
};

export default Admin;
*/