// Multiple arguments
let add = function(num1, num2, num3) {
    return num1 + num2 + num3;
    
}

let result = add(3, 12, 34);
console.log(result);



// Default arguments
let getScoreText = function(name = "Anonymous", score = 0) {
    return "Name: " + name + ", " + "Score: " + score;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);



// Challenge
    // function getTip(total bill amount, tipPercent - default to .2)
    // total * multiply by .2
    // return value from function

let getTip = function(total, tipPercent = .2) {
    return total * tipPercent;
}

let amountOne = getTip(40, .25);
let amountTwo = getTip(150);

console.log(amountOne);
console.log(amountTwo);