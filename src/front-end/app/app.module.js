'use strict';

require('./app.style.css');

var componentsModule = require('./components/components.module');
var taskAuthService = require('./services/task-auth/task-auth.service');

require('@uirouter/angularjs');
require('angular-simple-logger');
var moment = require('moment');

angular.module('app', [componentsModule, 'ui.router', 'nemLogging']);

angular.module('app').config(['$logProvider', function($logProvider){
    $logProvider.debugEnabled(true);
}]);

angular.module('app').config(['angularAuth0Provider', function(angularAuth0Provider){
    angularAuth0Provider.init({
        clientID: 'meUq1cbVDrWq9yRz0bbUmzJvKoAB5b3d',
        domain: 'gcp2017.auth0.com',
        responseType: 'token id_token',
        audience: 'https://taskslistserviceapi',
        redirectUri: __AUTH0_REDIRECT_URI__,
        scope: 'openid'
    });
}]);

angular.module('app').config(
    ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdDateLocaleProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $mdDateLocaleProvider) {

    var tasksHomeState = {
        name: 'home',
        url: '/',
        component: 'tasksHome'
    };

    var tasksCallbackState = {
        name: 'callback',
        url: '^/callback',
        parent: 'home',
        component: 'tasksCallback'
    };

    var tasksState = {
        name: 'tasks',
        url: '^/tasks',
        parent: 'home',
        component: 'tasks'
    };

    $stateProvider.state(tasksHomeState);
    $stateProvider.state(tasksCallbackState);
    $stateProvider.state(tasksState);

    $urlRouterProvider.otherwise('/');

    $mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format('DD/MM/YYYY');
    };

    $mdDateLocaleProvider.parseDate = function(dateString) {
        var m = moment(dateString, 'DD/MM/YYYY', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };

    $locationProvider.html5Mode(true);
}]);

angular.module('app').run(['authService', 'taskRest', function(authService, taskRest){
    authService.handleAuthentication();
}]);

module.exports = angular.module('app').name;
