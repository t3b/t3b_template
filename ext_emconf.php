<?php

########################################################################
# Extension Manager/Repository config file for ext "t3b_frontend".
#
# Auto generated 20-02-2013 17:01
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'T3B FrontEnd Package',
	'description' => 'Base template configuration for website',
	'category' => 'T3B',
	'author' => 'Tyll Weiß',
	'author_email' => 'inkdpixels@googlemail.com',
	'author_company' => '',
	'shy' => '',
	'dependencies' => 'cms,extbase,fluid,t3b_config',
	'conflicts' => '',
	'priority' => '',
	'module' => '',
	'state' => 'alpha',
	'internal' => '',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 1,
	'lockType' => '',
	'version' => '1.1.9',
	'constraints' => array(
		'depends' => array(
			'php' => '5.3.0-0.0.0',
			'typo3' => '4.6.0-0.0.0',
			'cms' => '',
			'extbase' => '',
			'fluid' => '',
			't3b_config' => '',
			'gridelements' => '',
			'dam_pages' => '1.0.1'
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	'suggests' => array(
	)
);

?>
