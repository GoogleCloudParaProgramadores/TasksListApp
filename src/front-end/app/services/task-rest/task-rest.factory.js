'use strict';

require('fetch-polyfill');

var taskRest = function() {
    self = this;
    self.token = '';
    self.endpoint = __API_HOST__;

    self.save = function(task){
        var options = {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + self.token
            }
        };

        var promise = fetch(self.endpoint + '/tasks', options).then(function(response){
            return response.json();
        });

        return promise;
    };

    self.list = function(){
        var options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + self.token
            }
        };

        var promise = fetch(self.endpoint + '/tasks', options).then(function(response){
            return response.json();
        });

        return promise;
    };

    self.remove = function(task){
        var options = {
            method: 'DELETE',
            body: JSON.stringify(task),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + self.token
            }
        };

        var promise = fetch(self.endpoint + '/tasks' , options).then(function(response){
            return response.json();
        });

        return promise;
    };

    self.update = function(task){
        var options = {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + self.token
            }
        };

        var promise = fetch(self.endpoint + '/tasks' , options).then(function(response){
            return response.json();
        });

        return promise;
    };

    self.updateStatus = function(task){
        return self.update(task);
    };

    self.filter = function(filter) {
        var options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + self.token
            }
        };

        var filterString = "?query=" + filter.query + "&status=" + filter.status;

        var promise = fetch(self.endpoint + '/tasks' + filterString, options).then(function(response){
            return response.json();
        });

        return promise;
    };
};

var taskRestFactory = [function() {
    return new taskRest();
}];

module.exports = taskRestFactory;
