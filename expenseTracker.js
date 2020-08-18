//This method handles the click of Add transaction button
function handleAddtransaction() {
    var inputAmount = $("#inputAmount");
    var inputText = $("#inputText");

    if(inputAmount.val() == "" || inputText.val() == "")
        alert("Please Enter some text and amount!");
    else {
        addtransactionHistory();
        updateIncomeAndExpense();
        calculateTotalBalance();
        $("#inputAmount").val("");
        $("#inputText").val("");
    }
}
    
//This method adds the history of the expenses and income Under History setion
function addtransactionHistory() {
    var enteredAmount = $("#inputAmount").val();
    var enteredText = $("#inputText").val();

    if(enteredAmount.startsWith("-")) {
        var expenseRow = $('#dummyMinusCard').clone().attr("id", "minusCard" + enteredText);
        expenseRow.find("#spentAmount").text(enteredAmount);
        expenseRow.find("#spentOn").text(enteredText);
        expenseRow.removeClass("d-none").addClass("history-cards");
        $(".history-card-section").append(expenseRow);
    }
    else{
        var incomeRow = $('#dummyAdditionCard').clone().attr("id", "additionCard" + enteredText);
        incomeRow.find("#addedAmount").text(enteredAmount);
        incomeRow.find("#AddedOn").text(enteredText);
        incomeRow.removeClass("d-none").addClass("history-cards");
        $(".history-card-section").append(incomeRow);
    }

    $(".clear-history").removeClass("d-none");
}

//This method calculates the total income and total expenses
function updateIncomeAndExpense() {
    var totalExpense = $("#expenseAmount").text();
    var totalIncome = $("#incomeAmount").text();
    var enteredAmount = $("#inputAmount").val();
    if(enteredAmount.startsWith("-")) {
        totalExpense = Number(totalExpense) + Number(enteredAmount);
        $("#expenseAmount").text(totalExpense);
    }
    else {
        totalIncome = Number(totalIncome) + Number(enteredAmount);
        $("#incomeAmount").text(totalIncome);
    }
}

//This method calculate the total balance left after the total expenses and income has been added
function calculateTotalBalance() {
    var totalExpense = $("#expenseAmount").text();
    var totalIncome = $("#incomeAmount").text();
    var totalBalance = $("#balanceAmount").text();
    totalBalance = Number(totalIncome) + Number(totalExpense);
    $("#balanceAmount").text(totalBalance);
}

//This method clears the Hisotry of transaction
function clearHistory() {
    $(".history-cards").remove();
    $("#incomeAmount").text("0");
    $("#expenseAmount").text("0");
    $("#balanceAmount").text("0");
    $(".clear-history").addClass("d-none");
}

$(document).ready(function() {
    $("#addTransaction").click(function() {
        handleAddtransaction();
    });
   
    $(".clear-history").click(function() {
        clearHistory();
    });
});