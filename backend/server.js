import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';

dotenv.config(); // Laddar in .env-filens variabler

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware för att hantera JSON-data och CORS
app.use(express.json());
app.use(cors());

// Anslut till MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Ansluten till MongoDB Atlas"))
.catch((error) => console.error("Kunde inte ansluta till MongoDB", error));

// Definiera ett schema och modell för kontaktmeddelanden
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const ContactMessage = mongoose.model("ContactMessage", contactSchema);

// Nodemailer-konfiguration
const transporter = nodemailer.createTransport({
  service: "gmail", // Ändra till den e-posttjänst du använder
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Funktion för att skicka e-post
const sendEmail = async (contactData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL, // E-postadress som ska ta emot meddelandet
    subject: "Nytt meddelande från kontaktformulär",
    text: `Namn: ${contactData.name}\nE-post: ${contactData.email}\nMeddelande: ${contactData.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("E-post skickat!");
  } catch (error) {
    console.error("Fel vid e-postskickning:", error);
  }
};

// POST-route för att ta emot formulärdata
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Spara meddelandet i MongoDB
  const newMessage = new ContactMessage({ name, email, message });
  try {
    await newMessage.save();
    console.log("Meddelande sparat i databasen.");

    // Skicka e-post
    await sendEmail({ name, email, message });

    res.status(200).send({ success: true, message: "Meddelande skickat!" });
  } catch (error) {
    console.error("Fel vid hantering av formulär:", error);
    res.status(500).send({ success: false, message: "Något gick fel. Försök igen senare." });
  }
});

// Exempel på en enkel route
app.get("/", (req, res) => {
  res.send("API är igång!");
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`);
});
