import angular from 'angular'

angular
.module('petApp')
.controller('FinishFormController', FinishFormController)

FinishFormController.$inject = ['$scope'];

/**
 * set a controller to success form submit
 * @param {*} $scope 
 */
function FinishFormController($scope) {

}