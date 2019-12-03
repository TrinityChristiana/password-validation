var value;

var password = "MsDoubtFire";

function getPassword(event){
    event.preventDefault();

    let value = document.getElementById("inputPassword").value;  
    
    var patt = /[^A-z0-9]/;
    var result = patt.test(value);

    if(result === true){
        document.getElementById("message").innerHTML = "Your input contains special characters. That's a no no!";
    } else if(value === password) {
        document.getElementById("message").innerHTML = "You da masta.";
    } else {
        document.getElementById("message").innerHTML = "Nope.";
    }

}

let subButton = document.getElementById("subButton");

subButton.addEventListener("click", (function(event) {
    getPassword(event);
}));

document.getElementById("inputPassword").addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        getPassword(e);
    }
});

