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

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value (index ())

// const deleteTodo = function(todoArray, itemNameToDelete) {
//     return todoArray.find(function(todo) {
//         return todo.text.toLowerCase() === itemNameToDelete.toLowerCase();
//     });
// }

const deleteTodo = function(todos, itemName) {
    const index = todos.findIndex(function(element) {
        return element.text.toLowerCase() === itemName.toLowerCase();
    });

    if (index > -1) {
        todos.splice(index, 1);
    }
}

const getThingsTodo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed;
    });
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (a.completed < b.completed) {
            return -1;
        } else if (b.completed > a.completed) {
            return 1;
        } else {
            return 0;
        }
    });
}

sortTodos(todos);
console.log(todos);

// console.log(getThingsTodo(todos));

// deleteTodo(todos, "buy food");
// console.log(todos);