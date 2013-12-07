module.exports = function (app) {
  app.factory('Posts', [
    '$http',
    function ($http) {
      function _call (url, key) {
        if (key) {
          return $http({
            url: url,
            method: 'GET',
            params: {
              key: key,
              reduce: false
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
        return _call(url, tag);
      }

      function get (id) {
        var url = ['api', id].join('/');
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