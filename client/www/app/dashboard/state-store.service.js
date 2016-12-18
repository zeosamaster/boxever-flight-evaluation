(function () {
  angular
      .module('dashboard')
      .factory('stateStoreService', stateStoreService);

  stateStoreService.$inject = [];

  function stateStoreService() {

    var searchParams = undefined;
    var searchResults = undefined;
    var customerDetails = undefined;
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
      if (results && selectedFlight && (selectedFlight.from !== results.from || selectedFlight.to !== results.to)) {
        selectedFlight = undefined; //TODO
      }
      if (!selectedFlight) {
        removeFromStorage('selectedFlight');
      }

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
      removeFromStorage('searchParams');
      removeFromStorage('searchResults');
      removeFromStorage('selectedFlight');
      removeFromStorage('customerDetails');
    }

    function retrieveFromStorage(fieldName) {
      var item = window.localStorage.getItem(fieldName);
      try {
        return JSON.parse(item);
      } catch (e) {
        return item;
      }
    }

    function addToStorage(fieldName, value) {
      return window.localStorage.setItem(fieldName, (typeof value === 'object' ? JSON.stringify(value) : value));
    }

    function removeFromStorage(fieldName) {
      return window.localStorage.removeItem(fieldName);
    }
  }
})();
