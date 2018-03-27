//not compatible with judge

function attachEvents() {
    const URL = "https://baas.kinvey.com/appdata/kid_r1jk44HqG";
    const USERNAME = "yavor";
    const PASSWORD = "yavorg";
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64};

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPosts);

    function loadPosts() {
        $('#posts').empty();
        $.ajax({
            type: "GET",
            url: URL + '/Posts',
            headers: AUTH,
        }).then(function (res) {
            res.forEach(post => {
                $('#posts')
                    .append(
                        $(`<option value="${post._id}">${post.title}</option>`))
            })
        }).catch(function (err) {
            console.log(err)
        })
    }

    function viewPosts() {
        let postID = $('#posts').val();
        $.ajax({
            type: "GET",
            url: URL + `/Posts/${postID}`,
            headers: AUTH
        }).then(function (res) {
            $('#post-title').text(res.title);
            $('#post-body').text(res.body);
        }).catch(function (err) {
            console.log(err)
        });

        $('#post-comments').empty();
        $.ajax({
            type: "GET",
            url: URL + `/Comments/?query={"post_id":"${postID}"}`,
            headers: AUTH
        }).then(function (res) {

            for (let comment of res) {
                $('#post-comments').append(
                    $(`<li>${comment.text}</li>`)
                )
            }
        }).catch(function (err) {
            console.log(err)
        })
    }
}