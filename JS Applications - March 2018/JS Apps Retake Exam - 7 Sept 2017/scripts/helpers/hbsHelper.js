Handlebars.registerHelper('calcTime', function (dateISO) {
    return notifyService.calcTime(dateISO);
});

Handlebars.registerHelper('count', function (args) {
    return args.length || 0;
});