import angular from 'angular'

angular
.module('petApp')
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

var pet = JSON.parse(localStorage.getItem('pets'));

pet.forEach(element => {
    if (element.id == $stateParams.id) {
        $scope.pet = element;
    }
});

}
