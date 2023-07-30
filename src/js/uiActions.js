import { constants } from "./values";

// reset and show icon of the picked choice in the player's battle field
export function showPicked (picked, player) {
    const pickedIcon = document.createElement('img');
    pickedIcon.src = getPicPath(picked);
    
    // pick player's slot, empty it and add new img
    const pickedSlot = document.getElementById('picked' + player);
    while (pickedSlot.firstChild) {
        pickedSlot.removeChild(pickedSlot.firstChild);
    }
    pickedSlot.appendChild(pickedIcon);
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