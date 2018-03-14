const expect = require('chai').expect;
const Console = require('../C# Console.js');

describe('C# Console tests', function () {
    it('Should return original string input', function () {
        expect(Console.writeLine('string')).to.be.equal('string');
    });
    it('Should return object', function () {
        let obj = {name: 'Pesho'};
        expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj));
    });
    it('Should return appropriate placeholders', function () {
        expect(Console.writeLine('{0}, {1}, {2}', 1, 2, 3)).to.be.equal('1, 2, 3');
    });
    it('Should throw TypeError', function () {
        expect(() => {Console.writeLine([], 1, 2)}).to.throw(TypeError);
    });
    it('Should throw RangeError', function () {
        expect(() => {Console.writeLine('{0}', 1, 2)}).to.throw(RangeError);
    });
    it('Should throw RangeError', function () {
        expect(() => {Console.writeLine('{10}', 1, 2)}).to.throw(RangeError);
    });
});