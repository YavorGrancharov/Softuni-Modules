let expect = require('chai').expect;
const mathEnforcer = require('../Math Enforcer.js');

describe('Math Enforcer', function () {
    it('NaN should return undefined (string)', function () {
        expect(mathEnforcer.addFive('test')).to.be.equal(undefined)
    });
    it('Should return 10 (5)', function () {
        expect(mathEnforcer.addFive(5)).to.be.equal(10)
    });
    it('Should return 10.5 (5.5)', function () {
        expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5)
    });
    it('Should return 0 (-5)', function () {
        expect(mathEnforcer.addFive(-5)).to.be.equal(0)
    });
    it('Should return 0 (-5.5)', function () {
        expect(mathEnforcer.addFive(-5.5)).to.be.equal(-0.5)
    });
    it('NaN should return undefined (string)', function () {
        expect(mathEnforcer.subtractTen('test')).to.be.equal(undefined)
    });
    it('Should return 0 (10)', function () {
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0)
    });
    it('Should return 0.5 (10.5)', function () {
        expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5)
    });
    it('Should return -20 (-10)', function () {
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20)
    });
    it('Should return -20 (-10.5)', function () {
        expect(mathEnforcer.subtractTen(-10.5)).to.be.equal(-20.5)
    });
    it('NaN should return undefined (string, 2)', function () {
        expect(mathEnforcer.sum('test', 2)).to.be.equal(undefined)
    });
    it('NaN should return undefined (2, string)', function () {
        expect(mathEnforcer.sum(2, 'test')).to.be.equal(undefined)
    });
    it('NaN should return undefined (string, string)', function () {
        expect(mathEnforcer.sum('test', 'test')).to.be.equal(undefined)
    });
    it('Should return 4 (2, 2)', function () {
        expect(mathEnforcer.sum(2, 2)).to.be.equal(4)
    });
    it('Should return 4.2 (2.2, 2)', function () {
        expect(mathEnforcer.sum(2.2, 2)).to.be.equal(4.2)
    });
    it('Should return 4.2 (2, 2.2)', function () {
        expect(mathEnforcer.sum(2.2, 2)).to.be.equal(4.2)
    });
    it('Should return 0 0 (2, -2)', function () {
        expect(mathEnforcer.sum(2, -2)).to.be.equal(0)
    });
    it('Should return -4.2 (-2.2, -2)', function () {
        expect(mathEnforcer.sum(-2.2, -2)).to.be.equal(-4.2)
    });
    it('Should return 0 (-2, 2)', function () {
        expect(mathEnforcer.sum(-2, 2)).to.be.equal(0)
    });
    it('Should return -4 (-2, -2)', function () {
        expect(mathEnforcer.sum(-2, -2)).to.be.equal(-4)
    });
    it('Should return 0.20000000000000018 (2.2, -2)', function () {
        expect(mathEnforcer.sum(2.2, -2)).to.be.equal(0.20000000000000018)
    });
    it('Should return -0.20000000000000018 (-2.2, 2)', function () {
        expect(mathEnforcer.sum(-2.2, 2)).to.be.equal(-0.20000000000000018)
    });
    it('Should return 4.4 (2.2, 2.2)', function () {
        expect(mathEnforcer.sum(2.2, 2.2)).to.be.equal(4.4)
    });
    it('Should return -4.4 (-2.2, -2.2)', function () {
        expect(mathEnforcer.sum(-2.2, -2.2)).to.be.equal(-4.4)
    });
});