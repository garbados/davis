var plugins = [
  require('./get'),
  require('./category'),
  require('./tag'),
  require('./post'),
  require('./nav'),
  require('./sidebar'),
  require('./search'),
  require('./list')
];

module.exports = function (app) {
  plugins
    .forEach(function (plugin) {
      plugin(app);
    });
};