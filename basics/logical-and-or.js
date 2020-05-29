let temp = 55;

// Logical AND Operator - True if both sides are true. False otherwise.
// Logical OR Operator - True if at least one side is true. False otherwise. 
if (temp >= 60 && temp <= 90) {
    console.log("It is pretty nice out")
} else if (temp <= 0 || temp >= 120) {
    console.log("Do not go outside.");
} else {
    console.log("Eh. Do what you want.");
}


// Challenge
let isGuestOneVegan = false;
let isGuestTwoVegan = false;


if (isGuestOneVegan && isGuestTwoVegan) {
    // Are both vegan? Only offer up vegan dishes.
    console.log("Only offer up vegan dishes.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    // At least one vegan? Make sure to offer up some vegan options.
    console.log("Make sure to offer up some vegan options.");
} else {
    // Else, Offer up anything on the menue.
    console.log("Offer up anything on the menue.");    
}