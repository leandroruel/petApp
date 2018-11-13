import angular from 'angular'

angular
.module('petApp')
.controller('SubscribeController', SubscribeController)

SubscribeController.$inject = ['$scope', '$document', '$stateParams', '$state'];

/**
 * set the controller for the subscribe form
 * 
 * @param {*} $scope 
 */
function SubscribeController ($scope, $document, $stateParams, $state) {
    // get the form button
    const BtnSubscribe = angular.element( document.querySelector("#subscribe") );

    // get pet id from url
    $scope.petId = $stateParams.id;
    // get data from ng-model
    $scope.user = {
        name: '',
        address: '',
        address2: '',
        reason: ''
    };

    BtnSubscribe.on('click', () => {        
        console.log($scope.user)
    })

    $scope.submitForm = function () {
        $state.go('/subscribe/finish', { id: $stateParams.id, name: $scope.user.name})
    }
}