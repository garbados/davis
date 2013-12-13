module.exports = function (app) {
  app.factory('Posts', [
    '$http', 'url_root',
    function ($http, url_root) {
      function get (id) {
        var url = [url_root, '_rewrite', 'api', id].join('/');
        return $http({
          url: url,
          method: 'GET'
        });
      }

      var count = {
        categories: function () {
          var url = [url_root, '_view', 'categories'].join('/');
          return $http({
            url: url,
            method: 'GET',
            params: {
              group: true
            }
          });
        },
        tags: function () {
          var url = [url_root, '_view', 'tags'].join('/');
          return $http({
            url: url,
            method: 'GET',
            params: {
              group: true
            }
          });
        }
      };

      var search = {
        posts: function (text) {
          // TODO use a _search index
          throw "Not Implemented";
        },
        categories: function (category) {
          var url = [url_root, '_view', 'categories'].join('/');
          return $http({
            url: url,
            method: 'GET',
            params: {
              key: JSON.stringify(category),
              reduce: false,
              include_docs: true
            }
          });
        },
        tags: function (tags) {
          // TODO use a _search index
          throw "Not Implemented";
        }
      };

      return {
        get: get,
        count: count,
        search: search
      };
    }
  ]);
};