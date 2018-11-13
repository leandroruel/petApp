const routes = function($stateProvider, $urlRouterProvider) {      
  // For any unmatched url, send to /home
  $urlRouterProvider.otherwise('/home');

  var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: './templates/Home/home.html',
    controller: 'HomeController'
  }

  var detailState = {
    name: 'detail',
    url: '/detail/:id',
    templateUrl: './templates/Details/details.html',
    controller: 'DetailController'
  }

  // all routes states
  $stateProvider.state(homeState);
  $stateProvider.state(detailState);
}

export default routes