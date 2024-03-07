// script.js

// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array called tasks.
// TODO: Call the render function to update the table with the new tasks.

// Section 2: App State Variables
let tasks = [];

// Section 3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    
    // Get form input values
    const name = document.getElementById("taskName").value;
    const description = document.getElementById("taskDescription").value;
    const deadline = document.getElementById("taskDeadline").value;

    // Validate input fields
    if (!name || !description || !deadline) {
        alert("Please fill out all fields");
        return;
    }

    // Update the tasks array
    tasks.push({ name, description, deadline });

    // Call the render function
    render();

    // Clear the form inputs after submission
    taskForm.reset();
}

// Function to render tasks in the table
function render() {
    taskTable.innerHTML = tasks.map(task => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onclick="markTaskComplete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
    `).join('');
}

// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}


// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Initialize the table on page load
init();