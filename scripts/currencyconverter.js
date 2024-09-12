import convertToCedis from "./conerttocedis.js";
import convertToDollar from "./converttodollars.js";
import convertToEuro from "./converttoeuros.js";
import convertToPounds from "./converttopounds.js";
import convertToYen from "./converttoyen.js";

let selectCurrency= document.getElementById ("select-currency");
let currencyInput= document.getElementById("currencyInput");
let changeCurrencyBtn = document.getElementById ("changeCurrencyBtn");
let outputDiv = document.getElementById ("output");
let naira;

changeCurrencyBtn.addEventListener("click", () => {
    let selectedCurrency = selectCurrency.value;
    let currency = currencyInput.value;

    if (selectedCurrency === 'usd') {
      naira = convertToDollar (currency) 
      outputDiv.innerHTML = `$${currency} = ₦${naira}`;
    } else if (selectedCurrency === 'euro'){
        naira= convertToEuro (currency)
        outputDiv.innerHTML = ` €${currency} = ₦${naira}`;
    } else if (selectedCurrency === 'pounds'){
        naira = convertToPounds (currency);
        outputDiv.innerHTML = `£${currency} = ₦${naira}`;
    } else if (selectedCurrency === 'yen') {
        naira = convertToYen (currency)
        outputDiv.innerHTML = `¥${currency} =₦${naira}`;
    } else if (selectedCurrency === 'cedis') {
        naira = convertToCedis (currency)
        outputDiv.innerHTML = `C${currency} =₦${naira}`
    }
})