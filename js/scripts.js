$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//     require( 'node_modules/lib/jquery.waypoints.min.js' )
// const el = document.querySelector( '.counter' )
// new Waypoint( {
//     element: el,
//     handler: function() { 
//         counterUp( el ) 
//         this.destroy()
//     },
//     offset: 'bottom-in-view',
// } )


// jQuery(document).ready(function($) {
    
// });


//   $(document).ready(function(){



//     $('.counter').counterUp({
//       delay: 10,
//       time: 1000
//   });
// });


//   function enableCounterUp(a) {
//     var counterElement;
//     if (isExists('#counter')) {
//             counterElement = $('#counter');
//     }
//     else {
//             return;
//     }
//     var oTop = $('#counter').offset().top - window.innerHeight;
//     if (a == 0 && $(window).scrollTop() > oTop) {
//             $('.counter-value').each(function () {
//                     var $this = $(this),
//                             countDuration = $this.data('duration'),
//                             countTo = $this.attr('data-count');
//                     $({countNum: $this.text()}).animate({countNum: countTo}, {
//                             duration: countDuration,
//                             easing: 'swing',
//                             step: function () {
//                                     $this.text(Math.floor(this.countNum));
//                             },
//                             complete: function () {
//                                     $this.text(this.countNum);
//                             }
//                     });
//             });
//             a = 1;
//     }
// //     return a;
// }

// (function ($) {

//   "use strict";

//   /*COUNTER*/
// //   var countLineProgress = 0;
// //   var countCounterUp = 0;
// //   var a = 0;
// //   countCounterUp = enableCounterUp(countCounterUp);

// //   $(window).on('scroll', function () {
// //           countCounterUp = enableCounterUp(countCounterUp);
// //   });


// //   $('[data-menu]').on('click', function () {

// //           var mainMenu = $(this).data('menu');

// //           $(mainMenu).toggleClass('visible-menu');

// //   });



//     if ($.fn.counterUp) {
//         $('.counter').counterUp({
//             delay: 10,
//             time: 2000
//         });
//     }

// })(jQuery);

// jQuery(document).ready(function() {
	
	
// 	/*
// 	    Carousel
// 	*/
// 	$('#carousel-example').on('slide.bs.carousel', function (e) {var e = $(e.relatedTarget);
//     var idx = e.index();var itemsPerSlide = 4;
//     var totalItems = $('.carousel-item').length;
//     console.log("totalitems:"+totalItems);
//     console.log("e:"+e);
//     console.log("idx:"+idx);
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//     var it = itemsPerSlide - (totalItems - idx);
//     console.log("it:"+it);
//     for (var i=0; i<it; i++) {
//     // append slides to end
//     if (e.direction==="left") {
//     $('.carousel-item').eq(i).appendTo('.carousel-inner');
//     }
//     else {
//     $('.carousel-item').eq(0).appendTo('.carousel-item');
//     }
//     }
//     }
//     });
	
// });





jQuery(document).ready(function() {
	
	
	/*
	    Carousel
	*/
	$('#carousel-example').on('slide.bs.carousel', function (e) {

	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.carousel-item').eq(i).appendTo('.carousel-inner');
	            }
	            else {
	                $('.carousel-item').eq(0).appendTo('.carousel-inner');
	            }
	        }
	    }
	});
  
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $("#loginButton").click(function(){
    $("#loginModal").modal('show');
  });

  $('#nav').onePageNav();

});


