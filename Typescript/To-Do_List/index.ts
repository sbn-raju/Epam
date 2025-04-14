// Define the Task interface
interface Task {
    id: number;
    title: string;
    description: string;
    status: "pending" | "completed";
  }
  
  // Array to store tasks
  let tasks: Task[] = [];
  
  // Function to add a new task
  function addTask(task: Task): void {
    tasks.push(task);
    console.log(`Task "${task.title}" added.`);
  }
  
  // Function to mark a task as completed
  function markTaskCompleted(id: number): void {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.status = "completed";
      console.log(`Task "${task.title}" marked as completed.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // Function to delete a task by ID
  function deleteTask(id: number): void {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      const removed = tasks.splice(index, 1)[0];
      console.log(`Task "${removed.title}" deleted.`);
    } else {
      console.log(`Task with ID ${id} not found.`);
    }
  }
  
  // Function to list all tasks
  function listTasks(): void {
    console.log("All Tasks:");
    if (tasks.length === 0) {
      console.log("No tasks found.");
    } else {
      tasks.forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}`);
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
  