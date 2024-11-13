import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Laddar in .env-filens variabler

const app = express();
const PORT = process.env.PORT || 5000;

// Anslut till MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Ansluten till MongoDB Atlas"))
.catch((error) => console.error("Kunde inte ansluta till MongoDB", error));

// Middleware för att hantera JSON-data
app.use(express.json());

// Exempel på en enkel route
app.get("/", (req, res) => {
  res.send("API är igång!");
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});

// This file is from Chat GPT