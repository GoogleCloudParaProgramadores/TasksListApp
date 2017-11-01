'use strict';

var dialogController = ['$scope', '$mdDialog', 'task', function($scope, $mdDialog, task) {
    $scope.task = task;

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function() {
        $mdDialog.hide($scope.task);
    };
}];

module.exports = dialogController;
