const todos = ["Finish arrays section", "Take a bath", "Eat lunch", "Visit Labela", "Exercise"];

todos.splice(2, 1);
todos.push("Listen songs");
todos.shift();

console.log(`You have ${todos.length} todos`);
console.log(todos);
console.log(todos);