const account = {
    name: "Robin Kartikeya",
    expenses: [],
    income: [],
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        });
    },
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalBalance = 0;
        let totalIncome = 0;
    
        this.expenses.forEach(function(total) {
            totalExpenses = totalExpenses + total.amount;            
        });

        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount;
        });

        totalBalance = totalIncome - totalExpenses;
        return `${this.name} has a balance of $${totalBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
    }
}

// Challenge - 1
    // Expense(array of objects): description(String), amount(Number)
    // method to create - addExpense(description, amount) -> it should adds a new object inside expenses array
    // method to create - getAccountSummary -> total up all expenses -> Robin Kartikeya has $1250 in expenses. 

// Challenge - 2
    // 1. Add an income array to account object
    // 2. Create an addIncome(description, amount) method
    // 3. Tweak getAccountSummary() method -> figure it how much are expenses, how much is income, and account balance
        // Robin Kartikeya has a balance of $10. $100 in income. $90 in expenses.
account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());