const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

router.get('/genre/:id', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT movies.*,
                      array_agg(to_json(genres)) AS genres
                      FROM movies
                      JOIN movies_genres
                        ON movies_genres.movie_id = movies.id
                      JOIN genres
                        ON movies_genres.genre_id = genres.id
                      WHERE movies.id = $1
                      GROUP BY movies.id;
                    `;
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