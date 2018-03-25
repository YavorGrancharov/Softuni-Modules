function solve() {
    let currentID = 'depot';
    let stopName = '';

    function depart() {
        $.ajax({
            type: "GET",
            url: `https://judgetests.firebaseio.com/schedule/${currentID}.json`,
            success: function (res) {
                stopName = res.name;
                $('span.info').text(`Next stop ${stopName}`);
                currentID = res.next;
                $('#depart').prop('disabled', true);
                $('#arrive').prop('disabled', false);
            }
        })
    }

    function arrive() {
        $('span.info').text(`Arriving at ${stopName}`);
        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();