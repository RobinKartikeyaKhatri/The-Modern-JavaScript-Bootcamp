let name = "Robin Kartikeya";

// Length property
console.log(name.length);

// Upper case method
console.log(name.toUpperCase());

// Lower case method
console.log(name.toLowerCase());

// Includes method
let password = "abc123";
console.log(password.includes("password"));

// Trim method
let fullName = "            Robin Kartikeya Khatri   ";
console.log(fullName.trim());


// Challenge
    // Create a function called isValidPassword - Only return true if the length is more than 8 - and it doesn't contain the word password

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes("password");
}

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%^&"));
console.log(isValidPassword("asdfpeerpassword"));