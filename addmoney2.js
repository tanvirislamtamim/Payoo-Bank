document.getElementById('add-money').addEventListener('click', function(event) {
    event.preventDefault();

    const amount = document.getElementById("ammount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("Pin-2").value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const accountNumber = document.getElementById("account-number").value;

    const convertedPin = parseInt(pin);

     if(convertedAmount <0){
            alert("Not allowed Negative Number");
            return;
        }


    if (convertedPin === 1234) {
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById('main-balance').innerText = sum.toFixed(2);

        const container = document.getElementById("transection-container");

        const p = document.createElement("p");
        const date = new Date().toLocaleString();
        p.innerText = `✅ Added ${amount} from ${accountNumber} account on ${date}`;

        container.appendChild(p);

        // clear inputs
        document.getElementById("ammount").value = "";
        document.getElementById("account-number").value = "";
        document.getElementById("Pin-2").value = "";
    } else {
        alert("❌ Wrong PIN! Please try again.");
    }
});
