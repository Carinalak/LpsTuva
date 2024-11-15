import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Laddar in .env-filens variabler

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware för att hantera JSON-data och CORS
app.use(express.json());
app.use(cors());

// Anslut till MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Ansluten till MongoDB Atlas"))
  .catch((error) => console.error("Kunde inte ansluta till MongoDB", error));

// Definiera ett schema och modell för bilder
const imageSchema = new mongoose.Schema({
  title: String,
  url: String, // URL till bilden som lagras i databasen
});

const MyGallery = mongoose.model("MyGallery", imageSchema);

// GET-route för att hämta alla bilder
app.get("/api/images", async (req, res) => {
  console.log("GET request received at /api/images"); // Lägg till denna rad för debugging
  try {
    const images = await MyGallery.find();
    res.status(200).json(images);
  } catch (error) {
    console.error("Fel vid hämtning av bilder:", error);
    res.status(500).json({ error: "Något gick fel vid hämtning av bilder." });
  }
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});
