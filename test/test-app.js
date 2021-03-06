/*global describe, beforeEach, it*/
'use strict';

const path = require('path'),
      helpers = require('yeoman-test'),
      assert = require('yeoman-assert'),
      os = require('os'),
      spawn = require('smart-spawn');

// Tests in the "expensive" suite failing on your local machine? Try increasing this timeout.
const installTimeout = 90 * 1000;

const files = ['package.json',
             '.editorconfig',
             'package.json',
             'gulpfile.js',
             '.gitignore',
             'src/index.pug',
             'src/blog/post.pug',
             'src/blog/index.pug',
             'src/blog/hello-world.md',
             'src/includes/layout.pug',
             'src/includes/post.pug',
             'src/scripts/main.js',
             'src/styles/main.styl',
             'src/images/.gitkeep',
             '.jshintrc'];

describe('stratic:app', function () {
	const tmpdir = path.join(os.tmpdir(), './temp-test');

	beforeEach(function () {
		return helpers.run(path.join(__dirname, '../app'))
		              .inDir(tmpdir)
		              .withOptions({ 'skip-install': true })
		              .withPrompts({
		              	projectName: 'Test project'
		              });
	});

	it('creates source files', function () {
		assert.file(files);
	});

	it('templates source files properly', function () {
		assert.noFileContent(files.map(filename => [filename, '<%']));
	});

	it('creates source files with the correct content');

	if (process.env.STRATIC_TEST_EXPENSIVE !== 'true') return;

	it('can run `gulp build`', function (done) {
		this.timeout(installTimeout);
		spawn('npm', ['install'], tmpdir, function (err) {
			if (err) return done(err);

			return spawn('gulp', ['build'], tmpdir, done);
		});
	});

	it('will build all the required files');

	it('will build the correct HTML content');

	it('will build the correct CSS content');

	it('will build the correct JS content');

	it('will build the correct RSS content');

	it('will build valid HTML files');

	it('will build HTML with valid microformats2 markup');

	it('will build valid CSS files');

	it('will build valid JS files');

	it('will build valid RSS files');

	it('can run `gulp serve`');

	it('can run `gulp deploy`');
});
