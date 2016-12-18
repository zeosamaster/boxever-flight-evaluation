(function () {
  angular
      .module('main')
      .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider
        .state('main', {
          abstract: true,
          views: {
            'main': {
              templateUrl: 'app/main.html'
            }
          }
        });
  }
})();