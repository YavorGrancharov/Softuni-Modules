Handlebars.registerHelper('subTotal', function (arg1, arg2) {
    let subTotal = arg1 * arg2;
    return subTotal.toFixed(2);
});

Handlebars.registerHelper('formatDate', function (dateISO) {
    let date =  notifyService.formatDate(dateISO);
    return date;
});