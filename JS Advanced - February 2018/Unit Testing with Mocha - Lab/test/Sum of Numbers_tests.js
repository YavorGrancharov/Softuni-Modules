let expect = require('chai').expect;
const sum = require('../Sum of Numbers.js');

describe('Sum', function () {
    it('Should return 3 [1,2]', function () {
        expect(sum([1,2])).to.be.equal(3)
    });
    it('Should return 0 []', function () {
        expect(sum([])).to.be.equal(0)
    });
    it('Should return 1 [1]', function () {
        expect(sum([1])).to.be.equal(1)
    });
    it('Should return 3 [1,2]', function () {
        expect(sum([1,2])).to.be.equal(3)
    });
    it('Should return 3.15 [-1,3.15,1]', function () {
        expect(sum([-1,3.15,1])).to.be.equal(3.15)
    });
    it('Should return string NaN', function () {
        expect(sum('test')).to.be.NaN
    })
});