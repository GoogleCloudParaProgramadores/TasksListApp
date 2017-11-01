'use strict';

var tasksTemplate = require('raw!./tasks.template.html');
var tasksController = require('./tasks.controller');

var tasks = {
    template: tasksTemplate,
    controller: tasksController
};

module.exports = tasks;
