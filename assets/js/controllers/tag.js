module.exports = function (app) {
  app.controller('TagCtrl', [
    '$scope', 'Posts', '$routeParams', '$location',
    function ($scope, Posts, $routeParams, $location) {
      var tags = $routeParams.tag.split(',').map(function (tag) {
        return tag.trim();
      });

      $scope.title = tags.map(function (tag) {
        return '#' + tag;
      }).join(', ');
      
      Posts
        .tags(tags)
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
    }
  ]);
};