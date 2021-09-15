import "../scss/main.scss";

import { registerSW } from "./pwa.js";
registerSW();

let counter = document.querySelector(".main__counter--js");
const buttonAdd = document.querySelector(".main__button-add--js");
const buttonSubtract = document.querySelector(".main__button-subtract--js");

const key = new Date().toISOString().slice(0, 10);

console.log(key);
console.log(counter.innerHTML);

let counterNumber;

if (!key) {
  counterNumber = 0;
  localStorage.setItem(key, counterNumber);
  counter.innerHTML = `${counterNumber}`;
  console.log("IF: " + counter.innerHTML);
} else {
  counterNumber = Number(localStorage.getItem(key));
  counter.innerHTML = `${counterNumber}`;
  console.log("ELSE: " + counter.innerHTML);
}

buttonAdd.addEventListener("click", () => {
  console.log("+1");
  counterNumber = counterNumber + 1;
  localStorage.setItem(key, counterNumber);
  counter.innerHTML = `${localStorage.getItem(key)}`;
});

buttonSubtract.addEventListener("click", () => {
  if (counterNumber >= 1) {
    console.log("-1");
    counterNumber = counterNumber - 1;
    localStorage.setItem(key, counterNumber);
    counter.innerHTML = `${localStorage.getItem(key)}`;
  }
});
