(function () {
  angular
    .module('extras')
    .controller('ExtrasController', ExtrasController);

  ExtrasController.$inject = ['spinnerService', 'stateStoreService', '$state', '$scope'];

  function ExtrasController(spinnerService, stateStoreService, $state, $scope) {

    var vm = this;

    // interface
    vm.next = next;
    vm.saveState = saveState;

    // Data
    vm.data = {};
    vm.data.extras = [];
    vm.data.searchParams = {};

    activate();

    // listeners

    // functions
    function activate() {
      vm.data.extras = stateStoreService.getExtras();
      vm.data.searchParams = stateStoreService.getSearchParams();
      if (!vm.data.searchParams) {
        $state.transitionTo('main.dashboard.search');
      } else if (!vm.data.extras || vm.data.extras.length !== vm.data.searchParams.pax) {
        vm.data.extras = Array.apply(null, new Array(vm.data.searchParams.pax)).map(function (el, i) {
          return { bags: 0, priority: false, paxNum: i + 1 };
        });
      }
    }

    function next() {
      stateStoreService.setExtras(vm.data.extras);
      if (vm.data.extras.length === vm.data.searchParams.pax) {
        $state.transitionTo('main.dashboard.confirm');
      }
    }

    function saveState() {
      stateStoreService.setExtras(vm.data.extras);
    }
  }
})();

