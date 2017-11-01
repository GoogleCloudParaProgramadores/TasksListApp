'use strict';

var taskDialogTemplate = require('raw!./task-dialog.template.html');
var taskDialogController = require('./task-dialog.controller');

var taskDialog = {
    template: taskDialogTemplate,
    controller: taskDialogController,
    targetEvent: null,
    locals: null
}

var taskDialogFactory = [function() {
    return taskDialog;
}];

module.exports = taskDialogFactory;
