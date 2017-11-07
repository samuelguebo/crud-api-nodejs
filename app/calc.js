var converterForm = document.getElementById("calculatorForm");
var amountInput = converterForm.getElementsByClassName("input-group-field")[0];
var convertedAmountLabel = converterForm.getElementsByClassName("input-group-label")[0];

function XOFtoUSDConverter(amount) {
    var convertedAmount = (amount / 585).toFixed(2);
    console.log(convertedAmount);
    
    convertedAmountLabel.innerHTML = "$" + convertedAmount;
    return convertedAmount;
}



// Listening to user input and call the converter function
amountInput.addEventListener("input", function () { XOFtoUSDConverter(this.value); }, false);


