const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedToChannel: {
        type: String,
        required: true,
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural version of your model name.
// Thus, for the example above, the model Subscriber is for the subscribers collection in the database.
module.exports = mongoose.model("Subscriber", subscriberSchema);

// Now, in routes/subscribers.js, you can import the Subscriber model and use it to perform CRUD operations on the subscribers collection:
// const express = require("express");
// const router = express.Router();
// const Subscriber = require("../models/subscriber");
//
