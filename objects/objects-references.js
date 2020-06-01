let myAccount = {
    name: "Robin Kartikeya",
    expenses: 0,
    income: 0
}

// addIncome(accountName, amountOfIncome)
// resetAccount(accountName) - reset the expenses and the income to a zero
// getAccountSummary(accountName) - print the summary of the account - includes current account balance as well as total in expenses and icome
// Sample - Account for Robin(accountName) has $900(balance). $1000 in income. $100 in expenses. 


let addIncome = function(accountName, amountOfIncome) {
    accountName.income = accountName.income + amountOfIncome;
    // console.log(accountName);
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
    // console.log(account);
}


let getAccountSummary = function(accountName) {
    let balance = accountName.income - accountName.expenses;
    return `Account for ${accountName.name} has $${balance}. $${accountName.income} in income. $${accountName.expenses} in expenses.`;
}

let resetAccount = function(accountName) {
    accountName.income = accountName.income = 0;
    accountName.expenses = accountName.expenses = 0;
}


addIncome(myAccount, 2000);
addExpense(myAccount, 2.50);
addExpense(myAccount, 160);
let summary = getAccountSummary(myAccount);
console.log(summary);
resetAccount(myAccount);
let summary2 = getAccountSummary(myAccount);
console.log(summary2);