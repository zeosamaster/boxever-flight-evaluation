(function () {
  angular
      .module('search')
      .controller('SearchController', SearchController);

  SearchController.$inject =
      ['searchService', 'airportsPrepService', 'spinnerService', 'stateStoreService', '$state'];

  function SearchController(searchService, airportsPrepService, spinnerService, stateStoreService,
                            $state) {

    var vm = this;

    // interface
    vm.search = search;
    vm.getAllAirports = getAllAirports;
    vm.updateFromAirports = updateFromAirports;
    vm.updateToAirports = updateToAirports;

    // Data
    vm.data = {};
    vm.data.currentDate = new Date();
    vm.data.fromAirports = [];
    vm.data.toAirports = [];
    vm.data.searchParams = {};

    // activate
    activate();

    // listeners

    // functions
    function activate() {
      var searchParams = stateStoreService.getSearchParams();
      if (searchParams) {
        searchParams.date = new Date(searchParams.date);
        vm.data.searchParams = {};
        angular.extend(vm.data.searchParams, searchParams);
      } else {
        vm.data.searchParams = {};
        vm.data.searchParams.from = null;
        vm.data.searchParams.to = null;
        vm.data.searchParams.date = vm.data.currentDate;
        vm.data.searchParams.pax = 1;
      }
      getAllAirports();
    }

    function search() {
      if (vm.data.searchParams.from && vm.data.searchParams.to) {
        spinnerService.show();
        stateStoreService.setSearchParams(vm.data.searchParams);
        searchService.searchFlights(vm.data.searchParams).then(function (result) {
          stateStoreService.setSearchResults(result);
          $state.transitionTo('main.dashboard.select');
        }).catch(function (response) {
          //Error handling TODO
        }).finally(function () {
          spinnerService.hide();
        })
      } else {
        spinnerService.hide();
      }
    }

    function getAllAirports() {
      vm.data.allAirports = airportsPrepService;
      updateFromAirports(vm.data.searchParams.to);
      updateToAirports(vm.data.searchParams.from);
    }

    function updateFromAirports() {
      vm.data.fromAirports = getAirportsExcludingSelected(vm.data.searchParams.to);
    }

    function updateToAirports() {
      vm.data.toAirports = getAirportsExcludingSelected(vm.data.searchParams.from);
    }

    function getAirportsExcludingSelected(airportId) {
      var airports = [];
      angular.forEach(vm.data.allAirports, function (airport) {
        if (airport.id != airportId) {
          this.push(airport);
        }
      }, airports);
      return airports;
    }
  }
})();

