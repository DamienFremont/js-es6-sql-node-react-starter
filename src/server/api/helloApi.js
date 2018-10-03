'use strict';

const express = require('express');
const bodyParser = require('body-parser');

module.exports = {
    router
};

function router() {
    const router = express.Router();
    router.use(bodyParser.json());

    router.get('/api/hello', (req, res) => {
        const body = { 
            express: 'Hello From Express'
        };
        res.send(body);
    });

    return router;
}