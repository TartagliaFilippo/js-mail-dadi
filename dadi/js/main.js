// DEFINISCO LE VARIE FACCE DEL DADO
const diceFaces = [1, 2, 3, 4, 5, 6];

// CHIEDO DI INSERIRE UN NUMERO DA 1 a 6
const userChoice = prompt("inserisci un numero da 1 a 6");

// GENERO UN NUMRO CASUALE DA 1 A 6
const randomNumber = Math.floor(Math.random() * diceFaces.length) + 1;

// ASSOCIO IL NUMERO AL MIO ARRAY
const randomValue = diceFaces[randomNumber];
console.log(randomValue);

// OUTPUT INDEX
const userNumber = document.getElementById("user-number");
const computerNumber = document.getElementById("computer-number");
const result = document.getElementById("result");

userNumber.innerHTML = userChoice;
computerNumber.innerHTML = randomNumber;

// FACCIO LA COMPARAZIONE TRA IL NUMERO RANDOM E QUELLO DELL'UTENTE
if (userChoice > randomNumber) {
  result.innerHTML = "HAI VINTO";
} else if (userChoice < randomNumber) {
  result.innerHTML = "HAI PERSO";
} else if (userChoice == randomNumber) {
  result.innerHTML = "PAREGGIO";
}
