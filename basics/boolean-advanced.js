let isAccountLocked = false;
let userRole = "user";

if (isAccountLocked) {
    console.log("Is account locked");
} else if (userRole === "admin") {
    console.log("Welcome Admin!");
} else {
    console.log("Welcome!");
}


// Challenge
let temp = 4;


if (temp <= 32) {
    // It is freezing outside! (31)
    console.log("It is freezing outside!");
} else if (temp >= 110) {
    // It is hot outside! (120)
    console.log("It is hot outside!");
} else {
    // Go for it. It is preety nice. (45)
    console.log("Go for it. It is preety nice out.")
}
