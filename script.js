$(document).ready(function() {

    var totalIncome;
    var totalIncomeBar;
    var budgetBar;
    var entertainmentBar = $("#totalEnt").val();
    var foodBar = $("#totalFood").val();
    var clothingBar = $("#totalClothing").val();
    var billsBar = $("#totalBills").val();
    // var expenseType;
    var totalExpenses;
    var currentFoodValue = 0;
    var expenseAmount;

    $("#incomeForm").hide();
    $("#expenseForm").hide();

    $("#updateIncomeButton").click(function(event) {
        console.log("Hey");
        $("#incomeForm").show();
    });
    $("#saveIncomeButton").click(function(event) {
        event.preventDefault();
        totalIncome = $("#incomeInput").val();
        $("#totalBudgetRoom").attr('max', totalIncome);
        $("#incomeForm").hide();
    });
    $("#addExpenseButton").click(function(event) {
        $("#expenseForm").show();
    });
    $("#expenseForm").submit(function(event) {
    	event.preventDefault();
        var expenseType = $("#dropdownInput").val();
        console.log(expenseType);
        expenseAmount = $("#expenseAmount").val();
                console.log(expenseAmount);

        expenseDescription = $("#expenseDescription").val();

        if (expenseType == "Food") {
            function updateFoodProgress() {

                foodBar += expenseAmount;
            };
            updateFoodProgress();

        } else if (expenseType === "Clothing") {
            function updateClothingProgress() {
                clothingBar += expenseAmount;
            };
            updateClothingProgress();

        } else if (expenseType === "Entertainment") {
            function updateEntertainmentProgress() {
                entertainmentBar += expenseAmount;
            };
            updateEntertainmentProgress();

        } else if (expenseType === "Bills") {
            function updateBillsProgress() {
                billsBar += expenseAmount;
            };
            updateBillsProgress();
        }
        totalExpenses =
            $("#expenseForm").hide();
    });











});