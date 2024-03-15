const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["food", "clothing", "plumbing"]
    }
})

module.exports = mongoose.model("CrudStore", InventorySchema);