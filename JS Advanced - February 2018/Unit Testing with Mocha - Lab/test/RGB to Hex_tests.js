let expect = require('chai').expect;
const rgbToHexColor = require('../RGB to Hex.js');

describe('RGB to Hex', function () {
    it('Should return #000000', function () {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000')
    });
    it('Should return #FFFFFF', function () {
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF')
    });
    it('Should return #FF0000', function () {
        expect(rgbToHexColor(255,0,0)).to.be.equal('#FF0000')
    });
    it('Should return #00FF00', function () {
        expect(rgbToHexColor(0,255,0)).to.be.equal('#00FF00')
    });
    it('Should return #0000FF', function () {
        expect(rgbToHexColor(0,0,255)).to.be.equal('#0000FF')
    });
    it('Should return #FFFF00', function () {
        expect(rgbToHexColor(255,255,0)).to.be.equal('#FFFF00')
    });
    it('Should return #00FFFF', function () {
        expect(rgbToHexColor(0,255,255)).to.be.equal('#00FFFF')
    });
    it('Should return #FF00FF', function () {
        expect(rgbToHexColor(255,0,255)).to.be.equal('#FF00FF')
    });
    it('Should return #C0C0C0', function () {
        expect(rgbToHexColor(192,192,192)).to.be.equal('#C0C0C0')
    });
    it('Should return #808080', function () {
        expect(rgbToHexColor(128,128,128)).to.be.equal('#808080')
    });
    it('Should return #800000', function () {
        expect(rgbToHexColor(128,0,0)).to.be.equal('#800000')
    });
    it('Should return #808000', function () {
        expect(rgbToHexColor(128,128,0)).to.be.equal('#808000')
    });
    it('Should return #008000', function () {
        expect(rgbToHexColor(0,128,0)).to.be.equal('#008000')
    });
    it('Should return #800080', function () {
        expect(rgbToHexColor(128,0,128)).to.be.equal('#800080')
    });
    it('Should return #008080', function () {
        expect(rgbToHexColor(0,128,128)).to.be.equal('#008080')
    });
    it('Should return #000080', function () {
        expect(rgbToHexColor(0,0,128)).to.be.equal('#000080')
    });
    it('Should return undefined', function () {
        expect(rgbToHexColor('test')).to.be.equal(undefined)
    });
    it('Should return undefined', function () {
        expect(rgbToHexColor(0,0,256)).to.be.equal(undefined)
    });
    it('Should return undefined', function () {
        expect(rgbToHexColor(0,256,0)).to.be.equal(undefined)
    });
    it('Should return undefined', function () {
        expect(rgbToHexColor(256,0,0)).to.be.equal(undefined)
    });
    it('Should return undefined', function () {
        expect(rgbToHexColor(-1,0,0)).to.be.equal(undefined)
    });
    it('Should return undefined', function () {
        expect(rgbToHexColor(0,-1,0)).to.be.equal(undefined)
    });
    it('Should return undefined', function () {
        expect(rgbToHexColor(0,0,-1)).to.be.equal(undefined)
    });
    it('Should return undefined', function () {
        expect(rgbToHexColor(0,3.14,0)).to.be.equal(undefined)
    });
});