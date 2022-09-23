/*Testing
const titel = document.getElementById("titel");
const daten = document.getElementById("daten");
const bild = document.getElementsByName("img");

let meineUrl = "https://randomuser.me/api/?results=5";
fetch (meineUrl)
.then(meinObjekt => meinObjekt.text())
.then(meinText => document.getElementById("demo").innerHTML = meinText);
*/

fetch("https://randomuser.me/api/?results=1&nat=de")
  .then((response) => response.json())
  .then((data) => parseData(data));
const parseData = (data) => {
  const result = data.results[0];
  const src = result.picture.large;
  const name = result.name.first;
  const lastName = result.name.last;
  const location = result.location.city + ", " + result.location.country;
  const phone = result.phone;
  const email = result.email;
  const alta = result.dob.age;
  const passwort = result.login.password;
  updateNAME(src, name, lastName, location, phone, email, alta, passwort);
};
const updateNAME = (src, name, lastName, location, phone, email, alta, passwort) => {
  document.querySelector("img").setAttribute("src", src);
  document.querySelector("#daten").textContent = name + " " + lastName;
  document.querySelector("#titel").textContent = "Hallo, ich bin";
  console.log(email);
  console.log(phone);
  console.log(alta);

  var x = document.getElementById("name");
x.addEventListener("mouseover", meinName);
function meinName() {
  document.getElementById("titel").innerHTML = "Hallo, ich bin";
  document.querySelector("#daten").textContent = name + " " + lastName;
}

var x = document.getElementById("email");
x.addEventListener("mouseover", meineEmail);
function meineEmail() {
  document.getElementById("titel").innerHTML = "Meine E-mail Adresse lautet";
  document.querySelector("#daten").textContent = email;
}

var x = document.getElementById("geburtstag");
x.addEventListener("mouseover", meinBday);
function meinBday() {
  document.getElementById("titel").innerHTML = "Ich bin schon";
  document.querySelector("#daten").textContent = alta + " Jahre alt";
}

var x = document.getElementById("adresse");
x.addEventListener("mouseover", meineAdr);
function meineAdr() {
  document.getElementById("titel").innerHTML = "Ich wohne in";
  document.querySelector("#daten").textContent = location;
}

var x = document.getElementById("telefon");
x.addEventListener("mouseover", meinTel);
function meinTel() {
  document.getElementById("titel").innerHTML = "Meine Telefonnumer ist";
  document.querySelector("#daten").textContent = phone;
}

var x = document.getElementById("passwort");
x.addEventListener("mouseover", meinPass);
function meinPass() {
  document.getElementById("titel").innerHTML = "Mein <b>geheimes</b> Passwort lautet";
  document.querySelector("#daten").textContent = passwort;
}
};

document.querySelector('a').onclick = function() {
    location.reload();
  }
