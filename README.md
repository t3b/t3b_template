# t3b_template
[![Build
Status](https://travis-ci.org/t3b/t3b_template.png?branch=master)](https://travis-ci.org/t3b/t3b_template)

A Kickstarter Template-Extension for [TYPO3](http://typo3.org/) based on the Fluid template-engine and [Compass](http://compass-style.org/)/[Sass](http://sass-lang.com/).
It includes a base HTML5-Template with Modernizr, Stylesheet and an optional usable Build process based on [Grunt.js](gruntjs.com).


## Installation
[Download](https://github.com/t3b/t3b_template/archive/master.zip) the extension, unzip it and rename the `t3b` directory prefix.
Customize the title, description, project homepage, author and author-email inside the `package.json`-file located in `/`.

Optionally you can use [Grunt.js](gruntjs.com) to automate the following build process.
`cd` into the extension folder and run `npm_install` to download grunt and it's dependencies, afterwards run `grunt init`.
This will customize the file-paths and replace all meta-data stored in the extension files with
those you've just set in the `package.json`-file as well as compile an stylesheet using [Compass](http://compass-style.org/).

After you've made these changes, import the extension into your TYPO3-System.


## Dependencies for the Build-Process
* Sass 3.2.9 (Media Mark)
* Compass 0.12.2 (Alnilam)
* Grunt CLI and Node.js


## Documentation
_(Coming soon)_


## License
Copyright (c) 2012 TYPO3 Base-Team.
Licensed under the MIT, GPL licenses.
