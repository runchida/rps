import {
  showPicked
} from "./uiActions";
import { constants } from "./values";
import {startBotPick} from "./botLogic";

// Interaction functionalities

// add event listeners on every choices for both players
const choices = ['rock', 'sciss', 'paper'];
for(let choice of choices) {
  for(let i = 1; i<=2; i++) {
    document.getElementById(choice + i).addEventListener('click', () => onClick(choice + i));
  }
}
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
  startBotPick();
}