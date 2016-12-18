(function () {
  angular
      .module('confirm')
      .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
        .state('main.dashboard.confirm', {
          url: '^/confirm',
          views: {
            '@main.dashboard': {
              templateUrl: 'app/dashboard/confirm/confirm.html',
              controller: 'ConfirmController as confirmController'
            }
          }
        })
        .state('main.dashboard.confirmed', {
          url: '^/confirmation',
          views: {
            '@main.dashboard': {
              templateUrl: 'app/dashboard/confirm/confirmation.html',
              controller: 'ConfirmedController as confirmController'
            }
          }
        });
    ;
  }
})();