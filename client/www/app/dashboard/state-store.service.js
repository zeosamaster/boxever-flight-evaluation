(function () {
  angular
      .module('dashboard')
      .factory('stateStoreService', stateStoreService);

  stateStoreService.$inject = [];

  function stateStoreService() {

    var searchParams = undefined;
    var searchResults = undefined;
    var customerDetails = {};
    var selectedFlight = undefined;

    var service = {
      getSearchParams: getSearchParams,
      setSearchParams: setSearchParams,
      getSearchResults: getSearchResults,
      setSearchResults: setSearchResults,
      getCustomerDetails: getCustomerDetails,
      setCustomerDetails: setCustomerDetails,
      setSelectedFlight: setSelectedFlight,
      getSelectedFlight: getSelectedFlight,
      clearState: clearState
    };

    return service;

    function getSearchParams() {
      return retrieveFromStorage('searchParams');
    }

    function setSearchParams(searchParameters) {
      searchParams = searchParameters;
      addToStorage('searchParams', searchParameters);
    }

    function getSearchResults() {
      return searchResults || retrieveFromStorage('searchResults');
    }

    function setSearchResults(results) {
      selectedFlight = undefined; //TODO

      addToStorage('searchResults', results);
      searchResults = results;
    }

    function getCustomerDetails() {
      return customerDetails || retrieveFromStorage('customerDetails');
    }

    function setCustomerDetails(details) {
      customerDetails = details;
      addToStorage('customerDetails', details);
    }

    function getSelectedFlight() {
      return selectedFlight || retrieveFromStorage('selectedFlight');
    }

    function setSelectedFlight(flightObject) {
      selectedFlight = flightObject;
      addToStorage('selectedFlight', flightObject);
    }

    function clearState() {

      storage.removeItem('searchParams');
      storage.removeItem('searchResults');
      storage.removeItem('selectedFlight');
      storage.removeItem('customerDetails');
    }

    function retrieveFromStorage(fieldName) {

      return window.localStorage.getItem(fieldName);
    }

    function addToStorage(fieldName, value) {

      return window.localStorage.setItem(fieldName, value);
    }
  }
})();
