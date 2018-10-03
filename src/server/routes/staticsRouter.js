'use strict';

var express = require('express');
var path = require('path');

module.exports = {
  router
};

var base = '../../../';

function router() {
  const router = express.Router();
  const publicPath = path.join(__dirname, base, 'build');
  router.all('/*', (req, res, next) => {
    // logger.log('info', 'Reading the main route through http request, sending index.html');
    res.sendFile(path.join(publicPath, 'index.html'))
  })
  return router;
}
