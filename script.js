
    
        function convert() {
            let amount = parseFloat(document.getElementById("amount").value);
            let de = document.getElementById("fromCurrency").value;
            let vers = document.getElementById("toCurrency").value;
            let rat = parseFloat(document.getElementById("exchangeRate").value);
            let rate = {
                "FC": {  "USD": 1/rat },
                "USD": { "FC": rat },
              
            };
        

            if (!isNaN(amount) && rate[de] && rate[de][vers]) {
                let convertedAmount = amount * rate[de][vers];
                document.getElementById("result").innerText = 
                    amount + " " + de + " = " + convertedAmount.toFixed(2) + " " + vers;
            } else {
                document.getElementById("result").innerText = "Veuillez entrer un montant et un taux de change valides.";
            }
        }