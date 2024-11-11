CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL
);

INSERT INTO movies (title, director) VALUES
  ('The Matrix', 'Wachowski Sisters'),
  ('Inception', 'Christopher Nolan'),
  ('Interstellar', 'Christopher Nolan');

