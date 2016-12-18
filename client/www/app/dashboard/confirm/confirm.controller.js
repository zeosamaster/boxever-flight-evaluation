(function () {
  angular
      .module('confirm')
      .controller('ConfirmController', ConfirmController)
      .controller('ConfirmedController', ConfirmedController);

  ConfirmController.$inject = ['stateStoreService', '$state'];
  ConfirmedController.$inject = ['stateStoreService', '$state'];

  function ConfirmController(stateStoreService, $state) {

    var vm = this;

    // interface
    vm.confirm = confirm;

    // Data
    vm.data = {};

    // activate
    activate();

    // listeners

    // functions
    function activate() {
      vm.data.flightDetails = stateStoreService.getSelectedFlight();
      vm.data.customerDetails = stateStoreService.getCustomerDetails();
      if (vm.data.flightDetails === undefined) {
        $state.transitionTo('main.dashboard.search');
      }
      if (vm.data.customerDetails === undefined) {
        $state.transitionTo('main.dashboard.details');
      }
    }

    function confirm() {
      if (vm.data.customerDetails.name && vm.data.customerDetails.email) {
        $state.transitionTo('main.dashboard.confirmed');
      }
    }
  }

  function ConfirmedController(stateStoreService, $state) {

    var vm = this;
    vm.data = {};

    activate();

    function activate() {
      vm.data.flightDetails = stateStoreService.getSelectedFlight();
      vm.data.customerDetails = stateStoreService.getCustomerDetails();

    }

  }
})();

