// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// Get our API routes
const bittrexApi = require('./server/routes/bittrex');
// Used by CryptoCompare module
global.fetch = require('node-fetch');
const compression = require("compression");

const app = express();
app.use(morgan('common'));
app.use(compression());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', bittrexApi);

function requireHTTPS(req, res, next) {
    if (req.get('x-site-deployment-id') && !req.get('x-arr-ssl')) {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use(requireHTTPS);

// Catch all other routes and return the index file
app.get('*', function (req, res) {
    res.status(404).send();
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
    console.log('API running on localhost:' + port);
});

process.on('uncaughtException', function (error) {
    console.error(error);
});
