let chirpService = (() => {
    function getFollowingChirps(subs) {
        const endpoint = `chirps?query={"author":{"$in":[${subs}]}}&sort={"_kmd.ect": 1}`;

        return remoteService.get('appdata', endpoint, 'kinvey');
    }

    function getUserChirps(username) {
        const  endpoint = `chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`;

        return remoteService.get('appdata', endpoint, 'kinvey');
    }

    function createChirp(text, author) {
        const endpoint = 'chirps';
        let data = {
            text: text,
            author: author
        };

        return remoteService.post('appdata', endpoint, 'kinvey', data);
    }
    
    function deleteChirp(chirpId) {
        const endpoint = `chirps/${chirpId}`;

        return remoteService.remove('appdata', endpoint, 'kinvey');
    };

    function getUserFollowing(username) {
        const endpoint = `?query={"username":"${username}"}`;

        return remoteService.get('user', endpoint, 'kinvey');
    }

    function getUserFollowers(username) {
        const endpoint = `?query={"subscriptions":"${username}"}`;

        return remoteService.get('user', endpoint, 'kinvey');
    }

    function getAllUsers() {
        return remoteService.get('user', '', 'kinvey');
    }

    return {
        getFollowingChirps,
        getUserChirps,
        createChirp,
        deleteChirp,
        getUserFollowing,
        getUserFollowers,
        getAllUsers
    }
})();
