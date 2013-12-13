var plugins = [
  require('./posts'),
  require('./markdown'),
  require('./summary'),
  require('./link')
];

module.exports = function (app) {
  plugins
    .forEach(function (plugin) {
      plugin(app);
    });
};