'use strict';

var tasksController = ['$mdExpansionPanelGroup', '$mdDialog', 'taskPanel', 'taskDialog', 'taskRest', 'authService',
    function($mdExpansionPanelGroup, $mdDialog, taskPanel, taskDialog, taskRest, authService){

    var self = this;

    taskRest.token = authService.getToken();

    self.filter = {
        query: '',
        status: -1
    };

    self.groupInstance = null;

    $mdExpansionPanelGroup().waitFor('expansionPanelGroup').then(function(instance) {
        self.groupInstance = instance;

        instance.register('templated', taskPanel);

        taskRest.list().then(function(response){
            response.forEach(function(task){
                self.groupInstance.add('templated', {task:task});
            });

        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    });

    self.addTask = function(ev){
        taskDialog.targetEvent = ev;
        taskDialog.locals = {task:{id:0, title:'', status:0, description:'', date:new Date()}};

        $mdDialog.show(taskDialog).then(function(newTask){
            taskRest.save(newTask).then(function(response){
                self.groupInstance.add('templated', {task:response}).then(function(panelInstance){
                    panelInstance.expand();
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }, function(){
        });
    };

    self.filterTasks = function(){
        taskRest.filter(self.filter).then(function(response){
            self.groupInstance.removeAll();
            response.forEach(function(task){
                self.groupInstance.add('templated', {task:task});
            });

        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    };
}];

module.exports = tasksController;
