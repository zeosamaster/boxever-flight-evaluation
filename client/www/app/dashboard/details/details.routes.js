(function () {
  angular
      .module('details')
      .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
        .state('main.dashboard.details', {
          url: '^/details',
          views: {
            '@main.dashboard': {
              templateUrl: 'app/dashboard/details/details.html',
              controller: 'DetailsController as detailsController'
            }
          }
        });
  }
})();