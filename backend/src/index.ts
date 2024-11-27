import express from 'express';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Skapa en pool med anslutningssträngen från .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Viktigt om du använder Render
  },
});

export default pool;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// En testendpoint för PostgreSQL
app.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    // Kontrollera om err är ett Error-objekt
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
