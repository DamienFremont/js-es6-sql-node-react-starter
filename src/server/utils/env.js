'use strict';

var dotenv = require('dotenv');

module.exports = {
    initOrOverride
};

function initOrOverride() {
    if (process.env.NODE_ENV !== 'production') {
        dotenv.config();
        console.log('warn: Loaded Env file over Node process.env');
    }
}
