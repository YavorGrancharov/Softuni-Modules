const expect = require('chai').expect;
const jsdom = require('jsdom-global')();
global.$ = require('jquery');
const sharedObject = require('../Shared Object.js');

describe('Shared Object Tests', function () {
    beforeEach('Init HTML', function () {
        document.body.innerHTML =
            `<body>
                <div id="wrapper">
                    <input type="text" id="name">
                    <input type="text" id="income">
                </div>
            </body>`;
    });
    it('Name initial value', function () {
        expect(sharedObject.name).to.be.equal(null)
    });
    it('Income initial value', function () {
        expect(sharedObject.income).to.be.equal(null)
    });
    it('Empty name input', function () {
        sharedObject.changeName('');
        expect(sharedObject.name).to.be.equal(null);
    });
    it('Proper name input', function () {
        sharedObject.changeName('test');
        expect(sharedObject.name).to.be.equal('test');
    });
    it('Proper name input', function () {
        sharedObject.changeName('test');
        let name = $('#name');
        expect(name.val()).to.be.equal('test');
    });
    it('Incorrect income input', function () {
        sharedObject.changeIncome(-1);
        expect(sharedObject.income).to.be.equal(null);
    });
    it('Incorrect income input', function () {
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.be.equal(null);
    });
    it('Incorrect income input', function () {
        sharedObject.changeIncome(12.3);
        expect(sharedObject.income).to.be.equal(null);
    });
    it('Proper income input', function () {
        sharedObject.changeIncome(123);
        expect(sharedObject.income).to.be.equal(123);
    });
    it('Proper income input', function () {
        sharedObject.changeIncome(12);
        let income = $('#income');
        expect(income.val()).to.be.equal('12');
    });
    it('Update name with empty value', function () {
        sharedObject.changeName('test');
        let name = $('#name').val('');
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('test');
    });
    it('Update name with proper input value', function () {
        let name = $('#name').val('test');
        sharedObject.updateName();
        expect(sharedObject.name).to.be.equal('test');
    });
    it('Update income with proper input value', function () {
        let income = $('#income').val('123');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(123);
    });
    it('Update income with string input value', function () {
        sharedObject.changeIncome(4);
        let income = $('#income').val('test');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(4);
    });
    it('Test updateIncome() with floating point', function () {
        sharedObject.changeIncome(4);
        let income = $('#income').val('5.5');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(4);
    });
    it('Update income with incorrect input value', function () {
        sharedObject.changeIncome(123);
        let income = $('#income').val('test');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(123);
    });
    it('Update income with incorrect input value', function () {
        sharedObject.changeIncome(123);
        let income = $('#income').val('0');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(123);
    });
    it('Update income with incorrect input value', function () {
        sharedObject.changeIncome(123);
        let income = $('#income').val('-1');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(123);
    });
    it('Update income with incorrect input value', function () {
        sharedObject.changeIncome(123);
        let income = $('#income').val('12.3');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.be.equal(123);
    });
});