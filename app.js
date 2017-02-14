angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('page1', {
            url: '/page1/:page',
            templateUrl: 'page1.html',
            controller: 'page1Ctrl'
        })
        .state('page2', {
            url: '/page2/:page',
            templateUrl: 'page2.html',
            controller: 'page2Ctrl'
        })


})