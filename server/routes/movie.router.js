const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  
  pool
    .query(query) // end .query
    .then(result => {
      res.send(result.rows);
    }) // end .then
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    }) // end .catch, end pool

}); // end router.get

router.post('/', (req, res) => {

  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";
  `;

  // FIRST QUERY MAKES MOVIE
  pool
    .query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description]) // end .query
    .then(result => {

      console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

      const createdMovieId = result.rows[0].id;

      // Now handle the genre reference
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `;
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE

      pool
        .query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]) // end sub.query
        .then(result => {
          //Now that both are done, send back success!
          res.sendStatus(201);
        }) // end sub.then
        .catch(err => {
          // catch for second query
          console.log(err);
          res.sendStatus(500)
        }) // end sub.catch, end subpool

      // Catch for first query
    }) // end .then
    .catch(err => {
      console.log(err);
      res.sendStatus(500)
    }) // end .catch, end pool
}) // end router.post

module.exports = router;