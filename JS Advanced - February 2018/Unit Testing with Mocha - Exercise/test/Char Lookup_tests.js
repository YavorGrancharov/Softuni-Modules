let expect = require('chai').expect;
const lookupChar = require('../Char Lookup.js');

describe('Char Lookup tests', function () {
    it('Should return: charAt(0) (\'test\', 0)', function () {
        expect(lookupChar('test',0)).to.be.equal('t')
    });
    it('Should return: charAt(3) (\'test\', 3)', function () {
        expect(lookupChar('test',3)).to.be.equal('t')
    });
    it('Should return: charAt(3) (\'test\', 3)', function () {
        expect(lookupChar('test',1)).to.be.equal('e')
    });
    it('Should return: undefined (2, \'test\')', function () {
        expect(lookupChar(2,'test')).to.be.equal(undefined)
    });
    it('Should return: Incorrect index (\'test\', -1)', function () {
        expect(lookupChar('test',-1)).to.be.equal('Incorrect index')
    });
    it('Should return: Incorrect index (\'test\', 50)', function () {
        expect(lookupChar('test',50)).to.be.equal('Incorrect index')
    });
    it('Should return: Incorrect index (\'test\', 4)', function () {
        expect(lookupChar('test',4)).to.be.equal('Incorrect index')
    });
    it('Should return: undefined ([0,1,2], 3)', function () {
        expect(lookupChar([0,1,2],3)).to.be.equal(undefined)
    });
    it('Should return: undefined (\'test\' \'test\')', function () {
        expect(lookupChar('test','test')).to.be.equal(undefined)
    });
    it('Should return: undefined (\'test\' 4.4)', function () {
        expect(lookupChar('test',4.4)).to.be.equal(undefined)
    });
});