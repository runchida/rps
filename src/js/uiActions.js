import { constants } from "./values";

// reset and show icon of the picked choice in the player's battle field
export function showPicked (picked, player) {
    const pickedIcon = document.createElement('img');
    pickedIcon.classList = constants.rsp[picked-1] + ' icon';
    pickedIcon.src = getPicPath(picked);
    
    // pick player's slot, empty it and add new img
    const pickedSlot = document.getElementById('picked' + player);
    emptyElement(pickedSlot);
    pickedSlot.appendChild(pickedIcon);
}

// highlight selected mode and deselect the other
export function highlightButton (mode) {
    const buttons = document.getElementById('mode-container').querySelectorAll('button');
    for(let button of buttons) {
        if(button.id == mode + '-button') {
            button.classList.add('selected-button');
        } else {
            button.classList = 'head-button';
        }
    }
}

// show different instruction text in header for current mode
export function changeModeInstruction (mode) {
    // clean instruction and add a new one
    const instruction = document.getElementById('instruction');
    instruction.textContent = getModeInstruction(mode);

} 

// remove last selection from game field
export function cleanSelections () {
    emptyElement(document.getElementById('picked1'));
    emptyElement(document.getElementById('picked2'));
}

// show current scores on the header
export function updateScoreUI (playerNumber, newScore) {
    const score = document.getElementById('score' + playerNumber);
    score.textContent = 'P' + playerNumber + ': ' + newScore;
}

function getModeInstruction (mode) {
    let instruction = '';
    switch (mode) {
        case constants.bot:
            instruction = 'Click fight to... fight! Pick up a weapon if you want to fight.'
            break;
        case constants.pvBot:
            instruction = 'Click the icon on the left side to choose your weapon!'
            break;        
        default:
            break;
    }
    return instruction;
}

// return path to icon
function getPicPath (picked) {
    let src = ''
    switch (picked) {
        case constants.rock:
            src = "../icons/rock.png";
            break;
        case constants.sciss:
            src = "../icons/sciss.png";
            break;
        case constants.paper:
            src = "../icons/paper.png";
            break;
    }
    return src;
}

// remove all childs from the element
function emptyElement (element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// add start button for BvB
export function addStartBvBButton (){

    const newButton = document.createElement('button');
    newButton.id = 'bvb-button';
    newButton.classList = 'head-button';
    
    // Text in the button
    const newButtonText = document.createElement('p');
    newButtonText.classList = 'header-text';
    newButtonText.textContent = 'Fight!'

    newButton.appendChild(newButtonText);

    const start =  document.getElementById('start-container');
    start.textContent = '';
    start.appendChild(newButton);
    return newButton;
}

export function removeBvBButton () {
    const bvbButton =  document.getElementById('bvb-button');
    if (bvbButton) {
        bvbButton.remove();
    }
}

export function unhideElement (elementID) {
    document.getElementById(elementID).classList.remove('hidden');
}

export function hideElement (elementID) {
    document.getElementById(elementID).classList.add('hidden');
}