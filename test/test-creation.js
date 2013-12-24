/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('dj-module generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('dj-module:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            '.gitignore',
            '.editorconfig',
            'README.md',
            'package.json',
            'Gruntfile.js',
            'test/do_not_do_this_test.js',
            'lib/do_not_do_this.js',
        ];

        helpers.mockPrompt(this.app, {
            'moduleName': 'dj.module.testModule'
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
