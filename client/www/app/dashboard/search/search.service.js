(function () {
  angular
      .module('search')
      .factory('searchService', searchService);

  searchService.$inject = ['$resource'];

  function searchService($resource) {

    var apiUrl = 'http://localhost:3000/search';

    var resources = {
      ancients: $resource(
          apiUrl, {}, {
            'queryAll': {
              method: 'GET',
              isArray: true
            }
          })
    };

    var service = {
      searchFlights: searchFlights
    };

    return service;

    /**
     *
     * @param {Object} searchParams
     * @returns {$promise|*}
     */
    function searchFlights(searchParams) {
      return resources.ancients.query(searchParams).$promise
    }

  }
})();
