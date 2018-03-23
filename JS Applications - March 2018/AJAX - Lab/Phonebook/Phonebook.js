const URL = "https://phonebook-3398d.firebaseio.com/phonebook";
const person = $('#person');
const phone = $('#phone');

function loadData() {
    $('#phonebook').empty();
    $.ajax({
        type: "GET",
        url: URL + ".json",
        success: function (res) {
            for (let key in res) {
                generate(res[key].name, res[key].phone, key);
            }
        }
    })
}

function newData() {
    let name = person.val();
    let phoneVal = phone.val();
    let newData = JSON.stringify({'name':name, 'phone':phoneVal});

    $.ajax({
        type: "POST",
        url: URL + ".json",
        data: newData,
        success: function (res) {
            generate(name, phoneVal, res.name);
            person.val('');
            phone.val('');
        }
    });
}

function generate(name, phone, key) {
    let li = $(`<li>${name}: ${phone} </li>`)
        .append($('<a href="#">[Delete]</a>').on('click', function () {
            $.ajax({
                type: "DELETE",
                url: URL + "/" + key + ".json",
                success: () => {
                    $(li).remove()
                }
            })
        }));
    $('#phonebook').append(li);
}