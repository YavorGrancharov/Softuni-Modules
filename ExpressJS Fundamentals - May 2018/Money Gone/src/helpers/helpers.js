const jsdom = require('jsdom');
const $ = require('jquery')(new jsdom.JSDOM().window);

module.exports = {
  formatDate: (dateISO8601) => {
    let date = new Date(dateISO8601);
    if (Number.isNaN(date.getDate())) return '';
    return (
      date.getDate() +
      '.' +
      padZeros(date.getMonth() + 1) +
      '.' +
      date.getFullYear()
    );

    function padZeros(num) {
      return ('0' + num).slice(-2);
    }
  },
};
