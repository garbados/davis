module.exports = function (app) {
  app.controller('GetCtrl', [
    '$scope', 'Posts',
    function ($scope, Posts) {
      // TODO allow a single GetCtrl to handle multiple posts
      $scope.get = function get (id) {
        Posts
          .get(id)
          .success(function (post) {
            $scope.post = post;
          });
      };
    }
  ]);
};