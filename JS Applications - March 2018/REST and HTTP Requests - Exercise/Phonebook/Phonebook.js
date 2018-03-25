function attachEvents() {
    const URL = "https://phonebook-nakov.firebaseio.com/phonebook";
    const person = $('#person');
    const phone = $('#phone');

    $('#btnLoad').on('click', load);
    $('#btnCreate').on('click', create);

    function load() {
        $.ajax({
            type: "GET",
            url: URL + ".json",
            success: function (res) {
                for (let key in res) {
                    generate(res[key].person, res[key].phone, key)
                }
            }
        })
    }

    function create() {
        let newPerson = person.val();
        let newPhone = phone.val();
        let newData = JSON.stringify({person: newPerson, phone: newPhone});
        $.ajax({
            type: "POST",
            url: URL + '.json',
            data: newData,
            success: function (res) {
                generate(newPerson, newPhone, res.name);
                person.val('');
                phone.val('');
            }
        })
    }

    function generate(person, phone, key) {
        let li = $(`<li>${person}: ${phone}</li>`)
            .append($('<button>[Delete]</button>').on('click', function () {
                $.ajax({
                    type: "DELETE",
                    url: URL + '/' + key + '.json',
                    success: () => {
                        $(li).remove();
                    }
                })
            }));
        $('#phonebook').append(li);
    }
}