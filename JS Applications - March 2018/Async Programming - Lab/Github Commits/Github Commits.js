function loadCommits() {
    const username = $('#username').val();
    const repo = $('#repo').val();
    const commits = $('#commits');
    const URL = `https://api.github.com/repos/${username}/${repo}/commits`;
    $.ajax({
        type: "GET",
        url: URL
    }).then(function (res) {
        res.forEach(repo => $(commits)
            .append($(`<li>${repo.commit.author.name}: ${repo.commit.message}</li>`)));
    }).catch(function (err) {
        $(commits).append($(`<li>Error: ${err.status} (${err.statusText})</li>`));
    })
}