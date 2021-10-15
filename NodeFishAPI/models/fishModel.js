'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const FishSchema = () => new Schema({
    Species: {
        type: String,
        required: 'Please enter species name'
    },
    Color: {
        type: String,
        required: 'Please enter species color'
    },
    NoOfFins: {
        type: Number,
        required: 'Please enter species number of fins'
    },
    Created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Fish', FishSchema)