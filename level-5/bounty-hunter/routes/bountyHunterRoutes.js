const express = require("express");
const bountyHunterRouter = express.Router();
const Bounty = require("../models/bounty.js");

//const { v4: uuidv4 } = require("uuid");

// const bountyHunters = [
//     { firstName: "Joe", lastName: "Smith", isAlive: true, bountyAmount: 5000, type: "Sith", _id: uuidv4() },
//     { firstName: "Aaron", lastName: "John", isAlive: false, bountyAmount: 2300, type: "Jedi", _id: uuidv4() },
//     { firstName: "Clay", lastName: "Pak", isAlive: true, bountyAmount: 1000, type: "Sith", _id: uuidv4() },
//     { firstName: "David", lastName: "Babers", isAlive: false, bountyAmount: 7000, type: "Sith", _id: uuidv4() },
//     { firstName: "Justin", lastName: "Bieber", isAlive: false, bountyAmount: 6000, type: "Sith", _id: uuidv4() },
//     { firstName: "Harry", lastName: "Ezeodum", isAlive: false, bountyAmount: 6500, type: "Jedi", _id: uuidv4() },
//     { firstName: "Christian", lastName: "Angola", isAlive: true, bountyAmount: 1000, type: "Jedi", _id: uuidv4() },
//     { firstName: "Genesis", lastName: "Bronny", isAlive: true, bountyAmount: 2500, type: "Sith", _id: uuidv4() },
//     { firstName: "Voke", lastName: "Ojakovo", isAlive: true, bountyAmount: 3000, type: "Jedi", _id: uuidv4() },
//     { firstName: "Mike", lastName: "James", isAlive: false, bountyAmount: 5000, type: "Sith", _id: uuidv4() }
// ]

bountyHunterRouter.route("/")
    .get(async (req, res) => {
        try {
            const foundBounties = await Bounty.find({});
            res.status(200).send(foundBounties);
            
        } catch (err) {
            console.log(err)
            res.status(500)
            res.json({message: err})
        }
    })
    .post( async(req, res) => {
        try {
            const newBounty = new Bounty(req.body)
            newBounty.save()
            res.status(200).send(newBounty)
        } catch (err) {
            res.status(500)
            res.json({message: err})
        }
        
    });

bountyHunterRouter.route("/:bountyId")
    .get( async(req, res) => {
        const bountyId = req.params.bountyId;
        const foundBountyHunter = await Bounty.findOne({_id: bountyId})
       
        res.send(foundBountyHunter);
    })

    .put( async(req, res) => {
        const bountyId = req.params.bountyId;
        const updatedObject = await Bounty.findOneAndUpdate({ _id: bountyId}, req.body )
         res.status(200).send(updatedObject)
    })

    .delete( async(req, res) => {
        const bountyId = req.params.bountyId;
       await Bounty.findOneAndDelete({_id: bountyId})
        res.send("Successfully deleted a bounty hunter from the database!");
    })


module.exports = bountyHunterRouter;