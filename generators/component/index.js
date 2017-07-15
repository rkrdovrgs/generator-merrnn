var Generator = require('yeoman-generator');

const namedComponents = ['Basic Stateless', 'Basic Stateful', 'Advance Stateful'];

class FileGenerator extends Generator {
    writing(options) {
        options.template = options.componentType.replace(/\s/ig, '');
        this.fs.copyTpl(
            this.templatePath(`./${options.template}.js`),
            this.destinationPath(`src/components/${options.componentName}/${options.componentName}.dom.js`),
            { options }
        );
    }
}

module.exports = class extends FileGenerator {
    prompting() {

        return this.prompt([
            {
                type: 'list',
                name: 'componentType',
                message: 'Select type of component:',
                choices: [
                    'Basic Stateless',
                    'Basic Stateful',
                    'Advance Stateful',
                    'Basic Read All',
                    'Basic Read By Id',
                    'Basic Create',
                    'Basic Update By Id',
                ]
            },
            {
                type: 'input',
                name: 'componentName',
                message: 'Component name (e.g. EmployeeDetails):'
            },
            {
                type: 'input',
                name: 'collectionName',
                message: 'Collection name (e.g. employees):',
                when: answers => !namedComponents.includes(answers.componentType)
            }
        ]).then(this.writing.bind(this));
    }
};