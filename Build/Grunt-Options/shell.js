/**
 * Grunt-Shell
 * @description Run shell commands.
 * @docs https://github.com/sindresorhus/grunt-shell
 */

var config = require("../Config");

module.exports = {
	"hookUpGit" : {
		"command" : "rm -rf .git/hooks/ && mkdir .git/hooks/ && cp Build/Git-Hooks/pre-commit .git/hooks/",
		"options" : {
			"stdout" : true,
			"stderr" : true,
			"failOnError" : true
		},
	}
};
