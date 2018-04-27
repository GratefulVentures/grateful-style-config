const file = require('./index');

var isNodeEnv = config => {
  let result = false;

  if (__dirname && process.env.NODE_ENV) {
    let { env } = config;
    result = env.node;
  }

  return encodeURIComponent(result);
};

module.exports = {
  isNodeEnv: isNodeEnv(file)
};
