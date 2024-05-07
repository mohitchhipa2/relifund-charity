(function($) {
    "use strict";
    
    $(document).ready(function() {

       //preloading for page
        $(window).on('load', function() { // makes sure the whole site is loaded 
            var status = $('.preloader');
            var preloader = $('.preloder-wrap');
            var body = $('body');
            status.fadeOut(); // will first fade out the loading animation 
            preloader.delay(0).fadeOut('fast'); // will fade out the white DIV that covers the website. 
            body.delay(0).css({'overflow':'visible'});
            var vidDefer = document.getElementsByTagName('iframe');
            for (var i=0; i<vidDefer.length; i++) {
                if(vidDefer[i].getAttribute('data-src')) {
                    vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
                } 
            }
        })

        /* -------------------------------------------------------------
          menu Active js
        ------------------------------------------------------------- */
        $( "#superMenu" ).superMegaMenu({
            backgroundColor: 'gray'
        });
        $( "#superMenuTwo" ).superMegaMenu({
            backgroundColor: 'gray'
        });


        /* stiky nav */
        window.onscroll = function() {myFunction()};
        if($('#superMenu').length){
          var header = document.getElementById("superMenu");
        }else {
           var header = document.getElementById("superMenuTwo");
        }
        
        var sticky = header.offsetTop;

        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }



        /* -------------------------------------------------------------
          on click js
        ------------------------------------------------------------- */
        if ($('.intro-select a[href^="#"]').length){
          $('.intro-select a[href^="#"]').not("#scrollUp").on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                 'scrollTop': $target.offset().top
            }, 900, 'swing');
          });
        }


        /* -------------------------------------------------------------
            Parallax
        ------------------------------------------------------------- */
        $('.trusted-partner-slide').owlCarousel({
            loop:true,
            margin:8,
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })

        /*
        |---------------------------------------------
        | client-carouse
        |---------------------------------------------
        */
        $('.client-carousel').owlCarousel({
            loop:true,
            autoplay: true,
            margin:10,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }) 

        /* -------------------------------------------------------------
          wow js
        ------------------------------------------------------------- */
        // var wow = new WOW(
        //   {
        //     boxClass:     'wow',    
        //     animateClass: 'animated', 
        //     offset:       0,          
        //     mobile:       false,       
        //     live:         true,       
        //     callback:     function(box) {
        //     },
        //     scrollContainer: null, 
        //     resetAnimation: true,     
        //   }
        // );
        // wow.init();

        /* -------------------------------------------------------------
          RoundCircle Progress js
        ------------------------------------------------------------- */
        function roundCircleProgress () {
          var rounderContainer = $('.piechart');
          if (rounderContainer.length) {
            rounderContainer.each(function () {
              var Self = $(this);
              var value = Self.data('value');
              var size = Self.parent().width();
              var color = Self.data('border-color');

              Self.find('span').each(function () {
                var expertCount = $(this);
                expertCount.appear(function () {
                  expertCount.countTo({
                    from: 1,
                    to: value*100,
                    speed: 2000
                  });
                });

              });
              Self.appear(function () {         
                Self.circleProgress({
                  value: value,
                  size: 50,
                  thickness: 4,
                  emptyFill: '#e8eef1',
                  animation: {
                    duration: 2000
                  },
                  fill: {
                    color: color
                  }
                });
              });
            });
          };
          // banner //
          var bannerRounderContainer = $('.bannerpiechart');
          if (bannerRounderContainer.length) {
            bannerRounderContainer.each(function () {
              var Self = $(this);
              var value = Self.data('value');
              var size = Self.parent().width();
              var color = Self.data('border-color');

              Self.find('span').each(function () {
                var expertCount = $(this);
                expertCount.appear(function () {
                  expertCount.countTo({
                    from: 1,
                    to: value*100,
                    speed: 2000
                  });
                });

              });
              Self.appear(function () {         
                Self.circleProgress({
                  value: value,
                  size: 100,
                  thickness: 4,
                  emptyFill: '#e8eef1',
                  animation: {
                    duration: 2000
                  },
                  fill: {
                    color: color
                  }
                });
              });
            });
          };
        }
        
        // Window load function
        jQuery(window).on('load', function () {
           (function ($) {
              roundCircleProgress ();
          })(jQuery);
        });

        /* -------------------------------------------------------------
          map js
        ------------------------------------------------------------- */
        if($('#map').length){
            function initMap() {
            var usRoadMapType = new google.maps.StyledMapType([
                  {
                    featureType: 'all',
                    elementType: 'all',
                    stylers: [
                      {invert_lightness: 'true'},        
                      {hue: '#335158'},
                      {saturation: 40},
                      {lightness: 30},         
                      {gamma: 0.5}
                    ]
                  }
                ], {name: 'Dark Style'});  
              var uluru = {lat: 42.316725, lng: -75.392093};
              var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: uluru,
                mapTypeControlOptions: {
                  position: google.maps.ControlPosition.TOP_LEFT,
                  mapTypeIds: [google.maps.MapTypeId.ROADMAP,
                    google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID,
                    google.maps.MapTypeId.TERRAIN, 'usroadatlas']
                },  
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                },
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }
              });
            map.mapTypes.set('usroadatlas', usRoadMapType);
            map.setMapTypeId('usroadatlas');
              var contentString = '<div class="map-info-box">'+ 
                 '<div class="map-head">'+ 
                 '<h3>Launch</h3></div>'+ 
                 '<p class="map-address"><i class="fa fa-map-marker"></i> Lorem ipsum dolor sit amet <br><i class="fa fa-phone"></i> 800-8765-4321<br><span class="map-email"><i class="fa fa-envelope"></i> info@yoursite.com</span></p>'+ 
                 '<p><a href="https://www.google.com/maps/place/8+Bridge+St,+Sidney,+NY+13838,+Birle%C5%9Fik+Devletler/@42.31647,-75.392079,19z/data=!3m1!4b1!4m5!1m2!2m1!1s60+MAIN+ST.+SIDNEY,+NY+13838+ABD!3m1!1s0x89dba3d449a51193:0x4e86a4772df5fa8f" target="_blank">Open on Google Maps</a></p></div>';
              
              var infowindow = new google.maps.InfoWindow({
                content: contentString
              });
              var image = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png';
              var marker = new google.maps.Marker({
                position: uluru,
                map: map,
                icon: image,
                title: 'Uluru (Ayers Rock)'
              });
              marker.addListener('onclick', function() {
                infowindow.open(map, marker);
              });
               marker.addListener('onclick', function() {
                map.setZoom(14);
                map.setCenter(marker.getPosition());
              });
            }
            google.maps.event.addDomListener(window, "load", initMap);
            window.onorientationchange = function(){window.location.reload();}
        }

        /* -------------------------------------------------------------
           gallery isotope
        ------------------------------------------------------------- */
        function reliefhub_isotpop_filter(selector, buttonSelector){
            if ($(selector).length){
                var $teamFilter = $(selector).isotope();
                var activeClass = 'active';

                $(buttonSelector).on( 'click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $teamFilter.isotope({ filter: filterValue });

                    $(buttonSelector).find('.'+activeClass).removeClass(activeClass);
                    $(this).addClass(activeClass);
                });
            }
        }
        /* Gallery Isotop Filter */
        reliefhub_isotpop_filter('.gallery-isotope', '.gallery-isotope-btn');


        // /* -------------------------------------------------------------
        //   time count js
        // ------------------------------------------------------------- */
        if($('.widget-time-count').length){
          const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 107;

          let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
          x = setInterval(function() {

            let now = new Date().getTime(),
            distance = countDown - now;
            document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
          }, second)
        }


        /* -------------------------------------------------------------
            testimonial-section
        ------------------------------------------------------------- */
        var leftArrow = '<i class="fa fa-arrow-circle-left"></i>';
        var rightArrow = '<i class="fa fa-arrow-circle-right"></i>';
        if ($('.testimonial-content-carousel').length){
          var sync1 = $(".testimonial-content-carousel"),
              sync2 = $(".testimonial-thumbs-carousel"),
              flag = false,
              duration = 500;

          sync1.owlCarousel({
            loop: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed:450,
            items: 1,
            nav: true,
            dots: false,
            navText: [leftArrow, rightArrow],
          })
          .on('changed.owl.carousel', function (e) {
              if (!flag) {
                  flag = false;
                  sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                  flag = false;
              }
          });
          
          sync2.owlCarousel({
              loop: false,
              items: 3,
              nav: false,
              dots: false,
              margin: 20,
              responsive:{
                0:{
                    items:1
                },
                768:{
                    items: 3
                }
              }
          })
          .on('changed.owl.carousel', function (e) {
              if (!flag) {
                  flag = false;
                  sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                  flag = false;
              }
          });
        };


        /* -------------------------------------------------------------
          Scroll To Top
        ------------------------------------------------------------- */
        $.scrollUp({
          scrollText: '<i class="fa fa-angle-up"></i>',
        });


      /* -------------------------------------------------------------
            search-menu-bar
        ------------------------------------------------------------- */
        if($('.search-menu-btn').length){
          $('.search-menu-btn').on('click', function () {
            $('.search-bar').fadeToggle("slow");
            $(this).toggleClass("actives");
            $('.search-menu-btn > i').toggleClass("fa-seach fa-times");
          });
        }
        /* -------------------------------------------------------------
            Push Menu & Search bar Close
        ------------------------------------------------------------- */
        $('body').on('click', function(event) {
          if (!$(event.target).closest('.search-menu-btn').length && !$(event.target).closest('.search-bar').length) {
            $('.search-bar').removeAttr("style");
            $('.search-menu-btn > i').removeClass("fa-times").addClass("fa-seach");
          }
        });




    

    });
})(jQuery);


     

