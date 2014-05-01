/* global prettyPrint */
(function($) {
	"use strict";

	var $window = $(window),
		$body = $('body'),
		urlHash = window.location.hash,
		scrollBuffer = false,

		// Nav vars
		$kssMenuToggle = $('.kss___header__toggleNav'),
		$kssMenuWrapper = $(".kss___navWrapper"),
		$kssMenu = $(".kss___nav"),
		$kssMenuItems = $kssMenu.find(".kss___nav__item"),
		$kssMenuActiveItem = $kssMenuItems.eq($kssMenu.data("kss-activemenuindex")),
		$kssMenuSub = $(".kss___navSub"),
		$kssMenuSubItems = $kssMenuSub.find(".kss___navSub__item"),
		kssMenuIsOpenClass = 'kss___navIsOpen',
		kssMenuWrapperWidth = $kssMenuWrapper.outerWidth(),
		kssMenuStickyClass = "kss___nav--sticky",
		kssMenuSubActiveClass = "kss___navSub__item--active",
		kssMenuOffset = $kssMenu.offset().top,

		// Content related vars
		$kssSiteWrapper = $('.kss___siteWrapper'),
		$kssContentWrapper = $('.kss___contentWrapper'),

		// Initial setup of the application.
		init = function() {
			$kssMenuToggle.on("click", function(event){
				event.preventDefault();
				event.stopImmediatePropagation();

				$(this).toggleClass('kss___header__toggleNav--active');
				toggleMenu();
			});

			// Add the active class for the current item in the sideMenu.
			$kssMenuActiveItem.addClass("kss___nav__item--active");

			// Format the template.
			formatTemplate();

			if ($kssMenuSub.length) {
				// Render the submenu
				renderSubMenu();

				// Set the active class on the current item.
				scrollSpy();
				$window.on("scroll", function() {
					if (!scrollBuffer) {
						scrollBuffer = setTimeout(function () {
							scrollSpy();
							scrollBuffer = false;
						}, 60);
					}
				});
			}

			// Set the height of the sideNav as a min-height on the contentWrapper.
			$kssContentWrapper.css("min-height", $kssMenu.height());

			// Ensure code blocks are highlighted properly...
			prettyPrint();
		},

		renderSubMenu = function() {
			// Add the menu depth classes for each item.
			$kssMenuSubItems.each(function(index, elem) {
				var $this = $(elem),
					$referenceNum = $this.find('.kss___navSub__item__ref'),
					depth = $referenceNum.html().split('.').length;
				$this.addClass('kss___navSub__item--' + depth);
			});

			// Append the subMenu of the current item into the sideMenu.
			$kssMenuSub.appendTo(".kss___nav__item--active");
		},

		scrollSpy = function () {
			var scrollTop = $window.scrollTop(),
				$kssMenuSubAnchors = $kssMenuSub.find("a"),
				currentTargetHash,
				activeIndex;

			// Get the new index for the new active subMenuItem.
			$kssMenuSubAnchors.each(function (index) {
				var anchorHash = $(this).attr("href"),
					$anchorTarget = $(anchorHash.replace(/\./g, "\\.")),
					offsetTop = $anchorTarget.offset().top,
					offsetBottom = offsetTop + $anchorTarget.outerHeight(true);

				if (offsetTop <= scrollTop && scrollTop < offsetBottom) {
					activeIndex = index;
					currentTargetHash = anchorHash;
				}
			});

			// Set the active class on the subMenuItem.
			$kssMenuSubItems.removeClass(kssMenuSubActiveClass);
			if (typeof activeIndex !== "undefined") {
				$kssMenuSubItems.eq(activeIndex).addClass(kssMenuSubActiveClass);
				if(urlHash !== currentTargetHash) {
					history.replaceState(null, null, currentTargetHash);
					urlHash = currentTargetHash;
				}
			} else if(scrollTop < $($kssMenuSubAnchors.eq(0).attr("href").replace(/\./g, "\\.")).offset().top) {
				$kssMenuSubItems.eq(0).addClass(kssMenuSubActiveClass);
			}
		},
		formatTemplate = function() {
			$('.kss-box').each(function(index, elem) {
				var $this = $(elem),
					isPureCodeMarker = '&lt;!= isPureCode !&gt;',
					boxHtml = $this.html(),
					isPureCode = boxHtml.search(isPureCodeMarker);

				if(isPureCode > 1) {
					$this.html(boxHtml.replace(isPureCodeMarker, '')).parent().addClass('kss___hideExamples');
				}
			});
		},
		toggleMenu = function() {
			$body.toggleClass(kssMenuIsOpenClass);

			// Fallback for older browsers.
			if(!Modernizr.csstransforms) {
				if($kssMenuWrapper.is(':visible')) {
					$kssMenuWrapper.animate({
						left: '-' + kssMenuWrapperWidth
					}, 400, function(){
						$kssMenuWrapper.hide();
					} );
					$kssSiteWrapper.animate({
						marginLeft: '0'
					}, 400 );
				} else {
					$kssMenuWrapper.show().animate({
						left: '0'
					}, 400 );
					$kssSiteWrapper.animate({
						marginLeft: kssMenuWrapperWidth
					}, 400 );
				}
			}
		};

	init();
})(jQuery);
