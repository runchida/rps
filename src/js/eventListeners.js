// Interaction functionalities
addEventListener("keydown", onKeydown);

// detect key press 
// only a, s, d for P1 and j, k, l for P2 allowed
export function onKeydown(event) {
    let choiceP1 = 0;
    let choiceP2 = 0;
    switch (event.keyCode) {
        case 65:
            console.log('rock1');
            choiceP1 = rock;
            break;
        case 83:
            console.log('sciss1');
            choiceP1 = sciss;
            break;
        case 68:
            console.log('paper1');
            choiceP1 = paper;
            break;
        case 74:
            console.log('rock2');
            choiceP2 = rock;
            break;
        case 75:
            console.log('sciss2');
            choiceP2 = sciss;
            break;
        case 76:
            console.log('paper2');
            choiceP2 = paper;
            break;
        default:
            break;
    }
};