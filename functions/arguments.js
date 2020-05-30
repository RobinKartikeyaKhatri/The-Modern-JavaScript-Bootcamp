// Multiple arguments
let add = function(num1, num2, num3) {
    return num1 + num2 + num3;
    
}

let result = add(3, 12, 34);
console.log(result);



// Default arguments
let getScoreText = function(name = "Anonymous", score = 0) {
    // return "Name: " + name + ", " + "Score: " + score;
    return `Name: ${name} - Score: ${score}`;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);



// Challenge
    // function getTip(total bill amount, tipPercent - default to .2)
    // total * multiply by .2
    // return value from function

    // A 25% tip on $40(comes from total variable) would be $10

let getTip = function(total, tipPercent = .2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;
}

let amountOne = getTip(60);
let amountTwo = getTip(150);

console.log(amountOne);
console.log(amountTwo);