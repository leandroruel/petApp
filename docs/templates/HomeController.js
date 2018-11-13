import {app} from 'src/index.js'

app.module('petApp')
.controller('HomeController', HomeController)

// inject to minification safe
HomeController.$inject = ['$scope','$http'];

/**
 * Home controller for view home
 * @param {*} $scope 
 * @param {*} $http 
 */
function HomeController ($scope, $http) {
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

    pets.forEach(element => {
      // set the values on localstorage
      localStorage.setItem(`pet_${element.id}`, JSON.stringify(element));
    });
  }

  // ajax error response
  function getPetsFailedResponse(response) {
    console.log(response.statusText)
  }
}