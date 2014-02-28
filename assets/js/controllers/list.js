module.exports = function (app) {
  app.controller('ListCtrl', [
    '$scope', 'Posts',
    function ($scope, Posts) {
      $scope.list = function list (query) {
        Posts
          .search
          .posts(query)
          .success(function (res) {
            $scope.posts = res.rows.map(function (row) {
              return row.doc;
            });
          });
      };
    }
  ]);
};