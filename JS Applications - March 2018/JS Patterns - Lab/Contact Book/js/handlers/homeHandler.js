handlers.homeHandler = function (ctx) {
    ctx.isAuthtenticated = auth.isAuthtenticated();
    $.ajax('data.json')
        .then((contacts) => {
            ctx.contacts = contacts;
            ctx.loadPartials({
                header: './templates/header.hbs',
                navigation: './templates/navbar.hbs',
                footer: './templates/footer.hbs',
                contactsForm: './templates/contactsForm.hbs',
                contact: './templates/contact.hbs',
                detailsForm: './templates/detailsForm.hbs',
                contactsList: './templates/contactsList.hbs',
                loginForm: './templates/loginForm.hbs'
            }).then(function () {
                ctx.partials = this.partials;
                render();
            })
        }).catch(console.error);
    
    function render() {
        ctx.partial('./templates/welcome.hbs')
            .then(attachEvents)
    }
    
    function attachEvents() {
        $('.contact').click((ev) => {
            let index = $(ev.target).closest('.contact').attr('data-id');
            ctx.selected = ctx.contacts[index];
            render();
        })
    }
};