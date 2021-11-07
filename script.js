var CURRENT_YEAR = (new Date()).getFullYear();
function compute()
{
    let amount = document.getElementById("principal").value;

    if (!amount || amount <= 0) {
        window.alert("Please Enter Positive Number!!!");
        document.getElementById("principal").focus();
        return;
    }

    let interestRate =  document.getElementById("rate").value;
    let amountYear = parseInt(document.getElementById("years").value);
    
    let amountReceive = amount*interestRate*amountYear / 100;
    document.getElementById("computation-result").innerHTML = `If you deposit <mark>${amount}</mark>, at an interest rate of <mark>${interestRate}%</mark>. <br/> You will receive an amount of <mark>${amountReceive}</mark>, in the year <mark>${CURRENT_YEAR + amountYear}</mark>`;
}

function onInterestRateChange (e) {
    let rateValue = e.target?.value;
    let spanText = document.getElementById("rate-result");
    spanText.innerHTML = `${rateValue}%`;

}
        