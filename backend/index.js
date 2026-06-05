
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'factsdb',
  password: 'password',
  port: 5432,
});

// Инициализация на таблица и данни
pool.query(`
  CREATE TABLE IF NOT EXISTS facts (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL
  );
`).then(() => {
  pool.query(`INSERT INTO facts (text) VALUES 
    ('Обичам да уча нови технологии.'),
    ('Имам опит в Docker и контейнеризация.'),
    ('Мечтая да стана full-stack разработчик.')
  ON CONFLICT DO NOTHING;`);
});

app.get('/facts', async (req, res) => {
  const result = await pool.query('SELECT * FROM facts');
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});
