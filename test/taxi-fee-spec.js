var expect = require('chai').expect;
var taxiFee = require('../taxi-fee');

describe('taxiFee#charge', function() {
    it('should charge 6 RMB within 2 kilometers without waiting time', function() {
        expect(taxiFee.charge(1, 0)).to.equal(6);
        expect(taxiFee.charge(2, 0)).to.equal(6);
        expect(taxiFee.charge(0, 0)).to.equal(6);
    });
})