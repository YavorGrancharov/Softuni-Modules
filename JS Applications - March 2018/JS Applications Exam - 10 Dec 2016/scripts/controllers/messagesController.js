let messagesController = (() => {
    function getRecipientMessages(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let username = sessionStorage.getItem('username');

        messagesService.received(username).then((messages) => {
            if (messages.length === 0) {
                ctx.empty = true;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/messages/recipientMessagesPage.hbs');
                })
            } else {
                ctx.messages = messages;

                for (let msg of messages) {
                    msg.sender = notifyService.formatSender(msg["sender_name"], msg["sender_username"]);
                    ctx.text = msg.text;
                    msg.date = notifyService.formatDate(msg._kmd.ect);

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        recipientMessage: './templates/messages/recipientMessage.hbs'
                    }).then(function () {
                        this.partial('./templates/messages/recipientMessagesPage.hbs');
                    })
                }
            }
        }).catch(notifyService.handleError);

    }

    function getSenderMessages(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let username = sessionStorage.getItem('username');

        messagesService.sent(username).then((messages) => {
            if (messages.length === 0) {
                ctx.empty = true;

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                }).then(function () {
                    this.partial('./templates/messages/senderMessagesPage.hbs');
                })
            } else {
                ctx.messages = messages;

                for (let msg of messages) {
                    msg.recipient = notifyService.formatSender(msg["recipient_name"], msg["recipient_username"]);
                    ctx.text = msg.text;
                    msg.date = notifyService.formatDate(msg._kmd.ect);

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        senderMessage: './templates/messages/senderMessage.hbs'
                    }).then(function () {
                        this.partial('./templates/messages/senderMessagesPage.hbs');
                    })
                }
            }
        }).catch(notifyService.handleError);
    }

    function listAllUsers(ctx) {
        messagesService.allUsers().then((users) => {
            ctx.username = sessionStorage.getItem('username');
            users = users.filter(user => user.username !== sessionStorage.getItem('username'));
            ctx.users = users;

            for (let user of users) {
                user.name = notifyService.formatSender(user.name, user.username);

                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    listAllUsers: './templates/messages/listAllUsers.hbs'
                }).then(function () {
                    this.partial('./templates/messages/sendMessageForm.hbs');
                })
            }
        })
    }

    function sendMessage(ctx) {
        let username = sessionStorage.getItem('username');
        let name = sessionStorage.getItem('name');
        let recipient = ctx.params.recipient;
        let text = ctx.params.text;

        let data = {sender_username: username, sender_name: name, recipient_username: recipient, text: text};

        messagesService.create(data).then(() => {
            notifyService.showInfo('Message sent.');
            ctx.redirect('#/archive');
        })
    }

    function deleteMessage(ctx) {
        if (!authService.isAuth()) {
            ctx.redirect('#/home');
            return;
        }

        let msgId = ctx.params.id.substr(1);

        messagesService.remove(msgId).then(() => {
            notifyService.showInfo('Message deleted.');
            ctx.redirect('#/archive');
        }).catch(notifyService.handleError);
    }

    return {
        getRecipientMessages,
        getSenderMessages,
        listAllUsers,
        sendMessage,
        deleteMessage
    }
})();