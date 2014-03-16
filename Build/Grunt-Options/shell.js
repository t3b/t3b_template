/**
 * Grunt-Shell
 * @description Run shell commands.
 * @docs https://github.com/sindresorhus/grunt-shell
 */

var os = require('os'),
	config = require("../Config"),
	isWin = /^win/.test(os.platform());

module.exports = {
	"deleteGitHooks" : {
		"command" : isWin ? "rmdir .git\\hooks\\ /s /q" : "rm -rf .git/hooks/",
		"options" : {
			"stdout" : true,
			"stderr" : true,
			"failOnError" : true
		}
	},
	"hookUpGit" : {
		"command" : "mkdir .git/hooks/ && cp Build/Git-Hooks/pre-commit .git/hooks/",
		"options" : {
			"stdout" : true,
			"stderr" : true,
			"failOnError" : true
		}
	}
};
