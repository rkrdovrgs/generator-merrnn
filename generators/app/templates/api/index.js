var fs = require('fs');

exports.configureRoutes = function (app) {
    let ext = '.js';
    fs.readdirSync("./api")
        .filter(f => f.endsWith(ext) && !f.startsWith("index."))
        .map(f => f.replace(ext, ""))
        .forEach(file => {
            var route = require("./" + file);
            app.use('/api', route);
        });
};