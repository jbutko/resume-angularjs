'use strict';

/**
* Magnific Popup Directive by Jozef Butko
* Description: Zoom your gallery thumbnails to full screen images
* jQuery source: http://dimsemenov.com/plugins/magnific-popup/
* Magnific Popup version: v0.9.9
* Date: 08/09/2014
**/

angular
    .module('portfolioNgApp.directive', [])
    .directive('magnificPopup', function() {
        return {
            // Restrict it to be an attribute in this case
            restrict: 'AEC',
            replace: false,
            transclude: false,
            priority: 1001,
            // responsible for registering DOM listeners as well as updating the DOM
            // fullscreen gallery
            link: function(scope, element, attrs) {
                setTimeout(function() {
                    //$(element).fullsizable();
                    $(element).magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        preloader: true,
                        closeBtnInside: false,
                        fixedContentPos: true,
                        closeOnContentClick: true,
                        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
                        gallery: {
                            enabled: true,
                            navigateByImgClick: false
                        },
                        image: {
                            verticalFit: true
                        }
                    });
                }, 0);
            }
        };
    });
