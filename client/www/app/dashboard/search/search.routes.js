(function () {
  angular
      .module('search')
      .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
        .state('main.dashboard.search', {
          url: '^/search',
          views: {
            '@main.dashboard': {
              templateUrl: 'app/dashboard/search/search.html',
              controller: 'SearchController as searchController'
            }
          },
          resolve: {
            airportsPrepService: airportsPrepService
          }
        });
    airportsPrepService.$inject = ['airportsService'];
    function airportsPrepService(airportsService) {
      return airportsService.getAllAirports();
    }
  }
})();