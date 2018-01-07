const Task = require('../models/Task');

module.exports = {
	index: (req, res) => {
		Task.find().then(tasks => {
			res.render('task/index', {
				'inProgressTasks': tasks.filter(t => t.status === 'In Progress'),
				'openTasks': tasks.filter(t => t.status === 'Open'),
				'finishedTasks': tasks.filter(t => t.status === 'Finished')
			})
		})
	},
	createGet: (req, res) => {
		res.render('task/create')
	},
	createPost: (req, res) => {
		let task = req.body;
		if (!task.title === "" || !task.comments === "") {
			res.redirect('/');
			return;
		}
		Task.create(task).then(task => res.redirect('/'))
	},
	editGet: (req, res) => {
		let id = req.params.id;

		Task.findById(id).then(task => {
			if (!task) {
				res.redirect('/');
				return;
			}
			res.render('task/edit', task);
		})
	},
	editPost: (req, res) => {
		let id = req.params.id;
		let task = req.body;

		Task.findByIdAndUpdate(id, task, {runValidators:true}).then(task => {
			res.redirect('/');
		})
	}
};