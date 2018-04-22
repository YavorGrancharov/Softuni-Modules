let messagesService = (() => {
    function received(username) {
        const endpoint = `messages?query={"recipient_username":"${username}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function sent(username) {
        const endpoint = `messages?query={"sender_username":"${username}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function allUsers() {
        return remote.get('user', '', 'kinvey');
    }

    function create(data) {
        const endpoint = 'messages';

        return remote.post('appdata', endpoint, 'kinvey', data);
    }

    function remove(msgId) {
        const endpoint = `messages/${msgId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    return {
        received,
        sent,
        allUsers,
        create,
        remove
    }
})();