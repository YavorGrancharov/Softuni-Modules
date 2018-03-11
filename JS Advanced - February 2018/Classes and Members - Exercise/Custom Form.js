let result = (function () {
    class Textbox {
        constructor(selector, regex) {
            this.selector = selector;
            this._ivalidSymbols = regex;
            this._elements = $(this.selector);
            let self = this;
            $(this.selector).on('input', function () {
                self.value = this.value;
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

        isValid() {
            return !this.value.match(this._ivalidSymbols)
        }
    }

    class Form {
        constructor(...textboxes) {
            if (textboxes.some(t => !(t instanceof Textbox))) {
                throw new Error('Invalid input parameter')
            } else {
                this._textboxes = textboxes;
                this._element = $('<div>').addClass('form');
                for (let textbox of textboxes) {
                    this._element.append($(textbox.selector));
                }
            }
        }

        submit() {
            let isValid = true;
            for (let textbox of this._textboxes) {
                if (textbox.isValid()) {
                    $(textbox.selector).css('border', '2px solid green');
                } else {
                    $(textbox.selector).css('border', '2px solid red');
                    isValid = false;
                }
            }
            return isValid;
        }

        attach(selector) {
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");