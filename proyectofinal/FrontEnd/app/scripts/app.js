'use strict';

/**
 * @ngdoc overview
 * @name bancosFrontApp
 * @description
 * # bancosFrontApp
 *
 * Main module of the application.
 */
angular
  .module('bancosFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      })
    


  }).config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
  })
  .factory("CuentaBancaria", CuentaBancaria);



