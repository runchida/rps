// constants for rsp values
export const constants = {
    'rock': 3,
    'sciss': 2,
    'paper': 1, 
    'draw': 'draw',
    'p1wins': 'p1wins',
    'p2wins': 'p2wins',

}

// scores P1, P2
let currentScores = [0, 0];

// return current scores 
export function getCurrentScores () {
    return currentScores;
}