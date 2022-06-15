const sending = document.querySelector("#button");



const kmPrice = 0.26;

let message;
let price;

sending.addEventListener("click", function(){
    let kmToGo = document.getElementById("input-km").value;
    console.log(kmToGo);

    let yourAge = document.getElementById("input-age").value;
    console.log(yourAge);

    let normalRunning = kmToGo * kmPrice;
    console.log(normalRunning);

    if ( (isNaN(yourAge) == true)) {
        console.log("numero non trovato");
    } else {
        if (yourAge < 18){
            price = normalRunning - normalRunning * 15 / 100;
            message = "Abbiamo confrontato i prezzi che si trovano sui siti di viaggi è questo e il costo medio a biglietto, essendo minorenne ha diritto allo sconto del 15% sul prezzo del biglietto: ";
            document.getElementById("ticket-price").innerHTML =  message +  price.toFixed(2) + "€";
        } else if (yourAge > 65) {
            price = normalRunning - normalRunning * 35 / 100;
            message = "Abbiamo confrontato i prezzi che si trovano sui siti di viaggi è questo e il costo medio a biglietto, essendo over 65 ha diritto allo sconto del 35% sul prezzo del biglietto: ";
            document.getElementById("ticket-price").innerHTML =  message +  price.toFixed(2) + "€";
        } else {
            message = "Abbiamo confrontato i prezzi che si trovano sui siti di viaggi è questo e il costo medio a biglietto: "
            document.getElementById("ticket-price").innerHTML = message + normalRunning.toFixed(2) + "€";
        }
    } 
});
  

sending.addEventListener("click", function(){
    let userName = document.getElementById("input-name").value;
    console.log(userName);

    message = "Grazie per aver scelto il nostro calcolatore signor ";
    document.getElementById("testo").innerHTML = message + userName;
});



