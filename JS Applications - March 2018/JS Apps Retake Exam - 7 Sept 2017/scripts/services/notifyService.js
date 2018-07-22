let notifyService = (() => {
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    })

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.find('span').text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return  date.getFullYear() +
            '-' + padZeros(date.getMonth() + 1) +
            '-' + date.getDate() + ' ' + date.getHours() +
            ':' + padZeros(date.getMinutes());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    return {
        showInfo,
        showError,
        handleError,
        formatDate,
        calcTime
    }
})()