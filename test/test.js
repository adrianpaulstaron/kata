var assert = require('assert');
var { scoreTotal } = require('../source/bowlingscore')

console.log(scoreTotal([[1, 3], [2, 0]]))

describe('Testing', function () {
    describe('Bowling scorer', function () {
        it('should return score when given a throw', function () {
            assert.equal(scoreTotal(1), 1);
        });
        it('should return score sum when given a turn', function () {
            assert.equal(scoreTotal([[3,6]]), 9);
        });
        it('should return score sum when given all turns', function () {
            assert.equal(scoreTotal([[3,6], [4,2], [4,2], [4,2], [4,2], [4,2], [4,2], [4,2], [4,2], [4,2]]), 63);
        });
        it('should take into account a spare in the first turn', function () {
            assert.equal(scoreTotal([[5,5], [1,3]]), 15);
        });
        it('should take into account spares in a full game', function () {
            assert.equal(scoreTotal([[4,6], [1,0], [0,0], [0,0], [0,0], [0,0], [4,6], [1,0], [0,0], [0,0]]), 24);
        });
        it('should take into account a strike', function () {
            assert.equal(scoreTotal([[10,0], [1,2]]), 16);
        });
        it('should take into account a bonus throw', function () {
            assert.equal(scoreTotal([[4,6], [1,0], [0,0], [0,0], [0,0], [0,0], [4,6], [1,0], [0,0], [10,0], [5,2]]), 48);
        });
        it('should work with a 3-throw turn', function () {
            assert.equal(scoreTotal([[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [1,2,3]]), 6);
        });
        // it('should work with one strike followed by two non-strikes', function () {
        //     assert.equal(scoreTotal([[10,0], [1,2]], 16);
        // });
        // it('should work with a perfect game', function () {
        //     assert.equal(scoreTotal([[10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,0], [10,10,10]]), 300);
        // });
    }); 
}); 