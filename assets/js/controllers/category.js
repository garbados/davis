module.exports = function (app) {
  app.controller('CategoryCtrl', [
    '$scope', 'Posts', '$routeParams', '$location',
    function ($scope, Posts, $routeParams, $location) {
      $scope.title = ['@', $routeParams.category].join('');
      
      Posts
        .categories($routeParams.category)
        .success(function (res) {
          $scope.posts = res.rows.map(function (row) {
            return row.doc;
          });
        })
        .error(function (err) {
          if (err.status === 404) {
            $location.path('/404');
          } else {
            console.trace(err); 
          }
        });

      $scope.limit = 5;
      $scope.next = function () {
        $scope.limit += 5;
      };
    }
  ]);
};