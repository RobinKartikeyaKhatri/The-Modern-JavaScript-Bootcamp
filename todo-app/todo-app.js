let todos = getSavedTodos();

const filters = {
    searchText: "",
    hideCompleted: false
}




// Function for filter todos


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
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.text.value = "";
});

document.querySelector("#hide-completed").addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});