'use strict';

require('angular_material_css');
require('md_expansion_panel_css');

require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');
require('angular-material-icons');
require('angular-material-expansion-panel');

var tasksHomeModule = require('./tasks-home/tasks-home.module');
var tasksLoginModule = require('./tasks-login/tasks-login.module');
var tasksCallbackModule = require('./tasks-callback/tasks-callback.module');
var tasksModule = require('./tasks/tasks.module');

angular.module('ComponentsModule', [
    tasksHomeModule,
    tasksLoginModule,
    tasksCallbackModule,
    tasksModule,
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    'material.components.expansionPanels'
]);

module.exports = angular.module('ComponentsModule').name;
