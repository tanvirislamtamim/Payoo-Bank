document.getElementById("Cash-out").style.display= "none";
document.getElementById("addMoney").style.display= "none";
document.getElementById("add-money-box").addEventListener("click", 
    function(){
        document.getElementById("Cash-out").style.display= "none";
        document.getElementById("addMoney").style.display= "block";
    })


    document.getElementById("cash-out-main").addEventListener("click",
        function(){
            document.getElementById("Cash-out").style.display= "block";
            document.getElementById("addMoney").style.display= "none";
        }
    )