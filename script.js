$(document).ready(function() {

    var income;
    $("#incomeForm").hide();
    $("#expenseForm").hide()
    

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
        $("#incomeForm").hide();
    })


    $("#addExpenseButton").click(function(event) {
        $("#expenseForm").show();
    })
    $("#saveExpenseButton").click(function(event) {
            event.preventDefault();
            if (income > 0 && income >= $("#expenseAmount").val()) {
                var runningTotal = income;
                var category = $("#dropdownInput").val();
                var amount = $("#expenseAmount").val();
                var newExpenseObject = { category: category, amount: amount /*description*/ };

                allExpenses.push(newExpenseObject);
                income = runningTotal - amount;

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
                }
                $("#expenseAmount").val(0);
                updateProgressBar(newExpenseObject.category);

                console.log(getItemsForCategory("Food"));

            } else {
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

    })
    // $("#totalEnt").click(function(){
    //     $(this).after('<div class= "something"><div>Here are all of your expenses for this category!<span id="entSpan"></span></div></div>')
    // });
    // $("#totalFood").click(function(){
    //     $(this).after('<div class= "something"><div>Here are all of your expenses for this category!<span id="foodSpan"></span></div></div>')
    // });
    // $("#totalClothing").click(function(){
    //     $(this).after('<div class= "something"><div>Here are all of your expenses for this category!<span id="clothingSpan"></span></div></div>')
    // });
    // $("#totalBills").click(function(){
    //     $(this).after('<div class= "something"><div>Here are all of your expenses for this category!<span id="billsSpan"></span></div></div>')
    // });

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


