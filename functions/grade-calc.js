// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function(score, total) {
    let grade = "";
    let percentage = (score / total) * 100;

    if (percentage >= 90) {
        grade = "A";
        return `You got a ${grade} (${percentage}%)!`;
    } else if (percentage >= 80 && percentage <= 89) {
        grade = "B";
        return `You got a ${grade} (${percentage}%)!`;
    } else if (percentage >= 70 && percentage <= 79) {
        grade = "C";
        return `You got a ${grade} (${percentage}%)!`;
    } else if (percentage >= 60 && percentage <= 69) {
        grade = "D";
        return `You got a ${grade} (${percentage}%)!`;
    } else {
        grade = "F";
        return `You got a ${grade} (${percentage}%)!`;
    }
}

console.log(gradeCalc(12, 20));