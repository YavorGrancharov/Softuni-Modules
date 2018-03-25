function attachEvents() {
    const URL = "https://messenger-c5412.firebaseio.com";
    const author = $('#author');
    const content = $('#content');
    const textarea = $('#messages');

    $('#submit').on('click', populateNewMsg);
    $('#refresh').on('click', populateMsg);

    function populateMsg() {
        textarea.empty();
        $.ajax({
            type: "GET",
            url: URL + '/' + '.json',
            success: function (res) {
                for (let key in res) {
                    textarea.append(`${res[key].author}: ${res[key].content}\n`);
                }
            }
        })
    }

    function populateNewMsg() {
        let newAuthor = author.val();
        let newContent = content.val();
        let timestamp = Date.now();
        let newData = JSON.stringify({author: newAuthor, content: newContent, timestamp: timestamp});
        $.ajax({
            type: "POST",
            url: URL + '/' + '.json',
            data: newData,
            success: () => {
                textarea.append(newData);
                content.val('');
            }
        })
    }
}

//function attachEvents() {
//    function populateMessages() {
//        $('#messages').empty();
//        $.ajax({
//            type: "GET",
//            url: URL,
//            success: function (res) {
//                for (let key in res) {
//                    let message = `${res[key].author}: ${res[key].content}\n`;
//                    $('#messages').append(message)
//                }
//            },
//            error: function (err) {
//                console.log('Error: ' + err)
//            }
//        })
//    }
//
//    function populateNewMessage() {
//        let user = author.val();
//        let message = content.val();
//        let newMessage = JSON.stringify({author: user, content: message, timestamp: Date.now()});
//        $.ajax({
//            type: "POST",
//            url: URL,
//            data: newMessage,
//            success: function (res) {
//                $('#messages').append(newMessage);
//                content.val('')
//            },
//            error: function (err) {
//                console.log('Error: ' + err)
//            }
//        })
//    }
//
//    return {
//        populateMessages,
//        populateNewMessage
//    }
//}
//
//let result = attachEvents();