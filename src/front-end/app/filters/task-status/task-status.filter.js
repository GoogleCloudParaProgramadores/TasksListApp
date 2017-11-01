'use strict';

var taskStatus = function(status) {
    if(status === 1){
        return 'Concluído';
    }

    if(status === 0){
        return 'Pendente';
    }
    return "Indefinido";
};

var taskStatusFilter = [function() {
    return taskStatus;
}];

module.exports = taskStatusFilter;
