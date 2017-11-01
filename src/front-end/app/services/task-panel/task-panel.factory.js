'use strict';

var taskPanelTemplate = require('raw!./task-panel.template.html');
var taskPanelController = require('./task-panel.controller');

var taskPanel = {
    template: taskPanelTemplate,
    controller: taskPanelController,
    controllerAs: '$ctrl'
}

var taskPanelFactory = [function() {
    return taskPanel;
}];

module.exports = taskPanelFactory;
