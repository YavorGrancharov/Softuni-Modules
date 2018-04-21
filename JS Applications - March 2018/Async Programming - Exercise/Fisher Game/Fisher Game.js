function fisherman() {
    const URL = "https://baas.kinvey.com/appdata/kid_S1VIxs_9z";
    const USERNAME = "yavor";
    const PASSWORD = "yavorg";
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {'Authorization': 'Basic ' + BASE_64, 'Content-type': 'application/json'};
    let all = $('#catches');

    $('.load').on('click', listAll);
    $('.add').on('click', addCatch);

    function listAll() {
        $.ajax({
            type: "GET",
            url: URL + '/biggestCatches',
            headers: AUTH
        }).then(function (res) {
            $(all).css('display', 'block');
            $(all).empty();
            res.forEach(dock => {
                generateForm(dock._id, dock.angler, dock.weight, dock.species, dock.location, dock.bait, dock.captureTime);
            })
        }).catch(displayError)
    }

    function updateCatch(id) {
        let angler = $(`.catch[data-id='${id}'] .angler`).val();
        let weight = $(`.catch[data-id='${id}'] .weight`).val();
        let species = $(`.catch[data-id='${id}'] .species`).val();
        let location = $(`.catch[data-id='${id}'] .location`).val();
        let bait = $(`.catch[data-id='${id}'] .bait`).val();
        let captureTime = $(`.catch[data-id='${id}'] .captureTime`).val();
        let addData = JSON.stringify({
            angler: angler,
            weight: Number(weight),
            species: species,
            location: location,
            bait: bait,
            captureTime: Number(captureTime)
        });
        $.ajax({
            type: "PUT",
            url: URL + `/biggestCatches/${id}`,
            data: addData,
            headers: AUTH,
            error: displayError
        })
    }

    function deleteCatch(id, selector) {
        $.ajax({
            type: "DELETE",
            url: URL + `/biggestCatches/${id}`,
            headers: AUTH,
            success: () => {
                $(selector).remove()
            },
            error: displayError
        })
    }

    function addCatch() {
        let angler = $('#addForm .angler');
        let weight = $('#addForm .weight');
        let species = $('#addForm .species');
        let location = $('#addForm .location');
        let bait = $('#addForm .bait');
        let captureTime = $('#addForm .captureTime');
        let addData = JSON.stringify({
            angler: angler.val(),
            weight: Number(weight.val()),
            species: species.val(),
            location: location.val(),
            bait: bait.val(),
            captureTime: Number(captureTime.val())
        });
        $.ajax({
            type: "POST",
            url: URL + '/biggestCatches',
            data: addData,
            headers: AUTH
        }).then(function () {
            listAll();
            angler.val('');
            weight.val('');
            species.val('');
            location.val('');
            bait.val('');
            captureTime.val('')
        }).catch(displayError);
    }

    function generateForm(id, angler, weight, species, location, bait, captureTime) {
        let div = $(`<div class="catch" data-id="${id}"></div>`)
            .append($('<label>Angler</label>'))
            .append($(`<input type="text" class="angler" value="${angler}"/>`))
            .append($('<label>Weight</label>'))
            .append($(`<input type="number" class="weight" value="${weight}"/>`))
            .append($('<label>Species</label>'))
            .append($(`<input type="text" class="species" value="${species}"/>`))
            .append($('<label>Location</label>'))
            .append($(`<input type="text" class="location" value="${location}"/>`))
            .append($('<label>Bait</label>'))
            .append($(`<input type="text" class="bait" value="${bait}"/>`))
            .append($('<label>Capture Time</label>'))
            .append($(`<input type="number" class="captureTime" value="${captureTime}"/>`))
            .append($('<button class="update">Update</button>').on('click', function () {
                updateCatch(id)
            }))
            .append($('<button class="delete">Delete</button>').on('click', function () {
                deleteCatch(id, $(div))
            }));

        $(all).append(div);
    }

    function displayError(error){
        console.log(error.status + ':' + error.statusText);
    }
}