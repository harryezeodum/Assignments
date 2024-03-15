const express = require("express");
const thingRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    }, {
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    }, {
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    }, {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    }, {
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    }, {
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    }, {
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

thingRouter.route("/")
    .get((req, res) => {
        res.status(200).send(inventoryItems);
    })
    .post((req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4()
        inventoryItems.push(newItem);
        res.status(201).send(newItem);
    });

thingRouter.route("/:thingId")
    .get((req, res) => {
        const thingId = req.params.thingId;
        const foundThing = inventoryItems.find(thing => thing._id === thingId);
        res.status(200).send(foundThing);
    })

    .put((req, res) => {
        const itemObject = req.body;
        const thingId = req.params.thingId;
        const thingIndex = inventoryItems.findIndex(thing => thing._id === thingId);
        if (thingIndex !== -1) {
            const updatedObject = Object.assign(inventoryItems[thingIndex], itemObject);
            res.status(200).send(updatedObject);
        } else {
            res.status(404).send({ errorMsg: "item not found" });
        }

    })

    .delete((req, res) => {
        const thingId = req.params.thingId;
        const thingIndex = inventoryItems.findIndex(thing => thing._id === thingId);
        if (thingIndex !== -1) {
            inventoryItems.splice(thingIndex, 1);
            res.status(200).send("Item deleted");
        } else {
            res.status(404).send({ errorMsg: "item not found" });
        }

    });

thingRouter.route("/search/type")
    .get((req, res) => {
        console.log(req)
        const type = req.query.type;
        const foundItems = inventoryItems.filter(thing => thing.type === type);
        res.status(200).send(foundItems);
    });

    thingRouter.route("/search/price")
    .get((req, res) => {
        console.log(req)
        const price = req.query.price;
        const foundItems = inventoryItems.filter(thing => thing.price === parseInt(price));
        res.status(200).send(foundItems);
    })

module.exports = thingRouter