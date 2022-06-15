const sending = document.querySelector("#button");

const kmPrice = 0.26;

let message;
let price;

sending.addEventListener("click", function(){
    kmToGo = document.getElementById("input-km").value;
    console.log(kmToGo);

    yourAge = document.getElementById("input-age").value;
    console.log(yourAge);

    let normalRunning = kmToGo * kmPrice;
    console.log(normalRunning);

    if ( (isNaN(yourAge) == true)) {
        console.log("numero non trovato");
    } else {
        if (yourAge < 18){
            price = normalRunning - normalRunning * 15 / 100;
            message = "Essendo minorenne ha diritto allo sconto del 15% del prezzo del biglietto: ";
            document.getElementById("ticket-price").innerHTML =  message +  price.toFixed(2) + "€";
        } else if (yourAge > 65) {
            price = normalRunning - normalRunning * 35 / 100;
            message = "Essendo over 65 ha diritto allo sconto del 35% del prezzo del biglietto: ";
            document.getElementById("ticket-price").innerHTML =  message +  price.toFixed(2) + "€";
        } else {
            message = "Il prezzo del biglietto è: "
            document.getElementById("ticket-price").innerHTML = message + normalRunning.toFixed(2) + "€";
        }
    } 
}); 
  








