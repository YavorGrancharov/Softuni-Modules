const expect = require('chai').expect;
const jsdom = require('jsdom-global')();
global.$ = require('jquery');
const nuke = require('../ArmageDOM.js');

describe('ArmageDOM Tests', function () {
    let initialHTML;
    beforeEach('Init HTML', function () {
        document.body.innerHTML =
            `<body>
                <div id="target">
                    <div class="nested target">
                        <p>This is some text</p>
                    </div>
                    <div class="target">
                        <p>Empty div</p>
                    </div>
                    <div class="inside">
                        <span class="nested">Some more text</span>
                        <span class="target">Some more text</span>
                    </div>
                </div>
            </body>`;
        initialHTML = $('body').html();
    });
    it('Return original DOM if either selectors are invalid', function () {
        let selector1 = $('.inside');
        let selector2 = 123;
        nuke(selector1, selector2);
        let modifiedHTML = $('body').html();
        expect(modifiedHTML).to.be.equal(initialHTML);
    });
    it('Return original DOM if two selectors are the same', function () {
        let selector1 = $('.nested');
        nuke(selector1, selector1);
        let modifiedHTML = $('body').html();
        expect(modifiedHTML).to.be.equal(initialHTML);
    });
    it('Do not return original DOM if selector is valid', function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        nuke(selector1, selector2);
        let modifiedHTML = selector1.html();
        expect(modifiedHTML).to.not.equal(initialHTML);
    });
    it('Do not return original DOM if selector is valid', function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        nuke(selector1, selector2);
        let modifiedHTML = $('body').html();
        expect(modifiedHTML).to.be.equal(initialHTML);
    });
});