const todos = [{
    text: "Order cat food",
    completed: false
}, {
    text: "Clean kitchen",
    completed: true
}, {
    text: "Buy food",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "Exercise",
    completed: true 
}];

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
});

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

todos.forEach(function(todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("body").appendChild(p);
});

// Listen for new todo creation
const addTodoButton = document.querySelector("#add-todo");
addTodoButton.addEventListener("click", function(e) {
    console.log("I am adding a new todo.");
});

// Listen for todo text change
const addNewTodoTextInput = document.querySelector("#new-todo-text");
addNewTodoTextInput.addEventListener("input", function(e) {
    console.log(e.target.value);
});