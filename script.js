$(document).ready(function() {

	var totalIncome;
	var totalIncomeBar;
	var budgetBar;
	var entertainmentBar;
	var foodBar;
	var clothingBar;
	var billsBar;
	var expenseType;



	$("#updateButton").click(function(event){
		$("#incomeForm").show();
	});
	$("incomeFormSubmit").click(function(event){
		totalIncome = $("#incomeInput").val();
		$("#totalIncomeBar").attr('max-value:', totalIncome);
		$("#incomeForm").hide();
	});
	$("addButton").click(function(event){
		$("#expenseForm").show();
	});
	$("#addExpenseButton").click(function(event){
		expenseType = $("#dropdownInput").val();
		expenseAmount = $("#expenseAmount").val();
		expenseDescription = $("#expenseDescription").val();

		$("#expenseForm").hide();
	});



});