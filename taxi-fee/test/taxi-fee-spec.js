var expect = require('chai').expect;
var taxiFee = require('../taxi-fee');

function expects(inputArr, expectArr) {
    inputArr.map(function(input, idx) {
        expect(taxiFee.charge(input[0], input[1])).to.equal(expectArr[idx]);
    });
}

function expectErr(kilometers, waitingMinutes, msg) {
    try {
        taxiFee.charge(kilometers, waitingMinutes);
    } catch (e) {
        expect(e.message).to.equal(msg);
    }
}

describe('taxiFee#charge', function() {
    it('should charge 6 RMB within 2 kilometers without waiting time', function() {
        expects([[1, 0], [1.1, 0.0], [2, 0], [0, 0]], [6, 6, 6, 6])
    });

    it('should charge 0.25 RMB per waiting minute', function() {
        expects([[1, 1], [1, 2], [1.1, 1.1], [2, 2], [0, 1], [0, 3]], [6, 7, 6, 7, 6, 7])
    });

    it('should charge 0.8 RMB per kilometer within 8 kilometers', function() {
        expects([[3, 0], [4, 0], [2.5, 0], [2.6, 0], [2.7, 0], [3, 1], [3, 3]], [7, 8, 6, 6, 7, 7, 8]);
    });

    it('should charge 1.2 RMB per kilometer for distances over 8 kilometers', function() {
        expects([[9, 0], [10, 0], [9.5, 0], [9, 2], [100, 2.3]], [12, 13, 13, 13, 122]);
    });

    it('should throw error when given an invalid distance', function() {
        var msg = 'Invalid charging distance!';
        expectErr(-4, 2, msg);
        expectErr('abc', 2, msg);
        expectErr({}, 2, msg);
        expectErr(null, 2, msg);
        expectErr(undefined, 2, msg);
    });

    it('should throw error when given an invalid waiting time', function() {
        var msg = 'Invalid waiting time!';
        expectErr(4, -2, msg);
        expectErr(4, 'abc', msg);
        expectErr(4, undefined, msg);
        expectErr(4, null, msg);
        expectErr(4, false, msg);
        expectErr(4, {}, msg);
    });
});