/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumbers();
};

let generateRandomNumbers = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  let randomCardNumbers = numbers[Math.floor(Math.random() * 12)];

  return randomCardNumbers;
};

let generateRandomSuit = () => {
  let suit = ["spades", "heart", "clubs", "diamond"];

  let randomCardSuit = suit[Math.floor(Math.random() * 4)];

  return randomCardSuit;
};
