function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * (rate / 100) * years;

    if (principal > 1) {
        document.getElementById('principal_val').innerText = "If you deposit " + principal;
        document.getElementById('rate_val').innerText = "at an interest rate of " + rate;
        document.getElementById('interest_val').innerText = "You will receive an amount of " + interest;
        document.getElementById('years_val').innerText = "in the year " + year;

    } else {
        alert("Enter a positive number!");
    }
}

function change()
{
    var result = document.getElementById("result");
    var rate = document.getElementById("rate");
    result.innerText = rate.value;
}

