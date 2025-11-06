document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amount = document.getElementById("ammount").value;
    const convertedAmmount = parseFloat(amount);
    const pin = document.getElementById("Pin-2").value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const accountNumber =document.getElementById("account-number").value;
    
    const convertedPin = parseInt(pin);
    if(convertedPin === 1234){
        const sum = convertedAmmount + convertedMainbalance;
        document.getElementById('main-balance').innerText= sum;

        const container =document.getElementById("transection-container");
        const date = Date().toLocaleString();

        const p =document.createElement("p");
        p.innerText =`✅Added ${amount} from ${accountNumber} account ${date}`
        
        container.appendChild(p);
    }
    else{
        
    }

})