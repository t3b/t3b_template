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
		kssMenuToggleActiveClass = 'kss___header__toggleNav--active',
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

				toggleMenu();
			});
			$kssSiteWrapper.on('click', function() {
				closeMenu();
			});

			// Add the active class for the current item in the sideMenu.
			$kssMenuActiveItem.addClass("kss___nav__item--active");

			// Format the template.
			formatTemplate();

			if ($kssMenuSub.length) {
				// Render the submenu.
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

			// Ensure code blocks are highlighted properly.
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
			// Modify the page header.
			var pageName = $kssContentWrapper.children('h1').find('.kss-header').html();
			if(pageName) {
				$('.kss_header__pageName').html(' - ' + pageName);
			}

			// Additional section formating
			$('.kss-box > p').each(function(index, elem) {
				var $this = $(elem),
					text = $this.html(),
					regExp = /(^&lt;!= |, !&gt)/;

				if(regExp.test(text)) {
					text = text.replace('&lt;!= ', '').replace(' !&gt;', '');
					var $wrapper = $this.parent().parent(),
						array = text.split(' || ');

					// Check for code only sections.
					if(array.indexOf('isPureCode') !== -1) {
						$wrapper.addClass('kss___hideExamples');
					}

					// Set the optional 'css' code type on the prettyPrint element.
					if(array.indexOf('type: css') !== -1) {
						$wrapper.find('.kss-markup > pre').removeClass('lang-html').addClass('lang-css');
					}

					// Remove the marker element.
					$this.remove();
				}
			});
		},
		toggleMenu = function() {
			if($body.hasClass(kssMenuIsOpenClass)) {
				closeMenu();
			} else {
				openMenu();
			}
		},
		openMenu = function() {
			$kssMenuToggle.addClass(kssMenuToggleActiveClass);
			$body.addClass(kssMenuIsOpenClass);

			// Fallback for older browsers.
			if(!Modernizr.csstransforms) {
				$kssMenuWrapper.show().animate({
					left: '0'
				}, 400 );
				$kssSiteWrapper.animate({
					marginLeft: kssMenuWrapperWidth
				}, 400 );
			}
		},
		closeMenu = function() {
			$kssMenuToggle.removeClass(kssMenuToggleActiveClass);
			$body.removeClass(kssMenuIsOpenClass);

			// Fallback for older browsers.
			if(!Modernizr.csstransforms) {
				$kssMenuWrapper.animate({
					left: '-' + kssMenuWrapperWidth
				}, 400, function(){
					$kssMenuWrapper.hide();
				} );
				$kssSiteWrapper.animate({
					marginLeft: '0'
				}, 400 );
			}
		};

	init();
})(jQuery);
