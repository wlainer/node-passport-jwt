var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
mongoose.connect('mongodb://127.0.0.1/testDB');

var TaskSchema = new Schema({
    name: String,
    priority: Number
});
 
TaskSchema.virtual('nameandpriority')
    .get( function () {
        return this.name + ' (' + this.priority + ')';
    });
 
TaskSchema.method('isHighPriority', function() {
    if(this.priority == 1) {
        return true;
    } else {
        return false;
    }
}); 

mongoose.model('Task', TaskSchema);

var Task = mongoose.model('Task');
 
var ListSchema = new Schema({
    name: String,
    tasks: [Task.schema]
});
 
mongoose.model('List', ListSchema);

var List = mongoose.model('List');

var sampleList = new List({name:'Sample List'});
// save tasks as plain JavaScript objects
sampleList.tasks.push({name:'task one', priority:1}, {name:'task two', priority:2});

sampleList.save(function(err, list) {
    var taskThree = new Task({name:'task three', priority:3});
    var taskFour = new Task({name:'task four', priority:4});
    // convert Task model instances to plain objects before saving
    list.tasks.push(taskThree.toObject(), taskFour.toObject());
    list.save(function(err, list) {
        if (err) {
            console.log('error saving tasks');
        } else {
            console.log('all tasks successfully saved');
            list.tasks.forEach(function(task, index, array) {
                console.log(task.name);
                console.log(task.nameandpriority);
                console.log(task._schema.methods.isHighPriority.apply(task));
            });
        }
    });
});