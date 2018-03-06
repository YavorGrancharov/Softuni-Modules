let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
const isOddOrEven = require('../Even Or Odd.js');

describe('Even or Odd', function () {
    it('Should return undefined 10', function () {
        expect(isOddOrEven(10)).to.be.equal(undefined)
    });
    it('Should return odd', function () {
        expect(isOddOrEven('test1')).to.be.equal('odd')
    });
    it('Should return even', function () {
        expect(isOddOrEven('test')).to.be.equal('even')
    });
});