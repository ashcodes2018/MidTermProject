$(document).ready(function() {

    var income;
    $("#incomeForm").hide();
    $("#expenseForm").hide();
    $("#incomeNumber").text(income);
    // $("#entertainmentNumber").text(something-Number($("#expenseAmount").val()));
    
    var allExpenses = [];


    $("#updateIncomeButton").click(function() {
        $("#incomeForm").show();
    });

    $("#incomeForm").submit(function(event) {
        event.preventDefault();
        income = $("#incomeInput").val();
        $("#totalEnt").attr('max', income);
        $("#totalClothing").attr('max', income);
        $("#totalFood").attr('max', income);
        $("#totalBills").attr('max', income);
        $("#totalBudgetRoom").attr('value', income).attr('max', income);
        $("#incomeNumber").text(income);
        $("#incomeForm").hide();
    });


    $("#addExpenseButton").click(function(event) {
        $("#expenseForm").show();
    });
    $("#saveExpenseButton").click(function(event) {
            event.preventDefault();
            if (income > 0 && income >= Number($("#expenseAmount").val())) {
                var category = $("#dropdownInput").val();
                var amount = Number($("#expenseAmount").val());
                var newExpenseObject = { category: category, amount: amount /*description*/ };

                allExpenses.push(newExpenseObject);
                $("#incomeNumber").text(income-Number($("#expenseAmount").val()));
                income -= amount;

                function updateIncomeBar() {
                    $("#totalBudgetRoom").attr('value', income);
                }
                updateIncomeBar();
                $("#expenseForm").hide();

                function updateProgressBar(expenseType) {
                    var progressBar = getProgressBarForCategory(expenseType);
                    var currentValue = progressBar.val();
                    currentValue += Number(amount);
                    progressBar.val(currentValue);
                    var ENT = $("#totalEnt").attr('value');
                    $("#entertainmentNumber").text(ENT);
                    var FOOD = $("#totalFood").attr('value');
                    $("#foodNumber").text(FOOD);
                    var CLOTHING = $("#totalClothing").attr('value');
                    $("#clothingNumber").text(CLOTHING);
                    var BILLS = $("#totalBills").attr('value');
                    $("#billsNumber").text(BILLS);
                }
                
                updateProgressBar(newExpenseObject.category);
            } 
            else 
                {
            	   alert("Insufficient Funds");
                };

        function getProgressBarForCategory(category) {
            switch (category) {
                case "Food":
                    return $("#totalFood");
                case "Clothing":
                    return $("#totalClothing");
                case "Bills":
                    return $("#totalBills");
                case "Entertainment":
                    return $("#totalEnt");
            }
        }

    });
    $("#totalEnt").click(function(){
        $(this).after('<div class= "something"><div>Here are all of your expenses for this category!<span id="entSpan"></span></div></div>')
    });
    $("#totalFood").click(function(){
        $(this).after('<div class= "something"><div id="foodDiv">Here are all of your expenses for this category!</div></div>')
    });
    $("#totalClothing").click(function(){
        $(this).after('<div class= "something"><div>Here are all of your expenses for this category!<span id="clothingSpan"></span></div></div>')
    });
    $("#totalBills").click(function(){
        $(this).after('<div class= "something"><div>Here are all of your expenses for this category!<span id="billsSpan"></span></div></div>')
    });
    var getItemsForFood = getItemsForCategory("Food");
    console.log(getItemsForFood);
    $("#foodDiv").append(getItemsForFood);
    function getItemsForCategory(category) {
        return allExpenses.filter(function(expense) {
            if (category == expense.category) {
                return true;
            } else {
                return false;
            }
        })
    }
});


