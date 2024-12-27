document.getElementById("ticket-form").addEventListener("submit", function (e){
    e.preventDefault();

    /* Recuperare Valori dai Campi Input */
    const kilometers = document.getElementById("kilometers").value.replace(",",".");
    const age = document.getElementById("age").value.replace(",",".");

    /* Validare Dati */
    if (!kilometers || isNaN(kilometers) || kilometers <= 0 || !age || isNaN(age) || age <= 0) {
        console.error("Please enter valid value for kilometers and age");
        alert("Errore:Dati invalidi. Inserisci dati numerici per kilometri ed età");
        return;
    }

    /* Calcolare il prezzo del biglietto */
    const priceForOneKm = 0.21;
    let totalPrice = kilometers * priceForOneKm

    /* Applicare Sconti in Base all' Età */
    if (age<18) {
        totalPrice*=0.8;
    }

    else if (age>65) {
        totalPrice*=0.6;

    }

    /* Arrotondare il Prezzo Finale a Due Decimali */
    totalPrice = totalPrice.toFixed(2);


    /* Mostra il risultato */
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <div>
        <h4>Riepilogo</h4>
        <p>Chilometri: <strong>${kilometers} km</strong></p>
        <p>Età: <strong>${age}</strong></p>
        <p>Prezzo finale del Biglietto: <strong>${totalPrice}</strong></p>
        </div>
    `;

});