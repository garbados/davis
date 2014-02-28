module.exports = function (app) {
  app.controller('ListCtrl', [
    '$scope', 'Posts',
    function ($scope, Posts) {
      $scope.list = function list (query) {
        var promise;

        if (query) {
          promise = Posts.search.posts(query);
        } else {
          promise = Posts.all();
        }
        
        promise.success(function (res) {
          $scope.posts = res.rows.map(function (row) {
            return row.doc;
          });
        }); 
      };
    }
  ]);
};