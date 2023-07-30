const assert = require('chai').assert
import { calculateWinner, updateScores } from "../src/js/gameLogic";
import { constants } from "../src/js/values";


// test data
const p1p2combi = [[1, 1], [1, 2], [1, 3],
[2, 1], [2, 2], [2, 3],
[3, 1], [3, 2], [3, 3]
]

const roundResults = [constants.draw, constants.p2wins, constants.p1wins, constants.p1wins, constants.draw, constants.p2wins, constants.p2wins, constants.p1wins, constants.draw]

describe('Test score logic and results', () => {
    it('should show correct match result', () => {
        for(let i=0; i <p1p2combi.length; i++) {
            console.log('Iteration: ' + i)
            assert.equal(calculateWinner(p1p2combi[i][0], p1p2combi[i][1]), roundResults[i])
        }
      }),
      it('should calculate the right score update', () => {
        const current = [1, 2];
        const p1winRes = [2, 2];
        const p2winRes = [1, 3];
        const drawRes = [1, 2];
            assert.equal(updateScores(current, constants.p1wins).every((element, index) => element == p1winRes[index]), true);
            assert.equal(updateScores(current, constants.p2wins).every((element, index) => element == p2winRes[index]), true);
            assert.equal(updateScores(current, constants.draw).every((element, index) => element == drawRes[index]), true);
      })
    })