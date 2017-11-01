'use strict';

var taskPanelController = ['$mdDialog', 'taskDialog', 'taskRest', 'task',
    function($mdDialog, taskDialog, taskRest, task){
    var $ctrl = this;
    $ctrl.task = task;

    $ctrl.editTask = function(event){
        taskDialog.targetEvent = event;
        taskDialog.locals = {task: JSON.parse(JSON.stringify($ctrl.task))};

        $mdDialog.show(taskDialog).then(function(updatedTask){
            taskRest.update(updatedTask).then(function(response){
                $ctrl.task = response;

            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }, function(){
            console.log('canceled');
        });
    };

    $ctrl.removeTask = function(panel){
        taskRest.remove($ctrl.task).then(function(response){
            panel.remove();
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    };

    $ctrl.updateStatus = function(){
        taskRest.updateStatus($ctrl.task);
    };
}];

module.exports = taskPanelController;