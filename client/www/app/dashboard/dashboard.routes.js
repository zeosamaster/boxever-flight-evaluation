(function () {
  angular
      .module('dashboard')
      .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
        .state('main.dashboard', {
          abstract: true,
          views: {
            'dashboard': {
              templateUrl: 'app/dashboard/dashboard.html',
              controller: 'DashboardController as dashboardController'
            }
          }
        });
  }
})();