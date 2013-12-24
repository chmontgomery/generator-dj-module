var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var DjModuleGenerator = module.exports = function DjModuleGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DjModuleGenerator, yeoman.generators.Base);

DjModuleGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [
        {
            name: 'moduleName',
            message: 'What do you want to call your module?',
            default: 'djx.module.myModule'
        }
    ];

    this.prompt(prompts, function (props) {
        this.moduleName = props.moduleName;

        cb();
    }.bind(this));
};

DjModuleGenerator.prototype.app = function app() {
    this.mkdir('test');
    this.mkdir('lib');
    this.copy('_do_not_do_this_test.js', 'test/do_not_do_this_test.js');
    this.copy('_do_not_do_this.js', 'lib/do_not_do_this.js');
    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    this.template('_Gruntfile.js', 'Gruntfile.js');
};

DjModuleGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
};
