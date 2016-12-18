(function () {
  angular
      .module('main')
      .config(config);

  config.$inject = ['$urlRouterProvider', '$mdThemingProvider'];

  function config($urlRouterProvider, $mdThemingProvider) {
    // default state
    $urlRouterProvider.otherwise('/search');

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('grey');
  }
})();