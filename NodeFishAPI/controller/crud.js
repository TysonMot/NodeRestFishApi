'use strict';


let mongoose = require('mongoose');
Fish = mongoose.model('Fish');

exports.getDB() = (req, res) => {
    Fish.Find({}, (err, fish) => {
        if (err) {
            res.send(err);
            res.json(fish)
        };
    });
};

exports.createDB() = (req, res) => {
    let new_fish = new Fish(req.body);
    new_fish.save() = (err, fish) => {
        if (err) {
            res.send(err);
            res.json(fish);
        };
    };
};

exports.readDB() = (req, res) => {
    Fish.findById(req.param.fishId, (err, fish) => {
        if (err) {
            res.send(err);
            res.json(fish);
        };
    });
};

exports.updateDB() = (req, res) => {
    Fish.findOneAndUpdate({ _id: req.params.fishId }, req.body, { new: true }, (err, fish) => {
        if (err) {
            res.send(err);
            res.json(fish);
        };
    });
};

exports.deleteDB() = (req, res) => {
    Fish.remove({
        _id: req.params.fishId
    }, (err, fish) => {
        if (err) {
            res.send(err);
            res.json({ message: 'Fish deleted' });
        };
    });
};