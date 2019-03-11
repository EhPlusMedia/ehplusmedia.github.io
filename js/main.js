"use strict";


/*---------------------------------------------*
 * SETTINGS
 ---------------------------------------------*/


//Loading
var preLoader = false; // If you like to hide your menu set true

//MENU HIDE
var hide_menu = false; // If you like to hide your menu set true

// TWITTER ID
var wowAnimation = true;  //
// TWITTER ID
var twitterID = '569000074533814272';  //

// MailChimp OPTIN URL
var mailchimpUrl = "http://facebook.us8.list-manage.com/subscribe/post-json?u=85f515a08b87483d03fee7755&id=dff5d2324f"; //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  



/*---------------------------------------------*
 * PRELOADER
 ---------------------------------------------*/
if (preLoader === true) {
    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
}




jQuery(document).ready(function ($) {
    "use strict";



    /*---------------------------------------------*
     * SETTINGS
     ---------------------------------------------*/





    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.screenshots').owlCarousel({
        responsiveClass: true,
        autoplay: true,
        items: 4,
        loop: true,
        margin: 20,
        dots: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            // breakpoint from 480 up
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 2
            },
            980: {
                items: 4
            }
        }
    });


    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/
    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });

    if (wowAnimation === true) {
        wow.init();
    }


    /*---------------------------------------------*
     * Skills
     ---------------------------------------------*/

    $('.skills').waypoint(function () {

        $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            animate: 2000,
            scaleColor: false,
            lineWidth: 12,
            lineCap: 'square',
            size: 150,
            trackColor: '#EDEDED',
            barColor: '#eec400',
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    });



    


    /* ------------------------------------------------
     ---  MAILCHIMP                 ------
     --------------------------------------------------- */

    $('#mailchimp').ajaxChimp({
        callback: mailchimpCallback,
        url: mailchimpUrl //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
    });
    function mailchimpCallback(resp) {
        var rm = "0 -";
        var msgs = resp.msg.replace(rm, '');
        if (resp.result === 'success') {
            $('.subscription-success').html('<h4><i class="fa fa-check success-msg"></i> ' + msgs + '</h4>').fadeIn(1000);
            $('.subscription-error').fadeOut(500);
        } else if (resp.result === 'error') {
            $('.subscription-error').html('<h4><i class="fa fa-times error-msg"></i> ' + msgs + '</h4>').fadeIn(1000);

        }
    }





});