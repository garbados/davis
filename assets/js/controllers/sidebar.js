module.exports = function (app) {
  app.controller('SideBarCtrl', [
    '$scope', 'Posts',
    function ($scope, Posts) {
      function getRelated (tags, done) {
        Posts
          .tags(tags)
          .success(function (res) {
            var results = {};

            res.rows
              .map(function (row) {
                return row.doc;
              })
              .forEach(function (doc) {
                if (Object.keys(results).indexOf(doc.category) === -1) {
                  results[doc.category] = {};
                }
                results[doc.category][doc._id] = doc;
              });

            done(results);
          })
          .error(function (err) {
            console.trace(err);
            throw err;
          });
      }

      function getRecent(category) {
        Posts
          .search
          .categories(category)
          .success(function (res) {
            var posts = res.rows
              .map(function (row) {
                return row.doc;
              });
            $scope.posts = posts;
          });
      }

      $scope.$watch('post', function (post) {
        if (post) {
          getRecent(post.category);
          // TODO implement search index
          // getRelated(post.tags, function (categories) {
          //   $scope.categories = categories;
          // });
        }
      });
    }
  ]);
};