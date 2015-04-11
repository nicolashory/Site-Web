'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProjetsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/MyJson.json').
      success(function(data, status, headers, config) {
        $scope.projets = data.projets;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });


