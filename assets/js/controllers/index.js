var plugins = [
  require('./get'),
  require('./category'),
  require('./tag'),
  require('./post'),
  require('./nav'),
  require('./sidebar')
];

module.exports = function (app) {
  plugins
    .forEach(function (plugin) {
      plugin(app);
    });
};