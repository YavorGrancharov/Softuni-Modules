let expect = require('chai').expect;
const isSymmetric = require('../Check for Symmetry.js');

describe('Symmetry check', function () {
    it('Should return false [1,2]', function () {
        expect(isSymmetric([1,2])).to.be.equal(false)
    });
    it('Should return true [1,2,1]', function () {
        expect(isSymmetric([1,2,1])).to.be.equal(true)
    });
    it('Should return true []', function () {
        expect(isSymmetric([])).to.be.equal(true)
    });
    it('Should return true [test, 1, test]', function () {
        expect(isSymmetric(['test', 1, 'test'])).to.be.equal(true)
    });
    it('Should return true [test, 1, test]', function () {
        expect(isSymmetric(['test'])).to.be.equal(true)
    });
    it('Should return false [test, 1]', function () {
        expect(isSymmetric(['test', 1])).to.be.equal(false)
    });
    it('Should return true [{}, {}]', function () {
        expect(isSymmetric([{}, {}])).to.be.equal(true)
    });
    it('Should return false [-1, 1, 1]', function () {
        expect(isSymmetric([-1, 1, 1])).to.be.equal(false)
    });
    it('Should return false not an array', function () {
        expect(isSymmetric('test')).to.be.equal(false)
    });
});