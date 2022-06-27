const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT genres.id 
                       FROM genres
                       JOIN movies_genres
                       ON genres.id = movies_genres.genres_id
                       WHERE movies_genres.movie_id = $1;`;
  pool.query(queryText, [req.params.id])
    .then((response) => {
      res.send(response.rows)
    })
    .catch((err) => {
      console.log('GET genres error', err);
      res.sendStatus(500)
    })
});

module.exports = router;