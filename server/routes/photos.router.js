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

router.put('/:id', (req, res)=>{
    let queryText = ``;
    if(req.body.likes == 1) {
        queryText = `UPDATE photos 
                    SET likes = likes + 1, hearts = hearts + 0
                    WHERE id = $1`
    }
    else {
        queryText = `UPDATE photos 
        SET hearts = hearts + 1, likes = likes + 0
        WHERE id = $1`
    }
    console.log(queryText);
    pool.query(queryText, [req.params.id])
        .then((result)=>{
            console.log('put success resulted in this', result);
            res.send(result.rows);
        })
        .catch((err)=>{
            console.log('put error resulted in this', err);
            res.sendStatus(500);
        });
});


module.exports = router;