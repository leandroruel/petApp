import app from 'src/index.js'
app
.module('petApp.controllers')
.controller('DetailController', DetailController)

DetailController.$inject = ['$scope','$stateParams'];

/**
 * Detail controller for view details
 * @param {*} $scope 
 * @param {*} $stateParams 
 */
function DetailController ($scope, $stateParams) {
var vm = this;

// get the pet info from localstorage and parse the json
var petInfo = JSON.parse(localStorage.getItem(`pet_${$stateParams.id}`));

// get the pet info
$scope.pet = petInfo;
}
