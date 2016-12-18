(function () {
  angular
      .module('select')
      .controller('SelectController', SelectController);

  SelectController.$inject = ['spinnerService', 'stateStoreService', '$state', '$scope'];

  function SelectController(spinnerService, stateStoreService, $state, $scope) {

    var vm = this;

    // interface
    vm.next = next;
    vm.saveState = saveState;

    // Data
    vm.data = {};

    activate();

    // listeners

    // functions
    function activate() {
      vm.data.searchResults = stateStoreService.getSearchResults();
      vm.data.selectedFlight = stateStoreService.getSelectedFlight();
      if (vm.data.searchResults === undefined) {
        $state.transitionTo('main.dashboard.search');
      }
    }

    function next() {
      if (vm.data.selectedFlight) {
        $state.transitionTo('main.dashboard.details');
      }
    }

    function saveState() {
      stateStoreService.setSelectedFlight(vm.data.selectedFlight);
    }
  }
})();

