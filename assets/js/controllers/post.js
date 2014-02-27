module.exports = function (app) {
  app.controller('PostCtrl', [
    '$scope', 'Posts', '$routeParams', '$location', 'CategoryConfig',
    function ($scope, Posts, $routeParams, $location, CategoryConfig) {
      Posts
        .get($routeParams.id)
        .success(function (post) {
          $scope.post = post;

          var options = CategoryConfig[post.category];
          $scope.comments = options.comments;
          $scope.sidebar = options.sidebar;
        })
        .error(function (err) {
          if (err.status === 404) {
            $location.path('/404').replace();
          } else {
            console.trace(err); 
          }
        });
    }
  ]);
};