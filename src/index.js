import angular from 'angular'
import uirouter from '@uirouter/angularjs'
import 'bootstrap/dist/css/bootstrap.min.css'
require('src/scss/style.scss');

var app = angular.module('petApp', [uirouter]);

export default app