const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText= `SELECT`;

  pool
  .query()
  .then(result => {

    console.log(result.rows);
    res.send(result.rows);
    res.sendStatus(500);

  })
  .catch(err => {

    console.log('oops, serverside error for getting genres: ', err);
    res.sendStatus(500);

  })
});

module.exports = router;