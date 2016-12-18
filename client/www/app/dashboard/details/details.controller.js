(function () {
  angular
      .module('details')
      .controller('DetailsController', DetailsController);

  DetailsController.$inject = ['stateStoreService', '$state'];

  function DetailsController(stateStoreService, $state) {

    var vm = this;

    // interface
    vm.next = next;
    vm.saveState = saveState;

    // Data
    vm.data = {};
    vm.data.customerDetails = {};

    // activate
    activate();

    // listeners

    // functions
    function activate() {
      vm.data.customerDetails = stateStoreService.getCustomerDetails();
      if (stateStoreService.getSelectedFlight() === undefined) {
        $state.transitionTo('main.dashboard.search');
      }
    }

    function next() {
      if (vm.data.customerDetails.name && vm.data.customerDetails.email) {
        $state.transitionTo('main.dashboard.extras');
      }
    }

    function saveState() {
      stateStoreService.setCustomerDetails(vm.data.customerDetails);
    }
  }
})();

