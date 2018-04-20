$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let sourceTemplate = await $.get('templates/cat.hbs');
        let compiledTemplate = Handlebars.compile(sourceTemplate);
        let html = compiledTemplate({
            cats: window.cats
        });
        $('body').append(html);

        $('.btn-primary').on('click', function () {
            let el = $(this).parent().children()[1];
            $(el).toggle();
            if ($(this).parent().children()[0].innerText === 'Show status code') {
                $(this).parent().children()[0].innerText = 'Hide status code'
            } else {
                $(this).parent().children()[0].innerText = 'Show status code'
            }
        })
    }
})
