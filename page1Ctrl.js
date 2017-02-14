angular.module('app').controller('page1Ctrl', function($scope, svc, $stateParams){

$scope.thing = svc.getInfo($stateParams.page);

$scope.test = svc.test;
$scope.test1 = 1;



})