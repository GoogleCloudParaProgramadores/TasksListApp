'use strict';

var tasksCallbackComponent = require('./tasks-callback.component');

angular.module('tasksCallbackModule', []);
angular.module('tasksCallbackModule').component('tasksCallback', tasksCallbackComponent);

module.exports = angular.module('tasksCallbackModule').name;
