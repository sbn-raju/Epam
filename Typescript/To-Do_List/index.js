// Array to store tasks
var tasks = [];
// Function to add a new task
function addTask(task) {
    tasks.push(task);
    console.log("Task \"".concat(task.title, "\" added."));
}
// Function to mark a task as completed
function markTaskCompleted(id) {
    var task = tasks.find(function (t) { return t.id === id; });
    if (task) {
        task.status = "completed";
        console.log("Task \"".concat(task.title, "\" marked as completed."));
    }
    else {
        console.log("Task with ID ".concat(id, " not found."));
    }
}
// Function to delete a task by ID
function deleteTask(id) {
    var index = tasks.findIndex(function (t) { return t.id === id; });
    if (index !== -1) {
        var removed = tasks.splice(index, 1)[0];
        console.log("Task \"".concat(removed.title, "\" deleted."));
    }
    else {
        console.log("Task with ID ".concat(id, " not found."));
    }
}
// Function to list all tasks
function listTasks() {
    console.log("All Tasks:");
    if (tasks.length === 0) {
        console.log("No tasks found.");
    }
    else {
        tasks.forEach(function (task) {
            console.log("ID: ".concat(task.id, ", Title: ").concat(task.title, ", Status: ").concat(task.status));
        });
    }
}
// Example usage
addTask({ id: 1, title: "Learn TypeScript", description: "Study interfaces and types", status: "pending" });
addTask({ id: 2, title: "Write Code", description: "Practice CRUD functions", status: "pending" });
listTasks();
markTaskCompleted(1);
deleteTask(2);
listTasks();
