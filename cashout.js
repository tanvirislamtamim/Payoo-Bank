document.getElementById("cashout").addEventListener("click",
    function(event){
        event.preventDefault();
        const pin = document.getElementById("casout-Pin-2").value;
        const convertedPin  = parseInt(pin);
        const ammount = document.getElementById("cashout-ammount").value;
        const ConvertedAmmount = parseFloat(ammount);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        const accountNumber = document.getElementById("account-number").value;

        
        console.log(selectedBank);


       if(ConvertedAmmount >convertedMainBalance){
        alert("Enfution Balance");
        return;
       }
        if(convertedPin === 1234){
            const sum = convertedMainBalance - ConvertedAmmount;
            document.getElementById("main-balance").innerText= sum;

            const container = document.getElementById("transection-container");
            const p = document.createElement("p");
        const date = new Date().toLocaleString();
        p.innerText = `✅ Cashout ${ammount} from  ${accountNumber} account on ${date}`;
        container.appendChild(p);
        }
        else{
            alert("Enter valid pin");
        }
    }
)