// // creo le variabile 
// const emailGroup = [`bella@hotmail.com`, `marco@hotmail.it`, `rambo@gmail.com`, `giorgia@yahoo.it`, `nando@hotmail.com`];

// let yourEmail = (prompt(`Inserisci la tua email personale:`));

// // corpo dell'esercizio
// let result = false 
// for(i=0; result === false && i<emailGroup.length; i++){
//     if(emailGroup[i] === yourEmail){
//         result = true;
    
//     }

// // risultato
// }
// if(result == true)
//     console.log(`${yourEmail} è un email registrata per la festa!! Buon divertimento`)

// else
// console.log(`non hai il permesso di accedere alla festa :(`)
// ---------------------------------------------------------------------------------------------------------------------------

let numberUser = Math.floor(Math.random() * 6) + 1;
console.log(numberUser)
let numberComputer = Math.floor(Math.random() * 6) + 1;
console.log(numberComputer)

if(numberUser>numberComputer){
    console.log(`Hai vinto compplimenti sei un vero/a pro`)
}
else if(numberComputer>numberUser){
    console.log(`AAAARRRRGH HO VINTO CONQUISTERO' IL MONDO (hai perso il computer ti ha sopraffatto)` )
}
else{
    console.log(`oh noooo...state combattendo una battaglia che non finirà mai`)
}
