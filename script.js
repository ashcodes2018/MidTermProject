$(document).ready(function() {

		var income;
		$("#incomeForm").hide();
		$("#expenseForm").hide()
		var FoodBar = $("#totalFood").val(0);
		var EntertainmentBar = $("#totalEnt").val(0);
		var ClothingBar = $("#totalClothing").val(0);
		var BillsBar = $("#totalBills").val(0);

		var allExpenses=[];
		

		$("#updateIncomeButton").click(function(){
			$("#incomeForm").show();
		});

		$("#saveIncomeButton").click(function(event){
			event.preventDefault();
			income = $("#incomeInput").val();
			$("#totalEnt").attr('max', income);
			$("#totalClothing").attr('max', income);
			$("#totalFood").attr('max', income);
			$("#totalBills").attr('max', income);
			$("#totalBudgetRoom").attr('value', income).attr('max', income);
			$("#incomeForm").hide();
		})
		

		$("#addExpenseButton").click(function(event){
			$("#expenseForm").show();
		})
		$("#saveExpenseButton").click(function(event){
			event.preventDefault();
			var runningTotal = income;
			var category = $("#dropdownInput").val();
			var amount = $("#expenseAmount").val();
			var newExpenseObject = {category, amount /*description*/};

			allExpenses.push(newExpenseObject);
			income = runningTotal-amount;
			console.log(income);
			
			function updateIncomeBar(){
				$("#totalBudgetRoom").attr('value', income);
			}
			updateIncomeBar();
			$("#expenseForm").hide();

			function updateProgressBar(expenseType){
				expenseType -= amount;

			}
			updateProgressBar(newExpenseObject.category);
			$("#" + category + "Bar")
		})
		




		// $("#" function updateTotal (){
		// 	$("#incomeInput").val();

		// }


















































    // var totalIncome;
    // var totalIncomeBar;
    // var budgetBar;
    // var entertainmentBar = $("#totalEnt").val();
    // var foodBar = $("#totalFood").val();
    // var clothingBar = $("#totalClothing").val();
    // var billsBar = $("#totalBills").val();
    
    // // var expenseType;
    // var totalExpenses;
    // var currentFoodValue = 0;
    // var expenseAmount;

    // $("#totalBudgetRoom").attr('value', 0);
    // $("#incomeForm").hide();
    // $("#expenseForm").hide();

    // $("#updateIncomeButton").click(function(event) {
    //     console.log("Hey");
    //     $("#incomeForm").show();
    // });
    // $("#saveIncomeButton").click(function(event) {
    //     event.preventDefault();
    //     totalIncome = $("#incomeInput").val();
    //     $("#totalBudgetRoom").attr('max', totalIncome).attr('value', totalIncome);
    //     $("#incomeForm").hide();
    // });
    // $("#addExpenseButton").click(function(event) {
    //     $("#expenseForm").show();
    // });
    // $("#expenseForm").submit(function(event) {
    // 	event.preventDefault();
    //     var expenseType = $("#dropdownInput").val();
    //     console.log(expenseType);
    //     var expenseAmount = $("#expenseAmount").val();
    //     console.log(expenseAmount);

    //     expenseDescription = $("#expenseDescription").val();
        
    //     var foodExpenses = $("#totalFood").attr('value');
    //     var runningTotal = totalIncome - expenseAmount;


    //     if (expenseType == "Food") {
    //         function updateFoodProgress() {
    //         	$("#totalBudgetRoom").attr('value', newTotalValue-=expenseAmount);
    //             $("#totalFood").attr('value', foodExpenses += expenseAmount);
                
    //         };
    //         updateFoodProgress();

    //     } else if (expenseType === "Clothing") {
    //         function updateClothingProgress() {
    //             clothingBar += expenseAmount;
    //         };
    //         updateClothingProgress();

    //     } else if (expenseType === "Entertainment") {
    //         function updateEntertainmentProgress() {
    //             entertainmentBar += expenseAmount;
    //         };
    //         updateEntertainmentProgress();

    //     } else if (expenseType === "Bills") {
    //         function updateBillsProgress() {
    //             billsBar += expenseAmount;
    //         };
    //         updateBillsProgress();
    //     }

    //     // totalExpenses =
    //         $("#expenseForm").hide();
    // });











});