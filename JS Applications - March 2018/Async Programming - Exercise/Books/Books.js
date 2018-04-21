function books() {
    const URL = 'https://baas.kinvey.com/appdata/kid_HkFH2nicG';
    const USERNAME = "guest";
    const PASSWORD = "guest";
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64, 'Content-type': 'application/json'};
    let all = $('#books');

    $('.load').on('click', list);
    $('.add').on('click', add);

    function list() {
        $.ajax({
            type: "GET",
            url: URL + '/books',
            headers: AUTH
        }).then(function (books) {
            $(all).css('display', 'block');
            $(all).empty();
            books.forEach(book => {
                generate(book._id, book.title, book.author, book.isbn)
            })
        }).catch(err)
    }

    function add() {
        let title = $('#addForm .title');
        let author = $('#addForm .author');
        let isbn = $('#addForm .isbn');
        let data = JSON.stringify({
            title: title.val(),
            author: author.val(),
            isbn: isbn.val()
        });
        $.ajax({
            type: "POST",
            url: URL + '/books',
            data: data,
            headers: AUTH,
        }).then(function () {
                list();
                title.val('');
                author.val('');
                isbn.val('');
            }
        ).catch(err)
    }

    function edit(id) {
        let title = $(`.shelf[data-id='${id}'] .title`).val();
        let author = $(`.shelf[data-id='${id}'] .author`).val();
        let isbn = $(`.shelf[data-id='${id}'] .isbn`).val();
        let data = JSON.stringify({
            title: title,
            author: author,
            isbn: isbn
        });
        $.ajax({
            type: "PUT",
            url: URL + `/books/${id}`,
            data: data,
            headers: AUTH
        }).then(() => {
            console.log('edit successful')
        }).catch(err)
    }

    function remove(id, selector) {
        $.ajax({
            type: "DELETE",
            url: URL + `/books/${id}`,
            headers: AUTH
        }).then(() => {
            $(selector).remove();
        }).catch(err)
    }

    function generate(id, title, author, isbn) {
        let div = $($(`<div class="shelf" data-id="${id}">`)
            .append($('<label>Title</label>'))
            .append($(`<input type="text" class="title" value="${title}"/>`))
            .append($('<label>Author</label>'))
            .append($(`<input type="text" class="author" value="${author}"/>`))
            .append($('<label>ISBN</label>'))
            .append($(`<input type="text" class="isbn" value="${isbn}"/>`))
            .append($('<button class="edit">Edit</button>').on('click', function () {
                edit(id)
            }))
            .append($('<button class="delete">Delete</button>').on('click', function () {
                remove(id, $(div))
            })));

        $(all).append(div);
    }

    function err(err) {
        console.log(err.status + ':' + err.statusText);
    }
}