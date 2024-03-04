const express = require("express");
const todoRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const todos = [
    { name: "Shopping", description: "I am going to Walmart", imageUrl: "www.walmart.com", completed: false, _id: uuidv4() },
    { name: "Reading", description: "I am going to study for my exam", imageUrl: "www.examtopic.com", completed: false, _id: uuidv4() },
    { name: "Movies", description: "I am going to the movies", imageUrl: "www.abc.com", completed: true, _id: uuidv4() },
    { name: "Skydiving", description: "I am going skydiving", imageUrl: "www.example.com", completed: true, _id: uuidv4() },
    { name: "Bingo", description: "I am going to play bingo", imageUrl: "www.yahoo.com", completed: false, _id: uuidv4() }
]

todoRouter.route("/")
    .get((req, res) => {
        res.send(todos);
    })

    .post((req, res) => {
        const todo = req.body;
        todo._id = uuidv4();
        todos.push(todo);
        res.send(todo);
    })

todoRouter.route("/:todoId")
    .get((req, res) => {
        const todoId = req.params.todoId;
        const foundTodo = todos.find(todo => todo._id === todoId);
        res.send(foundTodo);
    })

    .put((req, res) => {
        const todoId = req.params.todoId; 
        const updatedTodoJson = req.body;
        const todoIndex = todos.findIndex(todo => todo._id === todoId);

        if (todoIndex !== -1) {
            const updatedTodo = Object.assign(todos[todoIndex], updatedTodoJson);
            res.send(updatedTodo);
        }

        
    })

    .delete((req, res) => {
        const todoId = req.params.todoId;
        const todoIndex = todos.findIndex(todo => todo._id === todoId);
        todos.splice(todoIndex, 1);
        res.send("Successfully deleted a todo item from the database!")
    })

module.exports = todoRouter
