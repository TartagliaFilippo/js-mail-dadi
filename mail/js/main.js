// CREO UN ARRAY CON LE VARIE MAIL
const emailIndex = [
  "admin@email.com",
  "example@email.com",
  "admin@libero.it",
  "example@hotmail.it",
  "admin@america.us",
];
console.table(emailIndex);

// CHIEDO ALL'UTENTE LA MAIL CHE VUOLE INSERIRE
const userEmail = prompt("inserici una mail");
console.log(userEmail);

// INSERICO UN CONTROLLO DELLE MAIL DISPONIBILI
for (let i = 0; i < emailIndex.length; i++) {
  console.log("variabile i " + i);

  if (userEmail === emailIndex) {
    console.log("la mail è corretta");
  } else {
    console.log("la mail è sbagliata");
  }
}
