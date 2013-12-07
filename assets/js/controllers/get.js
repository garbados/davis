module.exports = function (app) {
  app.controller('GetCtrl', [
    '$scope', 'Posts',
    function ($scope, Posts) {
      $scope.get = function (id) {
        Posts.get(id).success(function (post) {
          $scope.post = post;
        });
      };
    }
  ]);
};