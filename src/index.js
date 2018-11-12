import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'

angular.module('petApp', [uirouter])
// Routes
.config(function($stateProvider, $urlRouterProvider) {      
    // For any unmatched url, send to /
    $urlRouterProvider.otherwise('/home')

    var homeState = {
      name: 'home',
      url: '/home',
      templateUrl: './templates/home.html',
      controller: 'HomeController'
    }

    var detailState = {
      name: 'detail',
      url: '/detail/:id',
      templateUrl: './templates/details.html',
      controller: 'DetailController'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(detailState);
  })
  .controller('HomeController', HomeController)
  .controller('DetailController', DetailController)

  // inject those directives
  HomeController.$inject = ['$scope', '$http'];

  /**
   * Home controller for view home
   * @param {*} $scope 
   * @param {*} $http 
   */
  function HomeController ($scope, $http) {
    $http({
      method:'get',
      url: 'data.json'
    }).then(function success(response) {
      const pets = response.data.data;
      $scope.pets = pets;

      pets.forEach(element => {
        // set the values on localstorage
        localStorage.setItem(`pet_${element.id}`, JSON.stringify(element));
      });
    },
    function error(response) {
      console.log(response.statusText)
    })
  }

  DetailController.$inject = ['$scope', '$stateParams']
  /**
   * Detail controller for view details
   * @param {*} $scope 
   * @param {*} $stateParams 
   */
  function DetailController ($scope, $stateParams) {
    // get the pet info from localstorage and parse the json
    const petInfo = JSON.parse(localStorage.getItem(`pet_${$stateParams.id}`));
    // get the id from route parameter
    $scope.id = $stateParams.id;
    $scope.pet = petInfo;
  }