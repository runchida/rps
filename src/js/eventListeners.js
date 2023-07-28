// Interaction functionalities
addEventListener("keydown", onKeydown);


// detect key press 
// only a, s, d, j, k, l allowed
export function onKeydown(event) {
    switch (event.keyCode) {
        case 65:
            console.log('rock1');
            break;
        case 83:
            console.log('sciss1');
            break;
        case 68:
            console.log('paper1');
            break;
        case 74:
            console.log('rock2');
            break;
        case 75:
            console.log('sciss2');
            break;
        case 76:
            console.log('paper2');
            break;
        default:
            break;
    }
};