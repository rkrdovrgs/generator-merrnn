var express = require("express");
var connection = require('../db/connection');
var mongojs = require('mongojs');

var router = express.Router();
var db = connection(['<%= options.collectionName %>']);

router.get('/<%= options.collectionName %>', function (req, res) {
    db.<%= options.collectionName %>.find({
        //[@todo: add filters]
    }, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to GET <%= options.collectionName %>
 */
router.get('/<%= options.collectionName %>/:id', function (req, res) {
    db.<%= options.collectionName %>.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to POST <%= options.collectionName %>
 */
router.post('/<%= options.collectionName %>', function (req, res) {
    db.<%= options.collectionName %>.insert(req.body, function (err, result) {
        if (err) return res.send(err);
        res.json(result);
    });
});

/**
 * @todo: place your api route handler logic to PUT <%= options.collectionName %>
 */
router.put('/<%= options.collectionName %>/:id', function (req, res) {
    delete req.body._id;
    db.<%= options.collectionName %>.update(
        { _id: mongojs.ObjectId(req.params.id) },
        req.body,
        function (err, result) {
            if (err) return res.send(err);
            res.json(result);
        });
});

/**
 * Other routes
 * ...
 * ...
 * ...
 */

module.exports = router;