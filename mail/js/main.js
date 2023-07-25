// CREO UN ARRAY CON LE VARIE MAIL
const emailIndex = [
  "admin@email.com",
  "example@email.com",
  "admin@libero.it",
  "example@hotmail.it",
  "admin@america.us",
];
console.table(emailIndex);

const correctEmail = document.getElementById("correct-mail");

// CHIEDO ALL'UTENTE LA MAIL CHE VUOLE INSERIRE
const userEmail = prompt("inserici una mail");
console.log(userEmail);

//INSERISCO UNA VARIABILE DI CONTROLLO
let checkVariable = false;
console.log("checkfirst" + checkVariable);

// INSERICO UN CONTROLLO DELLE MAIL DISPONIBILI
for (let i = 0; i < emailIndex.length; i++) {
  if (userEmail === emailIndex[i]) {
    checkVariable = true;
  }
  console.log("checksecond" + checkVariable);
}

if ((checkVariable = true)) {
  correctEmail.innerHTML = userEmail;
} else {
  alert("ricarica la pagina e scrivi una mail corretta");
}
