const environment = (process.env.NODE_ENV || 'development').trim();
const dev = require('./config/webpack.dev.config.js');
const prod = require('./config/webpack.prod.config.js');

if (environment === 'development') {
  module.exports = dev;
} else {
  module.exports = prod;
}
