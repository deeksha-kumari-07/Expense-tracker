//This method handles the click of Add transaction button
function handleAddtransaction() {
    let inputAmount = document.getElementById("inputAmount") as HTMLInputElement;
    let inputText = document.getElementById("inputText") as HTMLInputElement;

    if(inputAmount.value == "" || inputText.value == "")
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
    let enteredAmount = (document.getElementById("inputAmount") as HTMLInputElement).value;
    let enteredText = (document.getElementById("inputText") as HTMLInputElement).value;

    if(enteredAmount!.charAt(0) === "-") {
        let dummyMinusCard = document.querySelector("#dummyMinusCard");
        let expenseRow = dummyMinusCard!.cloneNode(true) as Element;
        expenseRow.id = "minusCard" + enteredText;
        expenseRow.querySelector("#spentAmount")!.innerHTML = enteredAmount;
        expenseRow.querySelector("#spentOn")!.innerHTML = enteredText;
        expenseRow.classList.remove("d-none");
        expenseRow.classList.add("history-cards");
        document.querySelector(".history-card-section")!.appendChild(expenseRow);
    }
    else{
        let dummyAdditionCard = document.querySelector("#dummyAdditionCard");
        let incomeRow = dummyAdditionCard!.cloneNode(true) as Element;
        incomeRow.id = "additionCard" + enteredText;
        incomeRow.querySelector("#addedAmount")!.innerHTML = enteredAmount;
        incomeRow.querySelector("#AddedOn")!.innerHTML = enteredText;
        incomeRow.classList.remove("d-none");
        incomeRow.classList.add("history-cards");
        document.querySelector(".history-card-section")!.appendChild(incomeRow);
    }

    document.querySelector(".clear-history")!.classList.remove("d-none");
}

//This method calculates the total income and total expenses
function updateIncomeAndExpense() {
    let totalExpense = document.getElementById("expenseAmount")!.innerHTML;
    let totalIncome = document.getElementById("incomeAmount")!.innerHTML;
    let enteredAmount = (document.getElementById("inputAmount") as HTMLInputElement).value;
    if(enteredAmount!.charAt(0) === "-") {
        let resultedExpense = +totalExpense + +enteredAmount;
        let resultedExpenseString = resultedExpense as unknown as string;
        document.getElementById("expenseAmount")!.innerHTML = resultedExpenseString;
    }
    else {
        let resultedIncome = +totalIncome + +enteredAmount;
        let resultedIncomeString = resultedIncome as unknown as string;
        document.getElementById("incomeAmount")!.innerHTML = resultedIncomeString;
    }
}

//This method calculate the total balance left after the total expenses and income has been added
function calculateTotalBalance() {
    let totalExpense = document.getElementById("expenseAmount")!.innerHTML;
    let totalIncome = document.getElementById("incomeAmount")!.innerHTML;
    let totalBalance = document.getElementById("balanceAmount")!.innerHTML;
    let balance = +totalIncome + +totalExpense;
    let resultedbalance = balance as unknown as string;
    document.getElementById("balanceAmount")!.innerHTML = resultedbalance;
}

//This method clears the Hisotry of transaction
function clearHistory() {
    var historyCards = document.querySelectorAll(".history-cards") as NodeList;
    historyCards.forEach(element => {
        element!.parentNode!.removeChild(element);
    });
    document.getElementById("expenseAmount")!.innerHTML = "0";
    document.getElementById("incomeAmount")!.innerHTML = "0";
    document.getElementById("balanceAmount")!.innerHTML = "0"; 
    document.querySelector(".clear-history")!.classList.add("d-none");
}

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("addTransaction")!.addEventListener("click", handleAddtransaction);
    document.getElementById("clearHistory")!.addEventListener("click", clearHistory);
  
});
