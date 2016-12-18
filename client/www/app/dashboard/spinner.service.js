(function () {
  angular
      .module('dashboard')
      .factory('spinnerService', spinnerService);

  spinnerService.$inject = ['$mdDialog'];

  function spinnerService($mdDialog) {

    var service = {
      show: show,
      hide: hide
    };

    return service;

    function show() {
      $mdDialog.show({
                       template: '<img src="../assets/img/flight.gif" alt=""/>',
                       clickOutsideToClose: false
                     })

    }

    function hide() {
      return $mdDialog.hide();
    }
  }
})();
