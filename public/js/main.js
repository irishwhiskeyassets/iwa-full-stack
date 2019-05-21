//Hamburger functionality
$(document).ready(function () {
        $(".hamburger-container").click(function () {
            $(".hamburger").toggleClass("is-active");
            $(".mobile-menu").toggleClass("menu-active");
        });
    });
    

    $(document).ready(function () {
        $('.carousel-container').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            adaptiveHeight: true
        });
    });
    

