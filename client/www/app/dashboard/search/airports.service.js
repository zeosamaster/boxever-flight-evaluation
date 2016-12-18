(function () {
  angular
      .module('search')
      .factory('airportsService', airportsService);

  airportsService.$inject = ['$resource', '$cacheFactory'];

  function airportsService($resource, $cacheFactory) {

    var cache = $cacheFactory('airportsCache'),
        apiUrl = 'http://localhost:3000/airports';

    var resources = {
      airports: $resource(
          apiUrl, {}, {
            'queryAll': {
              method: 'GET',
              cache: cache,
              isArray: true
            }
          })
    };

    var service = {
      getAllAirports: getAllAirports
    };

    return service;

    function getAllAirports() {
      return resources.airports.queryAll().$promise;

    }

  }
})();
