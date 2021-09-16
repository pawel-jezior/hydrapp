import "../scss/main.scss";

import { registerSW } from "./pwa.js";
registerSW();

let counter = document.querySelector(".main__counter--js");
const buttonAdd = document.querySelector(".main__button-add--js");
const buttonSubtract = document.querySelector(".main__button-subtract--js");

const key = new Date().toLocaleString().slice(0, 10);

console.log(key);
console.log(counter.innerHTML);

let counterNumber;

if (!key) {
  counterNumber = 0;
  localStorage.setItem(key, counterNumber);
  counter.innerHTML = `${counterNumber}`;
} else {
  counterNumber = Number(localStorage.getItem(key));
  counter.innerHTML = `${counterNumber}`;
}

buttonAdd.addEventListener("click", () => {
  counterNumber = counterNumber + 1;
  localStorage.setItem(key, counterNumber);
  counter.innerHTML = `${localStorage.getItem(key)}`;
});

buttonSubtract.addEventListener("click", () => {
  if (counterNumber >= 1) {
    counterNumber = counterNumber - 1;
    localStorage.setItem(key, counterNumber);
    counter.innerHTML = `${localStorage.getItem(key)}`;
  }
});
