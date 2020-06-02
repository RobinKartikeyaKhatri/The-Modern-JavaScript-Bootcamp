const notes = ["Note 1", "Note 2", "Note 3"];

// console.log(notes.pop());
// notes.push("My new note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 0, "This is the new second item");

notes[2] = "this is now the new note 3";

notes.forEach(function (item, index) {
    console.log(index);
    console.log(item);
});

console.log(notes.length);
console.log(notes);

// Counting... 1
for(let count = 1; count <=3; count++) {
    console.log("Counting..." + count);
}

for(let count = 2; count >= 0; count--) {
    console.log(count);
}

for(count = 0; count <= notes.length - 1; count++) {
    console.log(notes[count]);
}

for(count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count]);
}