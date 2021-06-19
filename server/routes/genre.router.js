const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
  // Add query to get all genres

  // const genreId = req.params.id;

  console.log('router.get req.params: ', req.params);

  // const queryText= `
  // SELECT "genres".name 
  // FROM "genres" 
  // JOIN "movies_genres"
  // ON "movies_genres".genre_id = "genres".id 
  // JOIN "movies" 
  // ON "movies".id = "movies_genres".movie_id 
  // WHERE "movie".id = "movies_genres".movie_id 
  // GROUP BY "genre".id;
  // `; // end queryText

  // pool
  // .query(queryText, genreId) // end .query
  // .then(result => {

  //   console.log(result.rows);
  //   res.send(result.rows);
  //   res.sendStatus(500);

  // }) // end .then
  // .catch(err => {

  //   console.log('oops, serverside error for getting genres: ', err);
  //   res.sendStatus(500);

  // }) // end .catch, end pool

}); // end router.get

module.exports = router;