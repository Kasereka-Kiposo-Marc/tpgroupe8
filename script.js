function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let de = document.getElementById("fromCurrency").value;
    let vers = document.getElementById("toCurrency").value;

    // Taux de change fixes (exemple)
    let rates = {
        "FC": {  "USD": 1/2850 },
        "USD": { "FC": 2850 },
      
    };

    if (!isNaN(amount) && rates[de]&& rates[de][vers]) {
        
            let convertedAmount = amount * rates[de][vers];
        document.getElementById("result").innerText = 
            amount + " " + de + " = " + convertedAmount.toFixed(2) + " " + vers;
    } else {
        document.getElementById("result").innerText = "Veuillez entrer un montant valide.";
    }
}