import angular from 'angular'

angular
.module('petApp')
.controller('HomeController', HomeController)

// inject to minification safe
HomeController.$inject = ['$scope','$http'];

/**
 * Home controller for view home
 * @param {*} $scope 
 * @param {*} $http 
 */
function HomeController ($scope, $http) {

  // make ajax request to a local json file
  $http({
    method:'get',
    url: 'data.json'
  })
  .then(getPetsData)
  .catch(getPetsFailedResponse)

  // ajax success response
  function getPetsData(response, status, headers, config) {
    var pets = response.data.data;

    $scope.pets = pets;

    // set the values from pets to localstorage
    localStorage.setItem('pets', JSON.stringify(pets));
  }

  // ajax error response
  function getPetsFailedResponse(response) {
    console.log(response.statusText)
  }
}