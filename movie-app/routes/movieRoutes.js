const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  const movieModel = require('../models/movie')(pool);

  // Get all movies
  router.get('/', async (req, res) => {
    const movies = await movieModel.getAllMovies();
    res.render('index', { title: 'Movies', movies });
  });

  // Create a new movie
  router.post('/add', async (req, res) => {
    const { title, director } = req.body;
    await movieModel.createMovie(title, director);
    res.redirect('/movies');
  });

  return router;
};

