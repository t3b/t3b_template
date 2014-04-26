(function() {
	var $kssMenu = $('.kss___nav'),
		$kssMenuItems = $kssMenu.find('.kss___nav__item'),
		$kssMenuActiveItem = $kssMenuItems.eq($kssMenu.data('kss-activemenuindex'));

	// Add the active class for the current item in the sideMenu.
	$kssMenuActiveItem.addClass('kss___nav__item--active')
})();
