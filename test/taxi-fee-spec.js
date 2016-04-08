var expect = require('chai').expect;
var taxiFee = require('../taxi-fee');

describe('taxiFee#charge', function() {
    it('should charge 6 RMB within 2 kilometers without waiting time', function() {
        expect(taxiFee.charge(1, 0)).to.equal(6);
        expect(taxiFee.charge(1.1, 0.0)).to.equal(6);
        expect(taxiFee.charge(2, 0)).to.equal(6);
        expect(taxiFee.charge(0, 0)).to.equal(6);
    });
    
    it('should charge 0.25 RMB per waiting minute', function() {
        expect(taxiFee.charge(1, 1)).to.equal(6);
        expect(taxiFee.charge(1, 2)).to.equal(7);    
        expect(taxiFee.charge(1.1, 1.1)).to.equal(6);
        expect(taxiFee.charge(2, 2)).to.equal(7);
        expect(taxiFee.charge(0, 1)).to.equal(6);
        expect(taxiFee.charge(0, 3)).to.equal(7);
    });
    
   it('should charge 0.8 RMB per kilometer within 8 kilometers', function() {
       expect(taxiFee.charge(3, 0)).to.equal(7);
       expect(taxiFee.charge(4, 0)).to.equal(8);
       expect(taxiFee.charge(2.5, 0)).to.equal(6);
       expect(taxiFee.charge(2.6, 0)).to.equal(6);
       expect(taxiFee.charge(2.7, 0)).to.equal(7);
       expect(taxiFee.charge(3, 1)).to.equal(7);
       expect(taxiFee.charge(3, 3)).to.equal(8);
   });
   
   it('should charge 1.2 RMB per kilometer for distances over 8 kilometers', function() {
       expect(taxiFee.charge(9, 0)).to.equal(12);
       expect(taxiFee.charge(10, 0)).to.equal(13);
       expect(taxiFee.charge(9.5, 0)).to.equal(13);
       expect(taxiFee.charge(9, 2)).to.equal(13);
       expect(taxiFee.charge(100, 2.3)).to.equal(122);
   });
   
   it('should throw error when given negative distance', function() {
       var msg = 'Invalid charging distance!';
       expect(taxiFee.charge).to.throw(msg);
       
       try {
           taxiFee.charge(-4, 2);
       } catch (e) {
           expect(e.message).to.equal(msg);
       }
   });
})