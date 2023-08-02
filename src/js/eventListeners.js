import { showPicked, changeModeInstruction, cleanSelections, updateScoreUI, addStartBvBButton, removeBvBButton, highlightButton } from "./uiActions";
import { constants, getCurrentScores, setCurrentScores } from "./values";
import { getRandomNumber} from "./botLogic";
import { calculateWinner, updateScores } from "./gameLogic";

// Interaction functionalities

// hide game  area on start
document.getElementById('game-area').classList.add('hidden');

// add event listeners on every choices for P1
for(let choice of constants.rsp) {
  document.getElementById(choice + 1).addEventListener('click', () => startPvBGame(choice + 1));
}

document.getElementById(constants.bot + '-button').addEventListener('click', () => onClickMode(constants.bot));
document.getElementById(constants.pvBot + '-button').addEventListener('click', () => onClickMode(constants.pvBot));
document.getElementById('restart').addEventListener('click', onClickRestart);
console.log('Event listeners added');

// start game after when mode is selected
function onClickMode (mode) {
  switch (mode) {
    case constants.bot:
      activateBvB();
      break;
    case constants.pvBot:
      activatePvB();
      break;
    default:
      break;
}

  // highlight button
  highlightButton (mode);
  // cleanup and show fresh game area
  cleanSelections();
  changeModeInstruction(mode);
  document.getElementById('game-area').classList.remove('hidden');
}

// remove start button, if there is one
function activatePvB () {
  removeBvBButton();
}

// add start button for bot games
// highlight mode
function activateBvB () {
  const newButton = addStartBvBButton();
  newButton.addEventListener('click', startBvBGame);
}

// generate bot's choice and show picked choice for both players
// not football :D 
function startBvBGame () {
  const choice1 = activateBot(1);
  const choice2 = activateBot(2);

  getAndUpdateRoundResult(choice1, choice2);
}

// start match between player and Bot
function startPvBGame(buttonId) {
  activatePvB();

  let choice1 = 0;
  switch (buttonId) {
    case 'rock1':
      console.log('rock');
      choice1 = constants.rock;
      showPicked(constants.rock, 1);
      break;
    case 'sciss1':
      console.log('sciss');
      choice1 = constants.sciss;
      showPicked(constants.sciss, 1);
      break;
    case 'paper1':
      console.log('paper');
      choice1 = constants.paper;
      showPicked(constants.paper, 1);
      break;
    default:
      console.log(buttonId);
      break;
  }

  // bot is player 2 on Player vs Bot mode
  const choice2 = activateBot(2);

  getAndUpdateRoundResult(choice1, choice2);
}

function getAndUpdateRoundResult(choice1, choice2) {
  // calculate round result and update scores
  const roundResult = calculateWinner(choice1, choice2);
  const newScores = updateScores(getCurrentScores(), roundResult);
  setCurrentScores(newScores);
  for (let i = 0; i<2; i++) {
      updateScoreUI(i+1, newScores[i]);
  }
}

// make random choice and show in UI
export function activateBot(playerNumber) {
  const choice = getRandomNumber(); 
  showPicked(choice, playerNumber);
  return choice
}

// restart game by refreshing page
function onClickRestart()  {
  location.reload();
}