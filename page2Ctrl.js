angular.module('app').controller('page2Ctrl', function($scope, svc, $stateParams){

$scope.thing = svc.getInfo($stateParams.page);

$scope.test = svc.test;
$scope.test2 = 2;



})