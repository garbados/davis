module.exports = function (app) {
  app.factory('CategoryConfig', function () {
    // TODO configure which categories behave how
    return {
      blog: {
        comments: true
      },
      pages: {
        sidebar: ['pricing', 'contact-us']
      }
    };
  });
};