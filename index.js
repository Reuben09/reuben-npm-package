let tasks = [];

function toDoList(command) {
    const args = command.trim().split(" ");
    const action = args.shift().toLowerCase();

    switch (action) {
        case "add":
            const taskText = args.join(" ");
            if (taskText !== "") {
                tasks.push({ text: taskText, completed: false });
                return "Task added successfully.";
            } else {
                return "Please provide a task.";
            }
        case "list":
            if (tasks.length === 0) {
                return "No tasks added yet.";
            } else {
                return tasks.map((task, index) => `${index + 1}. ${task.text} ${task.completed ? "(Completed)" : ""}`).join("\n");
            }
        case "complete":
            const taskIndex = parseInt(args[0]) - 1;
            if (isNaN(taskIndex) || taskIndex < 0 || taskIndex >= tasks.length) {
                return "Invalid task index.";
            } else {
                tasks[taskIndex].completed = true;
                return "Task marked as completed.";
            }
        case "delete":
            const delIndex = parseInt(args[0]) - 1;
            if (isNaN(delIndex) || delIndex < 0 || delIndex >= tasks.length) {
                return "Invalid task index.";
            } else {
                tasks.splice(delIndex, 1);
                return "Task deleted successfully.";
            }
        case "help":
            return "Commands:\nadd <task>: Add a new task\nlist: List all tasks\ncomplete <index>: Mark task as completed\ndelete <index>: Delete a task\nhelp: Show available commands";
        default:
            return "Invalid command. Type 'help' for available commands.";
    }
}

module.exports = toDoList;
