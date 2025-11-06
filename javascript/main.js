// Getting all expense values
function getExpenses(){
    return {
        electric: parseFloat(document.getElementById("electric").value) || 0,
        rent: parseFloat(document.getElementById("rent").value) || 0,
        philanthropy: parseFloat(document.getElementById("tithe").value) || 0,
        fees: parseFloat(document.getElementById("fees").value) || 0,
        entertainment: parseFloat(document.getElementById("enta").value) || 0,
        shopping: parseFloat(document.getElementById("shopping").value) || 0,
        savings: parseFloat(document.getElementById("save").value) || 0,
    };
}

function buildExpensesList(expenses){
    let html = ("");
    let total = 0;

html += `<div class="list-item">Electric Bill: Ksh ${expenses.electric.toFixed(2)}</div>`;
total += expenses.electric;

html += `<div class="list-item">Rent: Ksh ${expenses.rent.toFixed(2)}</div>`;
total += expenses.rent;

html+= `<div class="list-item">Philanthropy: Ksh ${expenses.philanthropy.toFixed(2)}</div>`;
total += expenses.philanthropy;

html += `<div class="list-item">Fees: Ksh ${expenses.fees.toFixed(2)}</div>`;
total += expenses.fees;

html += `<div class="list-item">Entertainment: Ksh ${expenses.entertainment.toFixed(2)}</div>`;
total += expenses.entertainment;

html += `<div class="list-item">Shopping: Ksh ${expenses.shopping.toFixed(2)}</div>`;
total += expenses.shopping;

html += `<div class="list-item">Savings: Ksh ${expenses.savings.toFixed(2)}</div>`;
total += expenses.savings;

html += `<div class="lidt-item total">Total Expenses: Ksh ${total.toFixed(2)}</div>`;
return html;
}


function buildSalarySteps(salary,expenses){

    let html = `<div class="list-item">Starting Salary: Ksh ${salary.toFixed(2)}</div>`;
    let current = salary;

    current -= expenses.electric;
    html += `<div class="list-item">After Electric Bill: Ksh ${current.toFixed(2)}</div>`;

    current -= expenses.rent;
    html += `<div class="list-item">After Rent: Ksh ${current.toFixed(2)}</div>`;

    current -= expenses.philanthropy;
    html += `<div class="list-item">After Philanthropy: Ksh ${current.toFixed(2)}</div>`;

    current -= expenses.fees;
    html += `<div class="list-item">After Fees: Ksh ${current.toFixed(2)}</div>`;

    current -= expenses.entertainment;
    html += `<div class="list-item">After Entertainment: Ksh ${current.toFixed(2)}</div>`;

    current -= expenses.shopping;
    html += `<div class="list-item">After Shopping: Ksh ${current.toFixed(2)}</div>`;

    current -= expenses.savings;
    html += `<div class="list-item">After Savings: Ksh ${current.toFixed(2)}</div>`;

    return html;
}

// Calculate remaining
function calculateRemaining(){
    const salary = parseFloat(document.getElementById("salary").value) || 0;
    const expenses = getExpenses();

    const totalExpenses = expenses.electric + expenses.entertainment + expenses.fees + expenses.rent + expenses.savings + expenses.shopping + expenses.philanthropy;

    return salary - totalExpenses;

}

// Displaying result
function displayResults(){
    const salary = parseFloat(document.getElementById("salary").value || 0);
    const expenses = getExpenses();
    const remaining = calculateRemaining();

    document.getElementById("expenses-display").innerHTML = buildExpensesList(expenses);

    document.getElementById("salary-steps-display").innerHTML = buildSalarySteps(salary, expenses);

    document.getElementById("remaining").textContent = `Ksh ${remaining.toFixed(2)}`;
}


function handleCalculation(){
    displayResults();
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("button").addEventListener("click", handleCalculation);
});