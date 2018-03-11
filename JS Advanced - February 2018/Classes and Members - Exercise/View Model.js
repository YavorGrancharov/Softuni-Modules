class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this._ivalidSymbols = regex;
        this._elements = $(this.selector);
        $(this.selector).on('input', function () {
            $('input[type="text"]').val(this.value)
        })
    }

    get value() {
        return this._elements.val()
    }

    set value(value) {
        this._elements.val(value);
    }

    get elements() {
        return this._elements;
    }

    isValid () {
        return !this.value.match(this._ivalidSymbols)
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});