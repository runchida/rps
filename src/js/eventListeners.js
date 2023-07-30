import { showPicked } from "./uiActions";

// Interaction functionalities
document.getElementById('rock1').addEventListener('click', () => onClick('rock1'))
document.getElementById('sciss1').addEventListener('click', () => onClick('sciss1'))
document.getElementById('paper1').addEventListener('click', () => onClick('paper1'))
console.log('Event listeners added')

// handles click on player choice
function onClick(buttonId) {;
    switch (buttonId) {
        case 'rock1':
          console.log('rock');
          showPicked('rock', 1);
            break;
          case 'sciss1':
            console.log('sciss');
            showPicked('sciss', 1);
            break;
          case 'paper1':
            console.log('paper');
            showPicked('paper', 1);
            break;
        default:
          console.log(buttonId);
      }
}