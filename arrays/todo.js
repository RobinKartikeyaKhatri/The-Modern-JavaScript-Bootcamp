const todos = [{
    text: "Order cat food",
    completed: true
}, {
    text: "Clean kitchen",
    completed: false
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

deleteTodo(todos, "buy food");
console.log(todos);