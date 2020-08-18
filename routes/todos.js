var express = require('express'),
    router = express.Router();

var helpers = require("../helpers/todos")

router.route('/')
	.get(helpers.getTodos)
	.post(helpers.createTodos);

router.route('/:todoid')
		.get(helpers.getTodo)
		.put(helpers.updateTodo)
		.delete(helpers.deleteTodo);

module.exports = router;