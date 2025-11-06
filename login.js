document.getElementById("login-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        
        const pin = document.getElementById("Pin-1").value;
        
        if(accountNumber.length == 11){
            if(pin==='1234'){
                window.location.href='main.html'
            }
            else{
                alert('na thik nai')
            }
        }
        else{
            alert("Need valid Account number")
        }
    
})