<?php

########################################################################
# Extension Manager/Repository config file for ext "t3b_template".
#
# Auto generated 20-02-2013 17:01
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'T3B Template Package',
	'description' => 'A Kickstarter Template-Extension wich is based on Fluid and Compass',
	'category' => 'misc',
	'author' => 'Tyll Weiß',
	'author_email' => 'inkdpixels@googlemail.com',
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
	'version' => '1.2.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.0.0',
				'extbase' => '6.0.0',
				'fluid' => '6.0.0',
			't3b_templating' => '',
			't3b_common' => '',
			'fluidpages' => '',
		),
		'conflicts' => array(
		),
		'suggests' => array(
			't3b_config' => '',
		),
	)
);

?>
