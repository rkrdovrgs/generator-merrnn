var Generator = require('yeoman-generator');

class DirectoryGenerator extends Generator {
    writing(options) {
        options.appName = options.appName.toLowerCase().replace(/(\.|\s)/ig, '');
        options.dbName = `${options.appName}db`.replace(/\-/ig, '');

        return this.fs.copyTpl(
            this.templatePath('./'),
            this.destinationPath(options.appName),
            { options }
        );
    }
}

module.exports = class extends DirectoryGenerator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'appName',
                message: 'Application name (e.g. nytimes):'
            }
        ]).then(this.writing.bind(this));
    }
};