'use strict';

const taos = require('./lib/taos');

module.exports = agent => {
    if (agent.config.taos) taos(agent);
};
