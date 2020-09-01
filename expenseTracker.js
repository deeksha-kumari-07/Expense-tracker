var defaultValue = "0";
//This method handles the click of Add transaction button
function handleAddtransaction() {
    var inputAmount = document.getElementById("inputAmount");
    var inputText = document.getElementById("inputText");
    if (inputAmount.value == "" || inputText.value == "")
        alert("Please Enter some text and amount!");
    else {
        addtransactionHistory();
        updateIncomeAndExpense();
        calculateTotalBalance();
        inputAmount.value = "";
        inputText.value = "";
    }
}
//This method adds the history of the expenses and income Under History setion
function addtransactionHistory() {
    var enteredAmount = document.getElementById("inputAmount").value;
    var enteredText = document.getElementById("inputText").value;
    if (+enteredAmount < 0) {
        var dummyMinusCard = document.querySelector("#dummyMinusCard");
        var expenseRow = dummyMinusCard.cloneNode(true);
        expenseRow.id = "minusCard" + enteredText;
        expenseRow.querySelector("#spentAmount").innerHTML = enteredAmount;
        expenseRow.querySelector("#spentOn").innerHTML = enteredText;
        expenseRow.classList.remove("d-none");
        expenseRow.classList.add("history-cards");
        document.querySelector(".history-card-section").appendChild(expenseRow);
    }
    else {
        var dummyAdditionCard = document.querySelector("#dummyAdditionCard");
        var incomeRow = dummyAdditionCard.cloneNode(true);
        incomeRow.id = "additionCard" + enteredText;
        incomeRow.querySelector("#addedAmount").innerHTML = enteredAmount;
        incomeRow.querySelector("#AddedOn").innerHTML = enteredText;
        incomeRow.classList.remove("d-none");
        incomeRow.classList.add("history-cards");
        document.querySelector(".history-card-section").appendChild(incomeRow);
    }
    document.querySelector(".clear-history").classList.remove("d-none");
}
//This method calculates the total income and total expenses
function updateIncomeAndExpense() {
    var totalExpense = document.getElementById("expenseAmount").innerHTML;
    var totalIncome = document.getElementById("incomeAmount").innerHTML;
    var enteredAmount = document.getElementById("inputAmount").value;
    if (+enteredAmount < 0) {
        var resultedExpense = +totalExpense + +enteredAmount;
        var resultedExpenseString = resultedExpense.toString();
        document.getElementById("expenseAmount").innerHTML = resultedExpenseString;
    }
    else {
        var resultedIncome = +totalIncome + +enteredAmount;
        var resultedIncomeString = resultedIncome.toString();
        document.getElementById("incomeAmount").innerHTML = resultedIncomeString;
    }
}
//This method calculate the total balance left after the total expenses and income has been added
function calculateTotalBalance() {
    var totalExpense = document.getElementById("expenseAmount").innerHTML;
    var totalIncome = document.getElementById("incomeAmount").innerHTML;
    var totalBalance = document.getElementById("balanceAmount").innerHTML;
    var balance = +totalIncome + +totalExpense;
    var resultedbalance = balance.toString();
    document.getElementById("balanceAmount").innerHTML = resultedbalance;
}
//This method clears the Hisotry of transaction
function clearHistory() {
    var historyCards = document.querySelectorAll(".history-cards");
    historyCards.forEach(function (element) {
        element.parentNode.removeChild(element);
    });
    document.getElementById("expenseAmount").innerHTML = defaultValue;
    document.getElementById("incomeAmount").innerHTML = defaultValue;
    document.getElementById("balanceAmount").innerHTML = defaultValue;
    document.querySelector(".clear-history").classList.add("d-none");
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("addTransaction").addEventListener("click", handleAddtransaction);
    document.getElementById("clearHistory").addEventListener("click", clearHistory);
});
