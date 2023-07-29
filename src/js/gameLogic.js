import { constants } from "./values";

// calculate score for P1 and P2 from recent match
// rock = 3, scissor = 2, paper = 1
export function calculateWinner (choiceP1, choiceP2) {
    let result = 'draw';
    const diff = Math.abs(choiceP1 - choiceP2);

    // scenario: draw
    if (choiceP1 == choiceP2) {
        return result;
    }
    // scenario: rock vs scissor, scissor vs paper
    else if (diff == 1) {
        if (choiceP1 > choiceP2) {
            result = constants.p1wins;
        } else {
            result = constants.p2wins;
        }
    // scenario: rock vs paper
    } else {
        if (choiceP1 > choiceP2) {
            result = constants.p2wins;
        } else {
            result = constants.p1wins;
        }
    }
    return result;
}

export function updateScores (roundResult) {
    const current = getCurrentScores();
    if (roundResult == 1) {
        current[0] = current[0] + 1;
    } else if (roundResult == -1) {
        current[0] = current[0] + 1;
    }
    return current;
}

