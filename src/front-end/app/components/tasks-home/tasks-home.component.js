'use strict';

var tasksHomeTemplate = require('raw!./tasks-home.template.html');
var tasksHomeController = require('./tasks-home.controller');

var tasksHome = {
    template: tasksHomeTemplate,
    controller: tasksHomeController
};

module.exports = tasksHome;
