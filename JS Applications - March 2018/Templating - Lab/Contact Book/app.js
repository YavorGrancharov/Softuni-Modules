$(() => {
    let details;
    let data;

    async function f() {
        data = await $.get('data.json');
        let dataObj = {
            contacts: data
        };
        let contacts = await $.get('templates/contacts.html');
        let contactsTemplate = Handlebars.compile(contacts);
        details = await $.get('templates/details.html');

        let contactsTable = contactsTemplate(dataObj);
        $('#list').append(contactsTable);
        attach()
    }

    f();

    function attach() {
        $('.contact').on('click', function () {
            loadDetails($(this).attr('data-id'));
        })
    }

    function loadDetails(id) {
        let detailsTemplate = Handlebars.compile(details);
        let contactsDetails = detailsTemplate(data[id]);
        $('#details').empty();
        $('#details').append(contactsDetails)
    }
});