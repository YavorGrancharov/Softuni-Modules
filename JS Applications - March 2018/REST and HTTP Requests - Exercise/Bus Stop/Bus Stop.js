function getInfo() {
    let stopID = $('#stopId').val();
    $.ajax({
        type: "GET",
        url: `https://judgetests.firebaseio.com/businfo/${stopID}.json`,
        success: function (res) {
            $('#stopName').text(res.name);
            for (let key in res.buses) {
                $('#buses')
                    .append($(`<li>Bus ${key} arrives in ${res.buses[key]} minutes</li>`))
            }
        },
        error: function () {
            $('#stopName').text('Error')
        }
    })
}

//IDs 1287, 1308, 1327 and 2334