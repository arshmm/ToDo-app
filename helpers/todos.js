
var db = require('../models');

exports.getTodos = function (req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.status(201).json(todos);
        })
        .catch(function (err) {
            console.log(err);
        });
};

exports.createTodos = function (req, res) {
    db.Todo.create(req.body)
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            console.log(err);
        });
}

exports.getTodo = function (req, res) {
    db.Todo.findById(req.params.todoid)
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            console.log(err);
        });
}

exports.updateTodo = function (req, res) {
    db.Todo.findOneAndUpdate({ _id: req.params.todoid }, req.body, { new: true })
        .then(function (todo) {
            res.json(todo);
        })
        .catch(function (err) {
            console.log(err);
        });
}

exports.deleteTodo = function (req, res) {
    db.Todo.remove({ _id: req.params.todoid })
        .then(function () {
            res.json({ message: 'deleted destroyed and descimated' });
        })
        .catch(function (err) {
            console.log(err);
        });
}
 
module.exports = exports
  
 