const express = require('express');
const router = express.Router();
const jsonHelper = require('../utils/json');

var bittrex = require('node-bittrex-api');

/* POST api listing. */
router.post('/getBalances', (req, res) => {
    if (req.body && req.body.key && req.body.secret) {
        bittrex.options({
            'apikey': req.body.key,
            'apisecret': req.body.secret,
        });
        bittrex.getbalances(function (data, err) {
            if (err) {
                res.status(500).send(jsonHelper.toCamel(err));
            } else {
                res.send(jsonHelper.toCamel(data.result));
            }
        });
    } else {
        res.status(400).send('Invalid arguments specified');
    }
});

/* POST api listing. */
router.get('/getMarkets', (req, res) => {
    bittrex.getmarketsummaries(function (data, err) {
        if (err) {
            res.status(500).send(jsonHelper.toCamel(err));
        } else {
            res.send(jsonHelper.toCamel(data.result));
        }
    });
});

module.exports = router;
