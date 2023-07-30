import { showPicked } from "./uiActions";

// generate bot's choice and show picked choice for the chosen player
export function startBotPick (playerNumber) {
    showPicked(getRandomNumber(), playerNumber);
}

// generate a number from 1-3 
function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }