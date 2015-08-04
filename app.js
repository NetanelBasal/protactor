var app = angular.module('protactorTest', ['ui.router']);

app.controller('MainCtrl', ['$scope',
  function($scope) {
    this.name = 'protactor';

    this.nums = [1,2,3,4];

    this.pets = [{name: 'a', age:22}, {name: 'dada', age: 3343}];
  }
])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('state1', {
      url: "/",
      controller: "MainCtrl as main",
      templateUrl: "partials/state1.html"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
});