$(document).ready(function() {

	var totalIncome;
	var totalIncomeBar;
	var budgetBar;
	var entertainmentBar;
	var foodBar;
	var clothingBar;
	var billsBar;
	var expenseType;

	$("#incomeForm").hide();
	$("#expenseForm").hide();

	$("#updateIncomeButton").click(function(event){
		console.log("Hey");
		$("#incomeForm").show();
	});
	$("#saveIncomeButton").click(function(event){
		event.preventDefault();
		totalIncome = $("#incomeInput").val();
		$("#totalBudgetRoom").attr('max', totalIncome);
		$("#incomeForm").hide();
	});
	$("#addExpenseButton").click(function(event){
		$("#expenseForm").show();
	});
	$("#saveExpenseButton").click(function(event){
		expenseType = $("#dropdownInput").val();
		expenseAmount = $("#expenseAmount").val();
		expenseDescription = $("#expenseDescription").val();

		$("#expenseForm").hide();
	});



});