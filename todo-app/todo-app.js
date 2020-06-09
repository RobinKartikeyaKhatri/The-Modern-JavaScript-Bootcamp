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

const filters = {
    searchText: ""
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    });

    document.querySelector("#todos").innerHTML = "";
    
    const summary = document.createElement("h2");
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector("#todos").appendChild(summary);
    
    filteredTodos.forEach(function(todo) {
        const p = document.createElement("p");
        p.textContent = todo.text;
        document.querySelector("#todos").appendChild(p);
    });
}

renderTodos(todos, filters);

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

const searchTodoTextInput = document.querySelector("#search-text");
searchTodoTextInput.addEventListener("input", function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})