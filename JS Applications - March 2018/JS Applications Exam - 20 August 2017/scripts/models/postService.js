let posts = (() => {

    function getPosts() {
        const endpoint = 'posts?query={}&sort={"_kmd.ect": -1}';

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function createPost(author, title, description, url, imageUrl) {
        let data = {author, title, description, url, imageUrl};

        return requester.post('appdata', 'posts', 'kinvey', data)
    }

    function editPost(postId, author, title, description, url, imageUrl) {
        const endpoint = `posts/${postId}`;
        let data = {author, title, description, url, imageUrl};

        return requester.update('appdata', endpoint, 'kinvey', data);
    }

    function deletePost(postId) {
        const endpoint = `posts/${postId}`;

        return requester.remove('appdata', endpoint, 'kinvey');
    }

    function getUserPosts(username) {
        const endpoint = `posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', endpoint, 'kinvey')
    }

    function getPostDetails(postId) {
        const endpoint = `posts/${postId}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    return {
        getPosts,
        createPost,
        editPost,
        deletePost,
        getUserPosts,
        getPostDetails
    }
})()