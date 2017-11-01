describe('Rest Factory', function() {
    var tRest;

    beforeEach(angular.mock.module('ComponentsModule'));

    beforeEach(inject(function(taskRest) {
        tRest = taskRest;
    }));

    it('Task Rest Exist', function() {
        expect(tRest).toBeDefined();
    });

    it('Save Task', function(done){
        var task = {id: 0, title: 'Create GCP', description: 'New GCP', date: new Date(), status: 0};

        tRest.save(task).then(function(json) {
            var task = json.data;
            expect(task.id).not.toBe(0);

            done();
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('List Tasks ', function(done){
        var task = {id: 0, title:'Course A', description:'A', date: new Date(), status: 0};

        tRest.save(task).then(function(json1){
            task = {id: 0, title:'Course B', description:'B', date: new Date(), status: 0}

            tRest.save(task).then(function(json2){
                tRest.list().then(function(json3){
                    expect(json3.data.length).toEqual(2);
                    done();
                });
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('Remove Task', function(done){
        var task = {id:0, title:'Create Course A', description:'A', date: new Date(), status: 0};

        tRest.save(task).then(function(json) {
            tRest.remove(json.data).then(function(json){
                done();
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('Update Task', function(done){
        var task = {id:0, title:'Create Course A', description:'A', date: new Date(), status: 0};
        tRest.save(task).then(function(json1){
            json1.data.title = 'Create Course GCP';

            tRest.update(json1.data).then(function(json2){
                expect(json2.data.title).toEqual('Create Course GCP');
                done();
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('Update Task Status', function(done){
        var task = {id:0, title:'Create Course A', description:'A', date: new Date(), status: 0};

        tRest.save(task).then(function(json1){
            json1.data.status = 1;

            tRest.updateStatus(json1.data).then(function(json2){
                expect(json2.data.status).toEqual(1);
                done();
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

    it('Filter Tasks', function(done){
        var task = {id: 0, title:'Course A', description:'A', date: new Date(), status: 0};

        tRest.save(task).then(function(json1){
            task = {id: 0, title:'Course B', description:'B', date: new Date(), status: 0}

            tRest.save(task).then(function(json2){
                tRest.filter('Course', -1).then(function(json3){
                    expect(json3.data.length).toEqual(2);
                    done();
                });
            });
        }).catch(function(ex) {
            console.log('parsing failed', ex);
            done();
        });
    });

});
