const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res)=>{
    let queryText = `SELECT * FROM photos ORDER BY date_taken DESC`;
    pool.query(queryText)
        .then((result)=>{
            console.log('got this result:', result);
            res.send(result.rows);
        })
        .catch((err)=>{
            console.log('this is the error', err);
            res.sendStatus(500);
        });
});

module.exports = router;