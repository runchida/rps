const assert = require('chai').assert
import { calculateWinner } from "../src/js/gameLogic";
import { constants } from "../src/js/values";


// test data
const p1p2combi = [[1, 1], [1, 2], [1, 3],
[2, 1], [2, 2], [2, 3],
[3, 1], [3, 2], [3, 3]
]

const roundResults = [constants.draw, constants.p2wins, constants.p1wins, constants.p1wins, constants.draw, constants.p2wins, constants.p2wins, constants.p1wins, constants.draw]

describe('My test suite', () => {
    it('should win', () => {
        for(let i=0; i <p1p2combi.length; i++) {
            console.log('Iteration: ' + i)
            assert.equal(calculateWinner(p1p2combi[i][0], p1p2combi[i][1]), roundResults[i])
        }
      })
    })