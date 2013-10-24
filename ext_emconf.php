<?php

########################################################################
# Extension Manager/Repository config file for ext "<!= pkg.name !>".
#
# Auto generated 20-02-2013 17:01
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => '<!= pkg.name !>',
	'description' => '<!= pkg.description !>',
	'category' => 'misc',
	'author' => '<!= pkg.author.name !>',
	'author_email' => '<!= pkg.author.name.email !>',
	'author_company' => '',
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
			'typo3' => '6.0.0',
			'extbase' => '6.0.0',
			'fluid' => '6.0.0',
			't3b_common' => '',
			'fluidpages' => '',
			'fluidcontent' => '',
			'vhs' => '',
			'flux' => '',
		),
		'conflicts' => array(
		),
		'suggests' => array(
			't3b_config' => '',
		),
	)
);

?>
