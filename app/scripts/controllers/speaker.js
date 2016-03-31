'use strict';

angular.module('gr8conf2016')
.controller('SpeakerCtrl', ['$scope', '$routeParams', '$location','backendService', function ($scope,  $routeParams, $location, backendService) {
  $scope.speaker = backendService.getSpeaker($routeParams.twitterHandle);
}]);
