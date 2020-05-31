let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

let otherBook = {
    title: "A Peoples History",
    author: "Howard Zinn",
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`    
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(bookSummary.pageCountSummary);

console.log(otherBookSummary.summary);
console.log(otherBookSummary.pageCountSummary);


// Chalenge
    // Create function - take fahrenheit in - return object with all three 

let convertTemperature = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}


console.log("------------------------------------")

let temperature = convertTemperature(74);
console.log(`Current temperature in fahrenheit: ${temperature.fahrenheit}`);
console.log(`Current temperature in celsius: ${temperature.celsius}`);
console.log(`Current temperature in kelvin: ${temperature.kelvin}`);