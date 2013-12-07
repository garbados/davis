var plugins = [
  require('./posts'),
  require('./markdown'),
  require('./summary'),
  require('./paginator')
];

module.exports = function (app) {
  plugins
    .forEach(function (plugin) {
      plugin(app);
    });
};