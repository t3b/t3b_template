/* global prettyPrint */
(function($) {
	"use strict";

	var $window = $(window),
		$kssMenu = $(".kss___nav"),
		$kssMenuItems = $kssMenu.find(".kss___nav__item"),
		$kssMenuActiveItem = $kssMenuItems.eq($kssMenu.data("kss-activemenuindex")),
		$kssMenuSub = $(".kss___navSub"),
		$kssMenuSubItems = $kssMenuSub.find(".kss___navSub__item"),
		$kssContentWrapper = $('.kss___contentWrapper'),
		kssMenuStickyClass = "kss___nav--sticky",
		kssMenuSubActiveClass = "kss___navSub__item--active",
		kssMenuOffset = $kssMenu.offset().top,
		urlHash = window.location.hash,
		scrollBuffer = false,

		init = function() {
			// Add the active class for the current item in the sideMenu.
			$kssMenuActiveItem.addClass("kss___nav__item--active");

			// Format the template.
			formatTemplate();

			if ($kssMenuSub.length) {
				// Add the menu depth classes for each item.
				$kssMenuSubItems.each(function(index, elem) {
					var $this = $(elem),
						$referenceNum = $this.find('.kss___navSub__item__ref'),
						depth = $referenceNum.html().split('.').length;
					$this.addClass('kss___navSub__item--' + depth);
				});

				// Append the subMenu of the current item into the sideMenu.
				$kssMenuSub.appendTo(".kss___nav__item--active");

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
			$('pre>code').addClass('prettyprint');
			prettyPrint();
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

			// Validate if the sideNav should be sticky or not.
			if(scrollTop > kssMenuOffset) {
				$kssMenu.addClass(kssMenuStickyClass);
			} else {
				$kssMenu.removeClass(kssMenuStickyClass);
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
		};

	init();

})(jQuery);
