const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
  // Add query to get all genres

  const genreId = Number(req.params.id);
  console.log(genreId);

  console.log('router.get req.params: ', req.params);

  const queryText= `
  SELECT "genres".name AS "genre", "movies".*
  FROM "genres"
  JOIN "movies_genres"
  ON "movies_genres".genre_id = "genres".id
  JOIN "movies"
  ON "movies".id = "movies_genres".movie_id
  WHERE "movies".id = $1;
  `; // end queryText

  const queryString=`
  SELECT "movies".id, "movies".title, "movies".poster, "movies".description,
  string_agg("genres".name, ',') AS genre FROM "movies"
  JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
  JOIN "genres" ON "genres".id = "movies_genres".genre_id
  WHERE "movies".id = $1
  GROUP BY 1;
  `;

  pool
  .query(queryText, [genreId]) // end .query
  .then(result => {

    console.log(result.rows);
    res.send(result.rows);

  }) // end .then
  .catch(err => {

    console.log('Error in router.get for genres: ', err);
    res.sendStatus(500);

  }) // end .catch, end pool

}); // end router.get

module.exports = router;