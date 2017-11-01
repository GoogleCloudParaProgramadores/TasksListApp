'use strict';

var tasksLoginTemplate = require('raw!./tasks-login.template.html');
var tasksLoginController = require('./tasks-login.controller');

var tasksLogin = {
    template: tasksLoginTemplate,
    controller: tasksLoginController
};

module.exports = tasksLogin;
