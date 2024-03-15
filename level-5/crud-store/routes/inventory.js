const express = require("express");
const inventoryRouter = express.Router();
const Inventory = require("../models/inventory.js");

let error;

inventoryRouter.route("/")
    .get(async (req, res) => {
        const crudStore = await Inventory.find({});
        res.status(200).send(crudStore);
    })

    .post(async (req, res, next) => {
        try {
            const newInventory = new Inventory(req.body);
            await newInventory.save()
            res.status(201).send(newInventory);
        } catch (err) {
            error = err.message;

            res.status(500).send({
                err: error,
                errMsg: `Please use the following values ${err.errors.type.properties.enumValues} instead for type`
            });
            return next({
                err: error,
                errMsg: `Please use the following values ${err.errors.type.properties.enumValues} instead for type`
            });
        }
    })

inventoryRouter.route("/:id")
    .get(async (req, res, next) => {
        try {
            const id = req.params.id;
            const foundId = await Inventory.findOne({ _id: id });
            res.status(200).send(foundId);
        } catch (err) {
            error = err.message;
            res.status(500).send({
                err: error,
                errMsg: `ID: ${req.params.id} is invalid, please validate you are using the valid ID`
            });
            return next({
                err: error,
                errMsg: `ID: ${req.params.id} is invalid, please validate you are using the valid ID`
            });
        }
    })

    .put(async (req, res, next) => {
        try {
            const id = req.params.id;
            const updatedItem = await Inventory.findOneAndUpdate({ _id: id }, req.body);
            res.status(201).send(updatedItem);
        } catch (err) {
            error = err.message;
            res.status(500).send({
                err: error,
                errMsg: `ID: ${req.params.id} is invalid, please validate you are using the valid ID`
            });
            return next({
                err: error,
                errMsg: `ID: ${req.params.id} is invalid, please validate you are using the valid ID`
            });
        }

    })

    .delete(async (req, res, next) => {
        try {
            const id = req.params.id;
            await Inventory.findOneAndDelete({ _id: id }, req.body);
            res.status(200).send("Successfully deleted item from DB");
        } catch (err) {
            error = err.message;
            res.status(500).send({
                err: error,
                errMsg: `ID: ${req.params.id} is invalid, please validate you are using the valid ID`
            });
            return next({
                err: error,
                errMsg: `ID: ${req.params.id} is invalid, please validate you are using the valid ID`
            });
        }
    })


module.exports = inventoryRouter;