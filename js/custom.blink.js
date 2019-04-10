(function($) {
	"use strict";

	var useParallax = true;


	// 1. Size setup

	var fullHeight = function() {
		$( 'body' ).css( 'height', $( window ).height() - $( 'body' ).offset().top );
	}

	fullHeight();

	$( window ).on( 'resize', function() {
		fullHeight();
	});

	// 2. Navigation

	$( '#nav-trigger' ).click( function(el) {
		el.preventDefault();
		$( this ).find( 'i.fa' ).toggleClass( 'fa-bars' ).toggleClass( 'fa-close' );
		$( '#nav' ).toggleClass( 'active' );
		$( '#nav-drop' ).slideToggle( 100 );
	});

	// 2.1. Same Page Scrolling Links

	$( '#menu' ).onePageNav({
		scrollSpeed: 400,
		changeHash: false,
		easing: 'swing',
		begin: function() {
			$( '#nav' ).removeClass( 'active' );
			$( '#nav-drop' ).slideUp( 100 );
			$( '#nav-trigger i.fa' ).removeClass( 'fa-close' ).addClass( 'fa-bars' );
		},
		scrollOffset: 69,
	});
	$.localScroll();

	// 2.2. Navigation FX on Scroll

	if( $( window ).scrollTop() > 60) {
		$( '#nav' ).addClass( 'scrolled' );
	}

	$( window ).bind( 'scroll', function() {
		if( $( this ).scrollTop() > 60) {
			$( '#nav' ).addClass( 'scrolled' );
		}
		if( $(this).scrollTop() < 60 ) {
			$( '#nav' ).removeClass( 'scrolled' );
		}
	});

	// 3. Hero

	// 3.1. Hero FX on Scroll

	if( useParallax == true ) {
		$( window ).scroll( function() {
			var st = $( this ).scrollTop();
			$( '#hero' ).css( { 'background-position': 'center '+ st/4 +'px' } );
			$( '.hero-slide' ).css( { 'background-position': 'center '+ st/4 +'px' } );
			$( '.hero-box' ).css( { transform: 'translateY( '+ st/1.5 +'px )', 'opacity' : (1 - st/700) } );
			$( '.scroll-alert i' ).css({ 'opacity' : (1 - st/100) });
			$( '#hero-slider .owl-controls' ).css({ 'opacity' : (1 - st/100) });
		});
	}

	
	// 6. Portfolio / Venobox / Lightbox

	$( '.lightbox' ).venobox({
		numeratio: true
	});
	$( '.info-link' ).venobox({
		bgcolor: '#161617'
	});


	// 6.2. Project Hovering

	$( '.project' ).hover(
		function() {
			$( this ).find( '.project-overlay ').stop().animate( { opacity: 0.9 }, 200 );
		},
		function() {
			$( this ).find( '.project-overlay ').stop().animate( { opacity: 0 }, 200 );
		}
	);

})(jQuery);