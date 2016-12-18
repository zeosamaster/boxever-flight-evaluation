(function () {

  angular.module('main', ['ngMaterial', 'ngResource', 'ui.router', 'dashboard', 'search', 'select',
    'details', 'extras', 'confirm', 'angularMoment', 'ngMessages'])
    .config(config);

  function config($mdDateLocaleProvider, moment) {
    $mdDateLocaleProvider.formatDate = function (date) {
      return moment(date).format('DD-MM-YYYY');
    };
  }

})();
