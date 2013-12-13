module.exports = function (app) {
  app.factory('Posts', [
    '$http', 'url_root',
    function ($http, url_root) {
      function _call (url, key) {
        url = [url_root, url].join('/');
        if (key) {
          if (typeof(key) === 'object') {
            return $http({
              url: url,
              method: 'GET',
              params: {
                keys: key,
                reduce: false,
                include_docs: true
              }
            });
          } else {
            return $http({
              url: url,
              method: 'GET',
              params: {
                key: JSON.stringify(key),
                reduce: false,
                include_docs: true
              }
            });
          }
        } else if (url.indexOf('_rewrite') === -1) {
          return $http({
            url: url,
            method: 'GET',
            params: {
              group: true
            }
          });
        } else {
          return $http({
            url: url,
            method: 'GET'
          });
        }
      }

      function tags (tag) {
        var url = '_view/tags';
        return _call(url, tag);
      }

      function categories (category) {
        var url = '_view/categories';
        return _call(url, category);
      }

      function get (id) {
        var url = ['_rewrite', 'api', id].join('/');
        return _call(url);
      }

      return {
        tags: tags,
        categories: categories,
        get: get
      };
    }
  ]);
};