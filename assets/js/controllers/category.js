module.exports = function (app) {
  app.controller('CategoryCtrl', [
    '$scope', 'Posts', '$routeParams', '$location',
    function ($scope, Posts, $routeParams, $location) {
      $scope.title = ['@', $routeParams.category].join('');
      
      Posts
        .search
        .categories($routeParams.category)
        .success(function (res) {
          if (res.rows.length) {
            $scope.posts = res.rows
              .map(function (row) {
                return row.doc;
              }); 
          } else {
            // redirect to page if category is empty
            $location.path('/post/' + $routeParams.category);
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