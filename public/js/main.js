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
    

// Radio buttons clicked

function radioClicked(event){
    var bundleClicked = event.currentTarget.id;
    switch (bundleClicked) {
        case 'bronze':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            break;

        case 'silver':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            $("#option-2").addClass("active");
            $("#option-2").siblings().removeClass("active");
            interest = 1.01;
            margin = 0.05;
            setResults();
            break;

        case 'gold':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            $("#option-3").addClass("active");
            $("#option-3").siblings().removeClass("active");
            interest = 1.01;
            margin = 0.08;
            setResults();
            break;

        case 'diamond':
            $("#" + bundleClicked).addClass("selectedBundle");
            $("#" + bundleClicked).siblings().removeClass("selectedBundle");
            $("#option-4").addClass("active");
            $("#option-4").siblings().removeClass("active");
            setResults();
            break;
    }
}


