'use strict';

var tasksCallbackTemplate = require('raw!./tasks-callback.template.html');
var tasksCallbackController = require('./tasks-callback.controller');

var tasksCallback = {
    template: tasksCallbackTemplate,
    controller: tasksCallbackController
};

module.exports = tasksCallback;
