const notes = [{}, {
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better."
}, {
    title: "Office modification",
    body: "Get a new seat"
}];

// console.log(notes.pop());
// notes.push("My new note");

// console.log(notes.shift());
// notes.unshift("My first note");

// notes.splice(1, 0, "This is the new second item");

// notes[2] = "this is now the new note 3";

// notes.forEach(function (item, index) {
//     console.log(index);
//     console.log(item);
// });

console.log(notes.length);
console.log(notes);

const index = notes.findIndex(function(note, index) {
    return note.title === "Habbits to work on";
});

console.log(index);