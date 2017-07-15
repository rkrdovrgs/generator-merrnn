var connection = require('./connection');
var data = require('./data.json');
var db = connection(Object.keys(data));

exports.sync = function (force = true) {
    if (!force) return;
    Object.keys(data).forEach(collectionName => {
        db[collectionName].drop(() =>
            db[collectionName].insert(data[collectionName])
        );
    });
}