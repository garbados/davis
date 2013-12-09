module.exports = function (app) {
  app.config([
    '$disqusProvider',
    function ($disqusProvider) {
      // TODO: Set your Disqus Shortname.
      $disqusProvider
        .setShortname('TODO');
    }
  ]);
};