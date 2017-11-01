'use strict';

var tasksComponent = require('./tasks.component');
var taskPanelFactory = require('../../services/task-panel/task-panel.factory');
var taskDialogFactory = require('../../services/task-dialog/task-dialog.factory');
var taskRestFactory = require('../../services/task-rest/task-rest.factory');
var taskStatusFilter = require('../../filters/task-status/task-status.filter');

angular.module('tasksModule', []);
angular.module('tasksModule').component('tasks', tasksComponent);
angular.module('tasksModule').factory('taskPanel', taskPanelFactory);
angular.module('tasksModule').factory('taskDialog', taskDialogFactory);
angular.module('tasksModule').factory('taskRest', taskRestFactory);
angular.module('tasksModule').filter('taskStatus', taskStatusFilter);

module.exports = angular.module('tasksModule').name;
