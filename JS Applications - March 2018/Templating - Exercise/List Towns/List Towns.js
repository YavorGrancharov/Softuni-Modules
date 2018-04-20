function attachEvents() {
    $('#btnLoadTowns').on('click', renderTowns);

    function renderTowns() {
        let towns = $('#towns');
        towns = towns.val().split(',').map(town => town.trim()).filter(town => {
            if (town !== '' && town !== undefined) {
                return {name: generateList(town)}
            }
        });

        function generateList(town) {
            $(towns).val('');
            $('#root').append($(`<li>${town}</li>`))
        }
    }
}