import angular from 'angular'

angular
.module('petApp')
.controller('FinishFormController', FinishFormController)

FinishFormController.$inject = ['$scope', '$stateParams'];

/**
 * set a controller to success form submit
 * @param {*} $scope 
 */
function FinishFormController($scope, $stateParams) {

    // set the id of pet
    $scope.petId = $stateParams.id;

    // set the name of user 
    $scope.name = $stateParams.name;

    // get the info about the pet from localstorage
    var petinfo = JSON.parse(localStorage.getItem('pets'));

    petinfo.forEach(element => {
        if(element.id == $stateParams.id) {
            $scope.pet = element;
        }
    });
}