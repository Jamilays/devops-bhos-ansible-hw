const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/movies', movieRoutes(pool));

// Home route, passing movies to the EJS template
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies');
    const movies = result.rows;  // Fetch all movies from DB
    res.render('index', { title: 'Movies Management', movies });  // Pass movies to view
  } catch (err) {
    console.error('Error fetching movies:', err);
    res.status(500).send('Error fetching movies');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
