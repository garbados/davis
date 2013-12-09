module.exports = function (app) {
  app.controller('PostCtrl', [
    '$scope', 'Posts', '$routeParams', '$location',
    function ($scope, Posts, $routeParams, $location) {
      Posts
        .get($routeParams.id)
        .success(function (post) {
          $scope.post = post;
          // TODO configure which pages you want to have comments
          if (['blog'].indexOf($scope.post.category) !== -1) {
            $scope.comments = true;
          }
        })
        .error(function (err) {
          if (err.status === 404) {
            $location.path('/404');
          } else {
            console.trace(err); 
          }
        });
    }
  ]);
};