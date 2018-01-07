const Report = require('../models/Report');

module.exports = {
    index: (req, res) => {
        Report.find().then(reports => {
            res.render('report/index', {'reports':reports});
        })
    },
    createGet: (req, res) => {
        res.render('report/create');
    },
    createPost: (req, res) => {
        let report = req.body;
        if (report.status === "" || report.message === "" || report.origin === "") {
            res.redirect('/');
            return;
        }
        Report.create(report).then(report => res.redirect('/'))
    },
    detailsGet: (req, res) => {
        let id = req.params.id;

        Report.findById(id).populate('Report Details').then(report => {
            res.render('report/details', report);
        })
    },
    deleteGet: (req, res) => {
        let id = req.params.id;

        Report.findById(id).then(report => {
            if (!report) {
                res.redirect('/');
                return;
            }
            res.render('report/delete', report);
        })
    },
    deletePost: (req, res) => {
        let id = req.params.id;
        let report = req.body;

        Report.findByIdAndRemove(id).then(report => {
            res.redirect('/');
        })
    }
};