let comments = (() => {

    function getPostComments(postId) {
        const endpoint = `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function createComment(postId, content, author) {
        const endpoint = 'comments';
        let data = {postId, content, author};

        return requester.post('appdata', endpoint, 'kinvey');
    }

    function deleteComment(comment_id) {
        const endpoint = `comments/${comment_id}`;

        return requester.remove('appdata', endpoint, 'kinvey');
    }

    return {
        getPostComments,
        createComment,
        deleteComment
    }
})()