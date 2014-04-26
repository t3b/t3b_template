(function() {
	var $kssMenu = $('.kss___nav'),
		$kssMenuItems = $kssMenu.find('.kss___nav__item'),
		$kssMenuActiveItem = $kssMenuItems.eq($kssMenu.data('kss-activemenuindex'));


	$kssMenuActiveItem.addClass('kss___nav__item--active')
})();
