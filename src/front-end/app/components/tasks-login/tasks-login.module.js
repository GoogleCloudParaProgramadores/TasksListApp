'use strict';

require('auth0-js');
require('angular-auth0');

var tasksLoginComponent = require('./tasks-login.component');
var taskAuthService = require('../../services/task-auth/task-auth.service');

angular.module('tasksLoginModule', ['auth0.auth0']);
angular.module('tasksLoginModule').component('tasksLogin', tasksLoginComponent);
angular.module('tasksLoginModule').service('authService', taskAuthService);

module.exports = angular.module('tasksLoginModule').name;
