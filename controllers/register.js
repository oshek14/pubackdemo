const express = require('express');
const router = express.Router();

const dbConnection = require('../dbConnection');

router.get('/register', function (req, res) {
    const connection = dbConnection();
    connection.query('SELECT name FROM news', (err, result) => {
        res.send(result);
    });
})

module.exports = router;