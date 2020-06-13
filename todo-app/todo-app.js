// Challenge
    // 1. Delete dummy data
    // 2. Read and parse the data when the app starts up
    // 3. Stringify and write the data when new data is added

let todos = [];

const filters = {
    searchText: "",
    hideCompleted: false
}

const todosJSON = localStorage.getItem("todos");

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}


// Function for filter todos
const renderTodos = function(todos, filters) {
    let filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    });

    filteredTodos = filteredTodos.filter(function(todo) {
        // return !filters.hideCompleted || !todo.completed
        if (filters.hideCompleted) {
            return !todo.completed;
        } else {
            return true;
        }
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

// Listen for filter todos search input text
const searchTodoTextInput = document.querySelector("#search-text");
searchTodoTextInput.addEventListener("input", function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", function(e) {
    e.preventDefault();
    const todo = e.target.elements.text.value;
    todos.push({
        text: todo,
        completed: false
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos(todos, filters);
    e.target.elements.text.value = "";
});

document.querySelector("#hide-completed").addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});