import { calculateWinner, updateScores } from "./gameLogic";
import { showPicked, updateScoreUI } from "./uiActions";
import { getCurrentScores } from "./values";

// generate a number from 1-3 
export function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
  }

// generate bot's choice and show picked choice for both players
  export function startBotGame () {
    const choice1 = activateBot(1);
    const choice2 = activateBot(2);

    // calculate round result and update scores
    const roundResult = calculateWinner(choice1, choice2);
    const newScores = updateScores(getCurrentScores, roundResult);
    for (let i = 0; i<1; i++) {
        updateScoreUI(i+1, newScores[i]);
    }
  }

  // make random choice and show in UI
  export function activateBot(playerNumber) {
    const choice = getRandomNumber(); 
    showPicked(choice, playerNumber);
    return choice
  }