module.exports = (pool) => {
  const getAllMovies = async () => {
    const result = await pool.query('SELECT * FROM movies');
    return result.rows;
  };

  const createMovie = async (title, director) => {
    const result = await pool.query('INSERT INTO movies (title, director) VALUES ($1, $2) RETURNING *', [title, director]);
    return result.rows[0];
  };

  return { getAllMovies, createMovie };
};

