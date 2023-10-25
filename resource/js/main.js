new WOW().init();


function initialize() {
            var myCenter = new google.maps.LatLng(14.460264, 121.018709);
            var mapCanvas = document.getElementById("googleMap2");
            var mapOptions = {
                center: myCenter,
                zoom: 16
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({
                position: myCenter
            });
            marker.setMap(map);
        }


jQuery(document).ready(function($) {
        $('#slick-1').slick({
            centerMode: false,
            centerPadding: '60px',
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            focusOnSelect: true,
            autoplay: true,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '60px',
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        autoplay: false

                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '60px',
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        autoplay: false

                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '30px',
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                        autoplay: false,

                    }
                },

            ]
        });

        $(".slick-prev").addClass("fa fa-chevron-left");
        $(".slick-next").addClass("fa fa-chevron-right");
        $('.slick-prev, .slick-next').text('');
        $('.slick-dots li button').innerHTML = "whatever";
    });

$(document).ready(function() {

        $(".filter-button").click(function() {
            var value = $(this).attr('data-filter');

            if (value == "all") {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            } else {
                //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.' + value).hide('3000');
                $('.filter').filter('.' + value).show('3000');

            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");

    });