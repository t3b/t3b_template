# t3b_template
[![Build
Status](https://travis-ci.org/t3b/t3b_template.png?branch=master)](https://travis-ci.org/t3b/t3b_template)

A Kickstarter Template-Extension for [TYPO3](http://typo3.org/) which provides your with a clean and lean boilerplate for Fluid templates.
Part of the boilerplate is an minimal [Sass](http://sass-lang.com/) base, a [RequireJS](http://requirejs.org/) boilerplate as well as an optional Build process based on [Grunt.js](http://gruntjs.com).


## Installation
[Download](https://github.com/t3b/t3b_template/releases) the extension, extract the contents and rename the `t3b` directory prefix.
Customize the title, description, project homepage and the author object inside the `package.json`-file located in `/`.

Optionally you can use [Grunt.js](http://gruntjs.com) to automate the following build process.
`cd` into the extension folder and run `npm install` to download grunt and it's dependencies, afterwards you can run `grunt init`.
This will create a fully functional template extension which you'll just need to import the extension into your TYPO3-System.

Detailed information on what `grunt init` does, can be found in the [wiki](https://github.com/t3b/t3b_template/wiki).


## Dependencies for the Build-Process
* Sass 3.3.5
* Grunt CLI and Node.js


## Documentation
[Head over to the t3b_template wiki](https://github.com/t3b/t3b_template/wiki)


## License
Copyright (c) 2012-2014 Tyll Weiß.
Licensed under the [MIT licenses](https://github.com/t3b/t3b_template/blob/master/LICENSE.md).
