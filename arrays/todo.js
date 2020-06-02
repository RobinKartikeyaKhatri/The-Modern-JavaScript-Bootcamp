const todos = ["Finish arrays section", "Take a bath", "Eat lunch", "Visit Labela", "Exercise"];

todos.splice(2, 1);
todos.push("Listen songs");
todos.shift();

console.log(`You have ${todos.length} todos!`);

todos.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`);
});

for(let count = 0; count <= todos.length - 1; count++) {
    console.log(`${count + 1}. ${todos[count]}`);
}

// 1. Item One
// 2. Item Two
// ...