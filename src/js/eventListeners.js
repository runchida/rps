import { showPicked, changeModeInstruction, cleanSelections } from "./uiActions";
import { constants } from "./values";
import {startBotPick} from "./botLogic";

// Interaction functionalities

// hide game area on start
document.getElementById('game-area').classList.add('hidden');

// add event listeners on every choices for P1
const choices = ['rock', 'sciss', 'paper'];
for(let choice of choices) {
    document.getElementById(choice + 1).addEventListener('click', () => onClick(choice + 1));
}
document.getElementById('bot-button').addEventListener('click', () => onClickMode(constants.bot));
document.getElementById('pVBot-button').addEventListener('click', () => onClickMode(constants.pvBot));
console.log('Event listeners added')

// handles click on player choice
function onClick(buttonId) {
  switch (buttonId) {
    case 'rock1':
      console.log('rock');
      showPicked(constants.rock, 1);
      break;
    case 'sciss1':
      console.log('sciss');
      showPicked(constants.sciss, 1);
      break;
    case 'paper1':
      console.log('paper');
      showPicked(constants.paper, 1);
      break;
    default:
      console.log(buttonId);
      break;
  }

  // bot is player 2 on Player vs Bot mode
  startBotPick(2);
}

// start game after when mode is selected
function onClickMode (mode) {
  switch (mode) {
    case constants.bot:
      startBotPick(1);
      startBotPick(2);
      break;
    case constants.pvBot:
      // show player 
      cleanSelections();
      break;
    default:
      break;
    }

  // cleanup and show fresh game area
  changeModeInstruction(mode);
  document.getElementById('game-area').classList.remove('hidden');
}