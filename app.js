'use strict';

const taos = require('./lib/taos');

module.exports = app => {
  if (app.config.taos) taos(app);
};
