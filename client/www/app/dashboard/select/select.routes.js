(function () {
  angular
      .module('select')
      .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
        .state('main.dashboard.select', {
          url: '^/select',
          views: {
            '@main.dashboard': {
              templateUrl: 'app/dashboard/select/select.html',
              controller: 'SelectController as selectController'
            }
          }
        });
  }
})();