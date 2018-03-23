function loadRepos() {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/" + $('#username').val() + "/repos",
        success: function (res) {
            for (let repo of res) {
                $('#repos')
                    .append($('<li>')
                        .append($(`<a href="${repo.html_url}">${repo.full_name}</a>`)
                        )
                    )
            }
        }
    })
}