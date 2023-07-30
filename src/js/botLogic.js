import {
    showPicked
  } from "./uiActions";

// generate bot's choice for the round
export function startBotPick () {
    showPicked(getRandomNumber(), 2);
}

// generate a number from 1-3 
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }