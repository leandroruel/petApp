const routes = function ($stateProvider, $urlRouterProvider) {      
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
  }


  export default routes