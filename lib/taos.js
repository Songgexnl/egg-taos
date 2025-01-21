'use strict';

const assert = require('assert');
const taos = require("@tdengine/websocket");

module.exports = app => {
  app.addSingleton('taos', createClient);
};

let count = 0;
async function createClient(config, app) {
  assert((config.host && config.port && config.passwd !== undefined && config.db !== undefined),
    `[egg-taos] 'host: ${config.host}', 'port: ${config.port}', 'passwd: ${config.passwd}', 'db: ${config.db}' are required on config`);
  if (config.host) {
    app.coreLogger.info('[egg-taos] server connecting taos://:***@%s:%s/%s',
      config.host, config.port, config.db);
  } else {
    app.coreLogger.info('[egg-taos] server connecting %s', config);
  }
  const dsn = `http://${config.host}:${config.port}`;
  let conn = null;

  try {
    let conf = new taos.WSConfig(dsn);
    conf.setUser(config.user || 'root');
    conf.setPwd(config.passwd || 'taosdata');
    conn = await taos.sqlConnect(conf);
    app.coreLogger.info('[egg-taos] Connected to  %s  successfully.', dsn);
  } catch (err) {
    app.coreLogger.info(`[egg-taos] Failed to connect to ${dsn}, ErrCode: ${err.code } `)
    return;
  }
  app.beforeStart(async () => {
    const index = count++;
    if (config.weakDependent) {
      app.coreLogger.info(`[egg-taos] instance[${index}] is weak dependent and won't block app start`);
      return;
    }
    app.coreLogger.info(`[egg-taos] instance[${index}] status OK, client ready`);
  });
  await conn.query(`use ${config.db}`)
 
  return conn;
}
