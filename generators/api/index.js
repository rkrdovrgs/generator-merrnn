var Generator = require('yeoman-generator');

class FileGenerator extends Generator {
    writing(options) {
        options.collectionName = options.collectionName.toLowerCase();
        this.fs.copyTpl(
            this.templatePath('./src.js'),
            this.destinationPath(`api/${options.collectionName}.js`),
            { options }
        );
    }
}

module.exports = class extends FileGenerator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'collectionName',
                message: 'Collection name (e.g. employees):'
            }
        ]).then(this.writing.bind(this));
    }
};