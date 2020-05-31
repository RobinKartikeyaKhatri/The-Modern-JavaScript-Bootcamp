let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

console.log(myBook);
console.log(myBook.title);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);


// Challenge
    // name, age, location

let person = {
    name: "Robin",
    age: 34,
    location: "Barmer"
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);