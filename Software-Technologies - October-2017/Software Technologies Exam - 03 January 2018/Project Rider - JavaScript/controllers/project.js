const Project = require('../models/Project');

module.exports = {
    index: (req, res) => {
        Project.find().then(projects => {
            res.render('project/index', {'projects':projects});
        })
    },
    createGet: (req, res) => {
        res.render('project/create');
    },
    createPost: (req, res) => {
        let project = req.body;

        if (!project.title || !project.description || !project.budget) {
            res.redirect('/');
        }
        Project.create(project).then(project => {
            res.redirect('/');
        })
    },
    editGet: (req, res) => {
        let id = req.params.id;

        Project.findById(id).then(project => {
            if (!project) {
                res.redirect('/');
                return;
            }
            res.render('project/edit', project);
        })
    },
    editPost: (req, res) => {
        let id = req.params.id;
        let project = req.body;

        Project.findByIdAndUpdate(id, project, {runValidators:true}).then(project => {
            res.redirect('/');
        })
    },
    deleteGet: (req, res) => {
        let id = req.params.id;

        Project.findById(id).then(project => {
            if (!project) {
                res.redirect('/');
                return;
            }
            res.render('project/delete', project);
        })
    },
    deletePost: (req, res) => {
        let id = req.params.id;

        Project.findByIdAndRemove(id).then(project => {
            res.redirect('/');
        })
    }
};