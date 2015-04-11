'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/MyJson.json').
      success(function(data, status, headers, config) {
        $scope.description = data.description;
        $scope.accueil = data.accueil;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });
$(document).ready(function() {
  $("#cv_click").click(function() {
    $("#cv_click").addClass("active");
    $("#home_click").removeClass("active");
    $("#contact_click").removeClass("active");
  });

  $("#contact_click").click(function() {
    $("#contact_click").addClass("active");
    $("#home_click").removeClass("active");
    $("#cv_click").removeClass("active");
  });

  $("#home_click").click(function() {
    $("#home_click").addClass("active");
    $("#cv_click").removeClass("active");
    $("#contact_click").removeClass("active");
  });
});

