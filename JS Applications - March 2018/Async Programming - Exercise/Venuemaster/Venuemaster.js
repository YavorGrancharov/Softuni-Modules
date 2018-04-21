function venu() {
    const URL = 'https://baas.kinvey.com';
    const USERNAME = "guest";
    const PASSWORD = "pass";
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64, 'Content-type': 'application/json'};
    const BTN_GET_VENUES = $('#getVenues');
    const VENUE_DATE = $('#venueDate');
    const INFO = $('#venue-info');

    $(BTN_GET_VENUES).on('click', getVenues);

    function getVenues() {
        $(INFO).empty();
        $.ajax({
            type: "POST",
            url: URL + `/rpc/kid_BJ_Ke8hZg/custom/calendar?query=${VENUE_DATE.val()}`,
            headers: AUTH
        }).then(function (res) {
            res.forEach(venues => {
                $.ajax({
                    type: "GET",
                    url: URL + `/appdata/kid_BJ_Ke8hZg/venues/${venues}`,
                    headers: AUTH
                }).then(function (venue) {
                    generate(venue._id, venue.name, venue.description, venue.startingHour, venue.price);
                }).catch(error)
            })
        }).catch(error)
    }

    function generate(id, name, description, startingHour, price) {
        const VENUE = $(`<div class="venue" id="${id}">`)
            .append($('<span class="venue-name">')
                .append($(`<input class="info" type="button" value="More info">${name}</span>`)
                    .on('click', function (event) {
                        event.preventDefault();
                        $(this).parent().next().toggle();
                    })))
            .append($('<div class="venue-details" style="display: none;">')
                .append($('<table>')
                    .append($('<tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>'))
                    .append($('<tr>')
                        .append($(`<td class="venue-price">${price} lv</td>`))
                        .append($('<td>')
                            .append($('<select class="quantity">')
                                .append($('<option value="1">1</option>'))
                                .append($('<option value="2">2</option>'))
                                .append($('<option value="3">3</option>'))
                                .append($('<option value="4">4</option>'))
                                .append($('<option value="5">5</option>'))))
                        .append($('<td>')
                            .append($('<input class="purchase" type="button" value="Purchase">')
                                .on('click', function (event) {
                                    event.preventDefault();
                                    let qty = $('.quantity option:selected').val();
                                    const CONFIRM = $('<span class="head">Confirm purchase</span>');
                                    const DIV = $('<div class="purchase-info"></div>')
                                        .append($(`<span>${name}</span>`))
                                        .append($(`<span>${qty} x ${price}</span>`))
                                        .append($(`<span>Total: ${Number(qty) * Number(price)} lv</span>`))
                                        .append($('<input type="button" value="Confirm">')
                                            .on('click', function (event) {
                                                event.preventDefault();
                                                $.ajax({
                                                    type: "POST",
                                                    url: URL + `/rpc/kid_BJ_Ke8hZg/custom/purchase?venue=${id}&qty=${qty}`,
                                                    headers: AUTH
                                                }).then(function (res) {
                                                    $(VENUE).html(res.html)
                                                }).catch(error)
                                            }));
                                    $(VENUE).html(CONFIRM);
                                    $(VENUE).append(DIV)
                                })))))
                .append($('<span class="head">Venue description:</span>'))
                .append($(`<p class="description">${description}</p>`))
                .append($(`<p class="description">Starting time: ${startingHour}</p>`)));

        $(INFO).append(VENUE)
    }

    function error(err) {
        console.log(err.status + ' ' + err.statusText);
    }
}

//valid dates
//23-11, 24-11, 25-11, 26-11, 27-11