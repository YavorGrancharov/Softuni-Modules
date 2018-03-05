let expect = require('chai').expect;
const createCalculator = require('../Add Subtract.js');

describe('Calculator', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator()
    });
    afterEach(function () {
        console.log('Test Passed!')
    });
    it('Should return 0', function () {
        expect(calc.get()).to.be.equal(0)
    });
    it('Should return 10', function () {
        calc.add(10);
        expect(calc.get()).to.be.equal(10)
    });
    it('Should return -10', function () {
        calc.subtract(10);
        expect(calc.get()).to.be.equal(-10)
    });
    it('Should return 5', function () {
        calc.add(2);calc.add(3);
        expect(calc.get()).to.be.equal(5)
    });
    it('Should return -5', function () {
        calc.subtract(3);calc.subtract(2);
        expect(calc.get()).to.be.equal(-5)
    });
    it('Should return 4.2', function () {
        calc.add(5.3);calc.subtract(1.1);
        expect(calc.get()).to.be.equal(4.199999999999999)
    });
    it('Should return NaN', function () {
        calc.add('test');
        expect(calc.get()).to.be.NaN
    });
    it('Should return NaN', function () {
        calc.subtract('test');
        expect(calc.get()).to.be.NaN
    });
    it('Should return NaN', function () {
        calc.subtract([-1,1]); calc.subtract(-1);
        expect(calc.get()).to.be.NaN
    });
    it('Should return NaN', function () {
        calc.add([-1,1]); calc.add(-1);
        expect(calc.get()).to.be.NaN
    });
    it('Should return 0', function () {
        calc.add(0); calc.subtract(0);
        expect(calc.get()).to.be.equal(0)
    });
    it('Should return 0', function () {
        calc.subtract(0); calc.subtract(0);
        expect(calc.get()).to.be.equal(0)
    });
    it('Should return 0', function () {
        calc.add(0); calc.add(0);
        expect(calc.get()).to.be.equal(0)
    });
    it('Should return -1', function () {
        calc.add(0); calc.add(-1);
        expect(calc.get()).to.be.equal(-1)
    });
    it('Should return -50', function () {
        calc.add(-49); calc.add(-1);
        expect(calc.get()).to.be.equal(-50)
    });
    it("should return 100", function () {
        calc.subtract('-99');
        calc.subtract(-1);
        expect(calc.get()).to.be.equal(100);
    });
    it("should return 100", function () {
        calc.add('99');
        calc.add(1);
        expect(calc.get()).to.be.equal(100);
    });
    it("should return -10.5", function () {
        calc.subtract(12);
        calc.subtract(-1.5);
        expect(calc.get()).to.be.equal(-10.5);
    });
    it("should return 1.3", function () {
        calc.add(0.8);
        calc.add(0.5);
        expect(calc.get()).to.be.equal(1.3);
    });
    it("should return 1.3", function () {
        calc.subtract(-0.8);
        calc.subtract(-0.5);
        expect(calc.get()).to.be.equal(1.3);
    });
    it('Should return 50', function () {
        calc.subtract(-49); calc.subtract(-1);
        expect(calc.get()).to.be.equal(50)
    });
    it('Should return NaN', function () {
        calc.add('test'); calc.subtract(1);
        calc.add(1); calc.subtract('test');
        calc.add('test'); calc.add(1);
        calc.add(1); calc.add('test');
        calc.add([1]); calc.add(1);
        calc.subtract([1]); calc.subtract(1);
        calc.subtract({}); calc.subtract(1);
        calc.add([1]); calc.add({});
        calc.add(1); calc.add(1);
        expect(calc.get()).to.be.NaN
    });
});