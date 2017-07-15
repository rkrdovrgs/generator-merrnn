var mongojs = require('mongojs');
var connectionString = process.env.MONGODB_URI || '<%= options.dbName %>';

module.exports = function (collections) {
    return mongojs(connectionString, collections);
};