'use strict';

var tasksHomeComponent = require('./tasks-home.component');

angular.module('tasksHomeModule', []);
angular.module('tasksHomeModule').component('tasksHome', tasksHomeComponent);

module.exports = angular.module('tasksHomeModule').name;
