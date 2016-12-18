(function () {
  angular
    .module('extras')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
      .state('main.dashboard.extras', {
        url: '^/extras',
        views: {
          '@main.dashboard': {
            templateUrl: 'app/dashboard/extras/extras.html',
            controller: 'ExtrasController as extrasController'
          }
        }
      });
  }
})();