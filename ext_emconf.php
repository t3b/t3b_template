<?php

########################################################################
# Extension Manager/Repository config file for ext "<!= pkg.name !>".
#
# Auto generated <!= date !>
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Templates for <!= pkg.homepage !>',
	'description' => '<!= pkg.description !>',
	'category' => 'templates',
	'author' => '<!= pkg.author.name !>',
	'author_email' => '<!= pkg.author.email !>',
	'author_company' => '<!= pkg.author.company !>',
	'shy' => '',
	'priority' => '',
	'module' => '',
	'state' => 'alpha',
	'internal' => '',
	'uploadfolder' => 1,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 0,
	'lockType' => '',
	'version' => '<!= pkg.version !>',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.2.0',
			'extbase' => '6.0.0',
			'fluid' => '6.0.0',
			'fluidpages' => '3.0.0',
			'fluidcontent' => '4.0.0',
			'vhs' => '',
			'flux' => '7.0.0',
		),
		'conflicts' => array(
		),
		'suggests' => array(
			't3b_config' => '',
		),
	)
);

?>
