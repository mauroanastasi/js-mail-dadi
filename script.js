// creo le variabile 
const emailGroup = [`bella@hotmail.com`, `marco@hotmail.it`, `rambo@gmail.com`, `giorgia@yahoo.it`, `nando@hotmail.com`];

let yourEmail = (prompt(`Inserisci la tua email personale:`));

// corpo dell'esercizio
let result = false 
for(i=0; result === false && i<emailGroup.length; i++){
    if(emailGroup[i] === yourEmail){
        result = true;
    
    }